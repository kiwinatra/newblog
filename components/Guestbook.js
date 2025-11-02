import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function Guestbook() {
  const [nickname, setNickname] = useState('')
  const [message, setMessage] = useState('')
  const [description, setDescription] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [consoleLogs, setConsoleLogs] = useState([])
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
    setConsoleLogs([])
    setIsSent(false)

    // Fake API simulation
    const logs = [
      'Connecting to API...',
      'Authenticating...',
      'Sending data...',
      'Processing...',
      'Message sent successfully!'
    ]

    logs.forEach((log, index) => {
      setTimeout(() => {
        setConsoleLogs(prev => [...prev, log])
        if (index === logs.length - 1) {
          setIsSent(true)
        }
      }, (index + 1) * 1000)
    })
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setConsoleLogs([])
    setIsSent(false)
  }

  return (
    <>
      <div className="my-2 w-full rounded-md border border-gray-200 bg-white px-6 py-8 shadow-xl shadow-gray-400 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nickname" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Nickname
            </label>
            <input
              type="text"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Short Description
            </label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>

      <Dialog open={isModalOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded bg-white p-6 dark:bg-zinc-900">
            <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-white">
              Sending Message
            </Dialog.Title>
            <div className="mt-4">
              <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                {consoleLogs.map((log, index) => (
                  <div key={index}>{log}</div>
                ))}
                {isSent && <div className="text-yellow-400 mt-2">✓ Sent!</div>}
              </div>
            </div>
            {isSent && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={closeModal}
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Close
                </button>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
