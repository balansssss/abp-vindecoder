import styles from './Header.module.css'
import { Link } from 'react-router-dom'


export function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img className={styles.headerLogo} src="/logo.png" alt="Logo" />
            </Link>
            <nav className={styles.headerNav}>
                <Link className={styles.headerLink} to="/">Main</Link>
                <Link className={styles.headerLink} to="/variables">Variables</Link>
            </nav>
        </header>
    )
}