import styles from './SearchVINResult.module.css'

export function SearchVINResult({ vinDetails }) {

    const hiddenVariables = [
        'Error Code',
        'Error Text',
        'Additional Error Text'
    ]

    const errorCode = vinDetails.Results.find(
        param => param.Variable === 'Error Code'
    )

    const errorText = vinDetails.Results.find(
        param => param.Variable === 'Error Text'
    )

    const additionalErrorText = vinDetails.Results.find(
        param => param.Variable === 'Additional Error Text'
    )

    const hasApiError = errorCode?.Value && errorCode.Value !== '0'

    return (
        <div className={styles.searchResult}>
            {vinDetails.Message && (
                <p className={styles.searchResultMessage}>
                    {vinDetails.Message}
                </p>
            )}

            {hasApiError && (
                <div className={styles.searchResultError}>
                    {errorText?.Value}
                </div>
            )}

            {additionalErrorText?.Value && (
                <div className={styles.searchResultWarning}>
                    {additionalErrorText.Value}
                </div>
            )}

            <h3>VIN Details:</h3>
            <table className={styles.searchResultTable}>
                <tbody>
                    {vinDetails.Results.map(param => (
                        (param.Value && !hiddenVariables.includes(param.Variable)) && <tr key={param.VariableId}>
                            <td>{param.Variable}</td>
                            <td>{param.Value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}