import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Image from '@/components/Image'
import Github from '@/components/Github'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import { themes, MAX_DISPLAY } from './constants'

export default function Home({ posts }) {
  const randomTheme = themes[Math.floor(Math.random() * themes.length)]

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            I'm{' '}
            <span
              style={{
                backgroundImage: `linear-gradient(to right, #${randomTheme.color}, #${randomTheme.color}cc)`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
              className="mt-10 text-center text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl"
            >
              talha tahir
            </span>{' '}
            👋
          </h1>
          <div className="dark:text-grey text-gray mb-8  mt-4 text-base">
            <h2 className="text-xl leading-8 tracking-tight">
              An experienced Full Stack Engineer Engineer who likes to build products and solve
              problems.
            </h2>
            <p className="dark:text-grey text-gray mb-8   mt-4 text-sm">
              <span className="mr-3 inline-block whitespace-nowrap pt-3">❤️ React.js</span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">🛠️ Javascript</span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">🥇 Next.js</span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">🤖 OpenAI API</span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">📦 NodeJS</span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">🧱 Material UI</span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">🐜 Ant Design</span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">⏳ Esbuild</span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">🧊 HTML</span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">🍡 CSS</span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">🕰️ Git</span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">🚃 Npm</span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">🧶 Yarn</span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">📜 MongoDB</span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">📃 MySQL</span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">🎢 Redux</span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">🍤 Zustand</span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">🍽️ APIs</span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">❤️‍🩹 AngularJS</span>
            </p>
          </div>

          <h3 className="text-md leading-7 text-gray dark:text-gray">
            I write about my experiences as a Remote Engineer, Lifehacks to increase your
            producitivity, Jobhacks to get your next gig, and selfishly post about my own microSaaS.
            Sometimes a book inspires me enough to write about it.
          </h3>
          <Github color={randomTheme.color} />
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, images, tags } = post
            return (
              <li key={slug} className="py-6">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        <div className="py-2 pr-3">
                          <Image
                            alt={title}
                            src={images[0]}
                            className="object-cover object-center"
                            width={215}
                            height={150}
                          />
                        </div>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
