import styles from './SearchVINResult.module.css'

export function SearchVINResult({ vinDetails }) {

    return (
        <div className={styles.searchResult}>
            <h3>VIN Details:</h3>
            <table className={styles.searchResultTable}>
                <tbody>
                    {vinDetails.Results.map(param => (
                        param.Value && <tr key={param.VariableId}>
                            <td>{param.Variable}</td>
                            <td>{param.Value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}