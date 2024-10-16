import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href={'/'}>
      <p className=" text-3xl font-bold">
        A<span className="text-target">S</span>
      </p>
    </Link>
  )
}
