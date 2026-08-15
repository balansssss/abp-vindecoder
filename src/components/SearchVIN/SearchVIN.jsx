import styles from './SearchVIN.module.css'
import { useState, useContext, useEffect } from 'react'
import { getSearchVinHistory, setSearchVinHistory, validateVin } from '../../scripts/common.js'
import { decodeVin } from '../../scripts/vpicApi.js'
import { LoadingContext } from '../../App.jsx'
import { SearchVINResult } from '../SearchVINResult/SearchVINResult.jsx'

export function SearchVIN({setSearchHistory, selectedVin}) {
    const [vin, setVin] = useState('')
    const [errorValid, setErrorValid] = useState(null)
    const [vinDetails, setVinDetails] = useState(null)
    const { loading, setLoading } = useContext(LoadingContext)

    const searchVin = e => {
        e.preventDefault()
        handleSearch(vin)
    }

    const handleSearch = async(vinToSearch) => {
        const checkedVin = validateVin(vinToSearch)
        if (!checkedVin.isValid) {
            setErrorValid(checkedVin.message)
            return
        }
        setErrorValid(null)
        setLoading(true)

        try {
            const decodedVin = await decodeVin(vinToSearch)
            setVinDetails(decodedVin)
            setSearchVinHistory(vinToSearch)
            setSearchHistory(getSearchVinHistory)
        } catch (error) {
            setErrorValid('Failed to fetch VIN details. Please try again later.')
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const handleInputChange = (e) => {
        setVin(e.target.value.toUpperCase())
    }

    useEffect(() => {
        if (selectedVin) {
            setVin(selectedVin)
            handleSearch(selectedVin)
        }
    }, [selectedVin])

    return (
        <>
            <form className={styles.search} onSubmit={searchVin}>
                <input className={styles.searchInput} type="text" placeholder="VIN" value={vin} onChange={handleInputChange} />
                {errorValid && <div className={styles.searchError}>{errorValid}</div>}
                <button className={styles.searchButton} type="submit" disabled={loading}>Search</button>
            </form>
            {vinDetails && <SearchVINResult vinDetails={vinDetails} />}
        </>
    )
}