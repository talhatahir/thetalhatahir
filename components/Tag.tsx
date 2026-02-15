import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
  color?: string
}

const Tag = ({ text, color }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      style={color ? { color: `#${color}` } : undefined}
      className={`mr-3 text-sm font-medium uppercase hover:opacity-80 ${
        !color ? 'text-primary-500 hover:text-primary-600 dark:hover:text-primary-400' : ''
      }`}
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
