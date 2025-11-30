const devLogger = (message, ...args) => {
  if (typeof window !== 'undefined' && window.devMode) {
    const settings = window.devSettings || {}
    const prefix = settings.dev_log_prefix || '[DEV LOG]'
    const level = settings.dev_log_level || 'info'
    const verbose = settings.dev_verbose === true
    const showTimestamps = settings.dev_show_timestamps === true
    const maxLength = parseInt(settings.dev_max_log_length) || 50

    let logMessage = `${prefix} ${message}`

    if (showTimestamps) {
      logMessage = `${new Date().toISOString()} ${logMessage}`
    }

    if (!verbose && args.length > 0) {
      args = args.map(arg => {
        if (typeof arg === 'string' && arg.length > maxLength) {
          return arg.slice(0, maxLength) + '...'
        }
        return arg
      })
    }

    if (level === 'debug') {
      console.debug(logMessage, ...args)
    } else if (level === 'info') {
      console.info(logMessage, ...args)
    } else {
      console.log(logMessage, ...args)
    }
  }
}

export default devLogger
