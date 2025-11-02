/* eslint-disable @next/next/no-html-link-for-pages */
import { useState, useRef, Suspense } from 'react'
import { format } from 'date-fns'
import { signIn, useSession } from 'next-auth/react'
import useSWR, { useSWRConfig } from 'swr'

import fetcher from '@/lib/fetcher'
import SuccessMessage from '@/components/SuccessMessage'
import ErrorMessage from '@/components/ErrorMessage'
import LoadingSpinner from '@/components/LoadingSpinner'
import { FaGoogle, FaGithub } from 'react-icons/fa'

function GuestbookEntry({ entry, user }) {
  const { mutate } = useSWRConfig()
  const deleteEntry = async (e) => {
    e.preventDefault()

    await fetch(`/api/guestbook/${entry.id}`, {
      method: 'DELETE',
    })

    mutate('/api/guestbook')
  }

  return (
    <div className="">
      <div className="my-4 w-full rounded-md border border-gray-100 bg-gray-100 px-4 py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
        <div className="mb-2 text-neutral-900 dark:text-neutral-300">{entry.body}</div>
        <div className="line-clamp-1 text-gray-600 text-opacity-80 dark:text-white">
          <div className="mb-2 flex ">
            <p className="text-sm text-gray-500">
              {entry.created_by} • {format(new Date(entry.updated_at), "d MMM yyyy 'at' h:mm bb")}
            </p>
          </div>
          <div className="flex items-center">
            {user && entry.created_by === user.name && (
              <>
                <button
                  aria-label="delete comment"
                  className="text-sm text-red-600 dark:text-red-400"
                  onClick={deleteEntry}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Guestbook({ fallbackData }) {
  return (
    <>
      <div className="my-2 w-full rounded-md border border-gray-200 bg-white px-6 py-8 shadow-xl shadow-gray-400 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
        <div className="text-center">
          <h5 className="text-lg font-normal text-gray-900 dark:text-gray-100 md:text-lg">
            Guestbook is currently unavailable (in development).
          </h5>
        </div>
      </div>
    </>
  )
}
