import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
        <h1>Página de About</h1>
        <p>
            fhebrhvbrhfbhrebchbvjkvebjkjrebvjk
        </p>
        <Image src='/image/charizard.png' width='300' height='300' alt='charizard'/>
        <Link href='/'>Voltar</Link>
        </div>
    )
}