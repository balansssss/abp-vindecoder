import styles from './Main.module.css'
import { SearchVIN } from "../../components/SearchVIN/SearchVIN"
import { SearchVINHistory } from "../../components/SearchVINHistory/SearchVINHistory"
import { useState } from 'react'
import { getSearchVinHistory } from '../../scripts/common'


export function Main() {
    const [searchHistory, setSearchHistory] = useState(getSearchVinHistory)
    const [selectedVin, setSelectedVin] = useState(null)

    return (
        <main className={styles.main}>
            <h2 className={styles.mainTitle}>Type your VIN-number and search for vehicle information</h2>
            <img className={styles.mainImage} src="/help.png" alt="Where to find your VIN" />
            <SearchVINHistory searchHistory={searchHistory} setSelectedVin={setSelectedVin}/>
            <SearchVIN  setSearchHistory={setSearchHistory} selectedVin={selectedVin}/>
        </main>
    )
}