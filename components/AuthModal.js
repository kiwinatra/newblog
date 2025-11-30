import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import devLogger from '@/lib/devLogger'

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isGoClicked, setIsGoClicked] = useState(false)

  const handleSwitch = () => {
    devLogger('Switching auth mode', { from: isLogin ? 'login' : 'signup', to: !isLogin ? 'login' : 'signup' })
    setIsLogin(!isLogin)
    setError('Oops! Something went wrong: some error in code.')
  }

  const handleGo = () => {
    devLogger('GO button clicked', { isLogin })
    setIsGoClicked(true)
    setTimeout(() => setIsGoClicked(false), 1000)
    // Fake signup: set localStorage
    localStorage.setItem('isLoggedIn', 'true')
    onClose()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    devLogger('Form submitted', { email, isLogin })
    // Fake auth: just set logged in
    localStorage.setItem('isLoggedIn', 'true')
    onClose()
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black bg-opacity-25" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded bg-white p-6 dark:bg-zinc-900">
          <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            {isLogin ? 'Login' : 'Sign Up'}
          </Dialog.Title>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleSwitch}
                className="text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
              >
                {isLogin ? 'Need to sign up?' : 'Already have an account?'}
              </button>
              <button
                type="button"
                onClick={handleGo}
                className={`px-4 py-2 rounded-md text-white ${isGoClicked ? 'animate-pulse bg-green-600' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                GO!
              </button>
            </div>
            <button
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
