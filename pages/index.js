import Link from '@/components/Link';
import { PageSEO } from '@/components/SEO';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import formatDate from '@/lib/utils/formatDate';
import Image from '@/components/Image';

import NewsletterForm from '@/components/NewsletterForm';

const MAX_DISPLAY = 5;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={`${siteMetadata.title} - ${siteMetadata.skills}`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            I'm{' '}
            <span className="dark:from-secondary-700 dark:to-secondary-400 mt-10 bg-gradient-to-r from-primary-700 to-primary-400 bg-clip-text text-center text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
              Talha Tahir
            </span>{' '}
            👋
          </h1>
          <div className="dark:text-grey text-gray mb-8  mt-4 text-base">
            <p>A passionate Engineer who likes to build products.</p>
            <p className="dark:text-grey text-gray mb-8   mt-4 text-sm">
              <span className="mr-3 inline-block whitespace-nowrap pt-3">
                ❤️ React.js
              </span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">
                🛠️ Javascript
              </span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">
                🥇 Next.js
              </span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">
                📦 NodeJS
              </span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">
                🧱 Material UI
              </span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">
                ⏳ Esbuild
              </span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">
                🧊 HTML
              </span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">
                🍡 CSS
              </span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">
                🕰️ Git
              </span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">
                🚃 Npm
              </span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">
                🧶 Yarn
              </span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">
                📜 MongoDB
              </span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">
                📃 MySQL
              </span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">
                🎢 Redux
              </span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">
                🍤 Zustand
              </span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">
                🍽️ APIs
              </span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3">
                ❤️‍🩹 AngularJS
              </span>
            </p>
          </div>
          <p className="text-lg leading-7 text-gray-500 dark:text-white">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, images, summary, tags } = frontMatter;
            return (
              <li key={slug} className="py-4">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                        <div className="py-3 pr-3">
                          <Image
                            alt={title}
                            src={images[0]}
                            className="mt-10 object-cover object-center p-5"
                            width={215}
                            height={150}
                            layout="responsive"
                          />
                        </div>
                      </dd>
                    </dl>
                    <div className="space-y-4 xl:col-span-3">
                      <div className="space-y-4">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex  flex-wrap pt-2">
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
            );
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  );
}
