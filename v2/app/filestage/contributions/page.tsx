import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Image from '@/components/Image'

export const metadata = genPageMetadata({ title: 'Github Contributions to Filestage repo' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-col md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 py-6 md:space-y-5">
        <h1 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:px-6 md:text-2xl md:leading-14">
          Github contributions to Filestage repo
        </h1>
      </div>
      <div className="w-auto">
        <Image
          src={'/static/images/graph.png'}
          alt="Github contributions"
          width={1500}
          height={600}
          quality={100}
        />
      </div>
      <div className="w-auto py-9">
        <Image
          src={'/static/images/cont.png'}
          alt="Github contributions"
          width={600}
          height={300}
          quality={100}
        />
      </div>
    </div>
  )
}
