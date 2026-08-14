import styles from './Main.module.css'
import { SearchVIN } from "../../components/SearchVIN/SearchVIN"
import { useState } from 'react'

export function Main() {

    return (
        <main className={styles.main}>
            <h2 className={styles.mainTitle}>Type your VIN-number and search for vehicle information</h2>
            <img className={styles.mainImage} src="/help.png" alt="Where to find your VIN" />
            <SearchVIN  />
        </main>
    )
}