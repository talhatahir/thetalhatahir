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
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(svgText, 'image/svg+xml')

        const rectElements = xmlDoc.querySelectorAll('rect[style*="fill:#EEEEEE;"]')

        rectElements.forEach((rectElement) => {
          rectElement.setAttribute('style', 'fill:#161b22;shape-rendering:crispedges;')
        })

        const modifiedSvgText = new XMLSerializer().serializeToString(xmlDoc)

        setSvgContent(`data:image/svg+xml;base64,${btoa(modifiedSvgText)}`)
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
    <div className="flex flex-col justify-center items-center dark:text-grey text-gray pb-12">
      <p className="text-xs leading-7  text-gray dark:text-gray md:mt-5">
        <Link
          href="/about"
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        >
          My Github Contributions
        </Link>
      </p>
      <Image width={900} height={504} src={svgContent} alt="My Github Contributions" />
    </div>
  )
}

export default Github
