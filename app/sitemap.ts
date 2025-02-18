import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl
  const blogRoutes = allBlogs.map((post) => ({
    url: `${siteUrl}/${post.path}`,
    lastModified: new Date().toISOString(),
  }))

  const routes = ['', 'blog', 'about', 'projects'].map((route) => {
    const url = route === '' ? siteUrl : `${siteUrl}/${route}`

    return {
      url,
      lastModified: new Date().toISOString(),
    }
  })

  return [...routes, ...blogRoutes]
}
