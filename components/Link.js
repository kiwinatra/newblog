/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import React from 'react'

const CustomLink = React.forwardRef(({ href, children, ...rest }, ref) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href} passHref legacyBehavior>
        <a ref={ref} {...rest}>
          {children}
        </a>
      </Link>
    )
  }

  if (isAnchorLink) {
    return (
      <a ref={ref} href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <a
      ref={ref}
      className="special-underline-new no-underline hover:text-gray-100 dark:hover:text-gray-100"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    >
      {children}
    </a>
  )
})

CustomLink.displayName = 'CustomLink'

export default CustomLink