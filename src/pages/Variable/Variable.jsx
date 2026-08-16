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
                <div className={styles.variable}>
                    <div><b>Name</b>: {variable.Name}</div>
                    <div><b>Group Name</b>: {variable.GroupName}</div>
                    <div><b>Description</b>: <div className={styles.variableDescription} dangerouslySetInnerHTML={{ __html: variable.Description }}></div></div>
                </div>
            }
        </div>
    )
}