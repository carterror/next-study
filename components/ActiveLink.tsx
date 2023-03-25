import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"
import styles from './Navbar.module.css'


interface Props {
  text: string,
  href: string
}

export const ActiveLink: FC<Props> = ({text, href}) => {

    const {asPath} = useRouter();

  return (
    <Link className={asPath == href ?styles.active : ''} href={href}>{text}</Link>
  )
}
