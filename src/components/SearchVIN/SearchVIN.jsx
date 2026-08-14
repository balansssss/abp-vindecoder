import styles from './SearchVIN.module.css'
import { useState, useContext } from 'react'
import { validateVin } from '../../scripts/common.js'
import { decodeVin } from '../../scripts/vpicApi.js'
import { LoadingContext } from '../../App.jsx'
import { SearchVINResult } from '../SearchVINResult/SearchVINResult.jsx'

export function SearchVIN() {
    const [vin, setVin] = useState('')
    const [errorValid, setErrorValid] = useState(null)
    const [vinDetails, setVinDetails] = useState(null)
    const { loading, setLoading } = useContext(LoadingContext)

    const searchVin = async(e) => {
        e.preventDefault()
        const checkedVin = validateVin(vin)
        if (!checkedVin.isValid) {
            setErrorValid(checkedVin.message)
            return
        }
        setErrorValid(null)
        setLoading(true)

        try {
            const decodedVin = await decodeVin(vin)
            setVinDetails(decodedVin)
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