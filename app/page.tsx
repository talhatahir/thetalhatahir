import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Home from './Home'
import { genPageMetadata } from './seo'
import siteMetadata from '@/data/siteMetadata'

export const metadata = genPageMetadata({
  title: `Talha Tahir - ${siteMetadata.authorLong}`,
  description: `${siteMetadata.title} - ${siteMetadata.authorLong} | ${siteMetadata.skills}`,
})

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return <Home posts={posts} />
}
