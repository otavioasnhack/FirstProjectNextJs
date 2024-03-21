import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src='/image/pokeball.png' width='30' height='30' alt="PokeNext"/>
                <h1>PokeNext</h1>
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href='/'><span>Home</span></Link>
                </li>
                <li>
                    <Link href='/about'><span>Sobre</span></Link>
                </li>
            </ul>
        </nav>
    )
}