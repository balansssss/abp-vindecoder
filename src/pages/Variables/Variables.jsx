import styles from './Variables.module.css'
import { Link } from 'react-router-dom'
import { useVariables } from '../../contexts/VariablesProvider'

export function Variables() {
    const {variables} = useVariables()

    return (
        <div className={styles.variables + ' container'}>
            <h1>Variables</h1>
            <ul className={styles.variablesList}>
                {variables.map(item => {
                    return <li key={item.ID}>
                        <Link to={`/variables/${item.ID}`} className={styles.variablesListItemLink}><b>[{item.Name}]</b></Link>
                        <div className={styles.variablesListItemDescription} dangerouslySetInnerHTML={{ __html: item.Description }}></div>
                    </li>
                })}
            </ul>
        </div>
    )
}