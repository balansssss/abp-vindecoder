import { Link, useParams } from 'react-router-dom'
import styles from './Variable.module.css'
import { useVariables } from '../../contexts/VariablesProvider'

export function Variable() {
    const { variableId } = useParams()
    const {variables} = useVariables()
    
    const variable = variables.find(item => item.ID == variableId)

    return (
        <div className={styles.wrapper + ' container'}>  
            <Link className={styles.goback} to='/variables'>Back to all variables</Link>
            { 
                !variable ? <span>Variable not found</span> :
                <dl className={styles.variable}>
                    <div className={styles.variableWrapper}>
                        <dt className={styles.variableKey}>Name:</dt>
                        <h1 className={styles.variableValue}>{variable.Name}</h1>
                    </div>
                    <div className={styles.variableWrapper}>
                        <dt className={styles.variableKey}>Group Name:</dt>
                        <dd className={styles.variableValue}>{variable.GroupName}</dd>
                    </div>
                    <div className={styles.variableWrapper}>
                        <dt className={styles.variableKey}>Description:</dt>
                        <dd className={styles.variableDescription + ' ' + styles.variableValue} dangerouslySetInnerHTML={{ __html: variable.Description }}></dd>
                    </div>
                </dl>
            }
        </div>
    )
}