import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'

type Variant = 'button01' | 'button02'

const variantClasses: Record<Variant, string> = {
  button01: 'py-2 px-3',
  button02: 'lg:py-3 lg:px-4 py-2 px-3',
}

const CustomButton = ({
  text,
  url = "#",
  variant = 'button01',
  className
}: {
  text: string
  url?: string
  variant?: Variant
  className?: string
}) => {
 return (
  <Link
    href={url}
    className={clsx(
      'bg-gradient-to-b bg-[#FFECAC] hover:bg-[#FFECAC]/80 text-gray-700 hover:text-gray-600 block text-center w-full rounded-md cursor-pointer font-semibold transition-all hover:scale-102 duration-500 customShadow',
      variantClasses[variant],
      className
    )}
  >
    {text}
  </Link>
);

}

export default CustomButton
