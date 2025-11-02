import Guestbook from '@/components/Guestbook'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function GuestbookPage() {
  return (
    <>
      <PageSEO
        title={`Guestbook - ${siteMetadata.author}`}
        description="Guestbook for my future visitors"
      />
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
        <div className="space-y-2 pt-6 pb-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Guestbook
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            Leave a message in the guestbook.
          </p>
        </div>
        <Guestbook />
      </div>
    </>
  )
}
