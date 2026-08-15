import styles from './SearchVINHistory.module.css'

export function SearchVINHistory({searchHistory, setSelectedVin}) {

    const handleClickVin = (event, vin) => {
        event.preventDefault()
        setSelectedVin(vin)
    }

    return (
        <div className={styles.history}>
            <h3>Your search history:</h3>
            <table className={styles.searchHistoryTable}>
                <tbody>
                    {searchHistory.map((vin, index) => {
                        return <tr key={index}>
                            <td className={styles.searchHistoryTableNumber}>{index+1}</td>
                            <td><a href="#" className={styles.searchHistoryTableLink} onClick={(e) => handleClickVin(e, vin)}>{vin}</a></td>
                        </tr>
                    })}
                </tbody>    
            </table>
        </div>
    )
}