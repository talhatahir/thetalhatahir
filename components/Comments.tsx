'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)
  return (
    <>
      {console.log(siteMetadata.comments?.provider)}
      {siteMetadata.comments?.provider && !loadComments && (
        <button onClick={() => setLoadComments(true)}>Load Comments</button>
      )}
      {siteMetadata.comments?.provider && loadComments && (
        <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
      )}
    </>
  )
}
