import '@/css/tailwind.css'
import '@/css/prism.css'
import '@/css/extra.css'
import 'katex/dist/katex.css'
import '@fontsource/inter/variable-full.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import ProgressBar from 'react-scroll-progress-bar'
import ScrollTop from '@/components/ScrollTop'
import { Provider } from '@lyket/react'
import devLogger from '@/lib/devLogger'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

NProgress.configure({ showSpinner: false })

Router.onRouteChangeStart = () => {
  devLogger('Route change started')
  // console.log('onRouteChangeStart triggered');
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  devLogger('Route change completed')
  // console.log('onRouteChangeComplete triggered');
  NProgress.done()
}

Router.onRouteChangeError = () => {
  devLogger('Route change error')
  // console.log('onRouteChangeError triggered');
  NProgress.done()
}

const defaultTheme = {
  colors: {
    primary: '#71717a',
    secondary: '#ff00c3',
    text: '#fff',
    highlight: '#ff00c3',
    icon: '#fff',
    background: 'transparent',
  },
  fonts: {
    body: 'inherit',
  },
}

const DevLoggerComponent = () => {
  const [devSettings, setDevSettings] = useState({})

  useEffect(() => {
    fetch('/api/dev-status')
      .then(res => res.json())
      .then(data => {
        setDevSettings(data)
        if (data.dev) {
          window.devMode = true
          window.devSettings = data
          devLogger('Dev mode enabled', data.dev_custom_message || '')
        }
      })
      .catch(() => setDevSettings({}))
  }, [])

  useEffect(() => {
    if (!devSettings.dev) return

    devLogger('Setting up event listeners')

    const listeners = []

    // FPS Counter
    if (devSettings.dev_enable_fps_counter) {
      let fps = 0
      let lastTime = performance.now()
      const fpsElement = document.createElement('div')
      fpsElement.id = 'dev-fps-counter'
      fpsElement.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 5px 10px;
        font-size: 12px;
        z-index: 9999;
        border-radius: 4px;
      `
      document.body.appendChild(fpsElement)

      const updateFPS = () => {
        const now = performance.now()
        fps = Math.round(1000 / (now - lastTime))
        lastTime = now
        fpsElement.textContent = `FPS: ${fps}`
        requestAnimationFrame(updateFPS)
      }
      updateFPS()
      listeners.push(() => document.body.removeChild(fpsElement))
    }

    // Console Clear on Reload
    if (devSettings.dev_enable_console_clear_on_reload) {
      const handleBeforeUnload = () => {
        console.clear()
      }
      window.addEventListener('beforeunload', handleBeforeUnload)
      listeners.push(() => window.removeEventListener('beforeunload', handleBeforeUnload))
    }

    // Performance Monitoring
    if (devSettings.dev_enable_performance_monitoring) {
      const perfObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          devLogger('Performance entry', {
            name: entry.name,
            type: entry.entryType,
            duration: entry.duration,
          })
        })
      })
      perfObserver.observe({ entryTypes: ['measure', 'navigation', 'resource'] })
      listeners.push(() => perfObserver.disconnect())
    }

    // Custom CSS Inject
    if (devSettings.dev_custom_css_inject) {
      const style = document.createElement('style')
      style.textContent = `
        .dev-highlight { border: 2px solid red !important; }
        .dev-debug { background: rgba(255,0,0,0.1) !important; }
      `
      document.head.appendChild(style)
      listeners.push(() => document.head.removeChild(style))
    }

    // Error Overlay
    if (devSettings.dev_enable_error_overlay) {
      const errorOverlay = document.createElement('div')
      errorOverlay.id = 'dev-error-overlay'
      errorOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255,0,0,0.5);
        color: white;
        display: none;
        z-index: 10000;
        padding: 20px;
        font-family: monospace;
      `
      document.body.appendChild(errorOverlay)

      const originalError = console.error
      console.error = (...args) => {
        errorOverlay.style.display = 'block'
        errorOverlay.textContent = `Error: ${args.join(' ')}`
        setTimeout(() => errorOverlay.style.display = 'none', 5000)
        originalError.apply(console, args)
      }
      listeners.push(() => {
        console.error = originalError
        document.body.removeChild(errorOverlay)
      })
    }

    // Existing event listeners
    if (devSettings.dev_enable_click_logging) {
      const handleClick = (event) => {
        devLogger('Click event', {
          target: event.target.tagName,
          className: event.target.className,
          id: event.target.id,
          textContent: event.target.textContent?.slice(0, 50),
        })
      }
      document.addEventListener('click', handleClick, true)
      listeners.push(() => document.removeEventListener('click', handleClick, true))
    }

    if (devSettings.dev_enable_key_logging) {
      const handleKeyDown = (event) => {
        devLogger('Key down event', {
          key: event.key,
          code: event.code,
          target: event.target.tagName,
        })
      }
      document.addEventListener('keydown', handleKeyDown, true)
      listeners.push(() => document.removeEventListener('keydown', handleKeyDown, true))
    }

    if (devSettings.dev_enable_scroll_logging) {
      const handleScroll = (event) => {
        devLogger('Scroll event', {
          scrollY: window.scrollY,
          scrollX: window.scrollX,
        })
      }
      window.addEventListener('scroll', handleScroll)
      listeners.push(() => window.removeEventListener('scroll', handleScroll))
    }

    if (devSettings.dev_enable_mouse_logging) {
      const handleMouseMove = (event) => {
        devLogger('Mouse move', {
          x: event.clientX,
          y: event.clientY,
        })
      }
      document.addEventListener('mousemove', handleMouseMove)
      listeners.push(() => document.removeEventListener('mousemove', handleMouseMove))
    }

    if (devSettings.dev_enable_focus_logging) {
      const handleFocus = (event) => {
        devLogger('Focus event', {
          target: event.target.tagName,
          id: event.target.id,
        })
      }
      document.addEventListener('focus', handleFocus, true)
      listeners.push(() => document.removeEventListener('focus', handleFocus, true))
    }

    if (devSettings.dev_enable_input_logging) {
      const handleInput = (event) => {
        devLogger('Input event', {
          target: event.target.tagName,
          type: event.target.type,
          value: event.target.value?.slice(0, 20),
        })
      }
      document.addEventListener('input', handleInput, true)
      listeners.push(() => document.removeEventListener('input', handleInput, true))
    }

    if (devSettings.dev_enable_form_logging) {
      const handleSubmit = (event) => {
        devLogger('Form submit', {
          target: event.target.tagName,
          action: event.target.action,
        })
      }
      document.addEventListener('submit', handleSubmit, true)
      listeners.push(() => document.removeEventListener('submit', handleSubmit, true))
    }

    if (devSettings.dev_enable_load_logging) {
      const handleLoad = () => {
        devLogger('Page loaded')
      }
      window.addEventListener('load', handleLoad)
      listeners.push(() => window.removeEventListener('load', handleLoad))
    }

    if (devSettings.dev_enable_unload_logging) {
      const handleUnload = () => {
        devLogger('Page unloading')
      }
      window.addEventListener('beforeunload', handleUnload)
      listeners.push(() => window.removeEventListener('beforeunload', handleUnload))
    }

    if (devSettings.dev_enable_resize_logging) {
      const handleResize = () => {
        devLogger('Window resize', {
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
      window.addEventListener('resize', handleResize)
      listeners.push(() => window.removeEventListener('resize', handleResize))
    }

    if (devSettings.dev_enable_visibility_logging) {
      const handleVisibilityChange = () => {
        devLogger('Visibility change', {
          hidden: document.hidden,
        })
      }
      document.addEventListener('visibilitychange', handleVisibilityChange)
      listeners.push(() => document.removeEventListener('visibilitychange', handleVisibilityChange))
    }

    return () => {
      listeners.forEach(cleanup => cleanup())
    }
  }, [devSettings])

  return null
}

export default function App({ Component, pageProps }) {
  return (
    <Provider apiKey="pt_7c8b6840f5ba39cd3b2b471cd8efc2" theme={defaultTheme}>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <ProgressBar bgcolor="#DE1D8D" />
        <ScrollTop />
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        {isDevelopment && isSocket && <ClientReload />}
        <DevLoggerComponent />
        <Analytics />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </Provider>
  )
}
