'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from '@/components/Link'

const Github = () => {
  const [svgContent, setSvgContent] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchSVGContent = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/contributions`)
        const svgText = await response.text()

        setSvgContent(`data:image/svg+xml;base64,${btoa(svgText)}`)
      } catch (error) {
        console.error('Error fetching SVG:', error)
      }
      setLoading(false)
    }

    fetchSVGContent()
  }, [])

  if (loading || svgContent === '') {
    return null
  }

  return (
    <div className="flex flex-col justify-center items-center dark:text-grey text-gray pb-4">
      <p className="text-xs leading-7  text-gray dark:text-gray md:mt-5">
        <Link
          href="/about"
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        >
          My Github Contributions
        </Link>
      </p>
      <Image
        width={1000}
        height={604}
        src={svgContent}
        alt="My Github Contributions"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  )
}

export default Github
