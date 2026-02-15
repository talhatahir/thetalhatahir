import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import NewsletterForm from 'pliny/ui/NewsletterForm'

interface FooterProps {
  themeColor?: string
}

export default function Footer({ themeColor }: FooterProps) {
  return (
    <footer>
      <style>
        {themeColor
          ? `
          footer button[type="submit"] {
            background-color: #${themeColor} !important;
          }
          footer button[type="submit"]:hover {
            opacity: 0.8;
          }
        `
          : ''}
      </style>
      <div className="mt-16 flex flex-col items-center">
        {siteMetadata.newsletter?.provider && (
          <div className="flex items-center justify-center pt-6 pb-6">
            <NewsletterForm />
          </div>
        )}
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  )
}
