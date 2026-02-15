import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import siteMetadata from '@/data/siteMetadata'
import { POSTS_PER_PAGE } from 'app/constants'
import { getThemeColor } from '../themeColor'

export const metadata = genPageMetadata({
  title: `Blog - Talha Tahir | ${siteMetadata.authorLong}`,
  description: `${siteMetadata.title} - ${siteMetadata.authorLong} | ${siteMetadata.skills}`,
})

export default async function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs))
  const pageNumber = 1
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }
  const themeColor = await getThemeColor()

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
      themeColor={themeColor}
    />
  )
}
