import siteMetadata from '@/data/siteMetadata'
import movieData from '@/data/movieData'
import { currentlyReading, bookReviews } from '@/data/bookData'
import RecommendCard from '@/components/RecommendCard'
import BookRecommendCard from '@/components/BookRecommendCard'
import { PageSEO } from '@/components/SEO'
import NowReading from '@/components/NowReading'

export default function Recommends() {
  return (
    <>
      <PageSEO
        title={`Recommendations - ${siteMetadata.author}`}
        description="Recommended movies, books and more"
      />
      <div className="mx-auto max-w-3xl">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Recommends
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            A list of recommended movies, books and more
          </p>
        </div>

        {/* Books Section */}
        <div className="space-y-2 pt-3 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            <span role="img" className="mr-4" aria-label="wave">
              📚
            </span>
            Books
          </h2>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            Take a look at my reading list
          </p>
        </div>

        <div className="container py-6">
          {/* Currently Reading */}
          <div className="-m-2">
            {currentlyReading.map((book) => (
              <NowReading
                key={book.url}
                title={book.title}
                description={book.author}
                href={book.url}
                rating={book.rating}
              />
            ))}
          </div>

          {/* Book Reviews */}
          <div className="-m-4 flex flex-wrap">
            {bookReviews.map((book) => (
              <BookRecommendCard
                key={book.url}
                title={book.title}
                description={book.author}
                href={book.url}
                rating={book.rating}
              />
            ))}
          </div>
        </div>

        {/* Movies Section */}
        <div className="container py-7">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
              <span role="img" className="mr-4" aria-label="wave">
                🍿
              </span>
              Movies
            </h2>
            <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
              Life's a Movie.
            </p>
          </div>

          <div className="container py-4">
            <div className="-m-4 flex flex-wrap">
              {movieData.map((movie) => (
                <RecommendCard
                  key={movie.title}
                  title={movie.title}
                  description={movie.description}
                  tags={movie.tags}
                  href={movie.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}