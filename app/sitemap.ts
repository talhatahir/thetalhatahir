import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import { POSTS_PER_PAGE } from './constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  // Individual blog post routes
  const blogRoutes = allBlogs.map((post) => ({
    url: `${siteUrl}/${post.path}`,
    lastModified: new Date().toISOString(),
  }))

  // Blog pagination routes (/blog/page/2, /blog/page/3, etc.)
  const totalPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE)
  const paginationRoutes = Array.from({ length: totalPages - 1 }, (_, i) => ({
    url: `${siteUrl}/blog/page/${i + 2}`,
    lastModified: new Date().toISOString(),
  }))

  // Static routes including /tags
  const routes = ['', 'blog', 'about', 'projects', 'tags'].map((route) => {
    const url = route === '' ? siteUrl : `${siteUrl}/${route}`

    return {
      url,
      lastModified: new Date().toISOString(),
    }
  })

  return [...routes, ...blogRoutes, ...paginationRoutes]
}
