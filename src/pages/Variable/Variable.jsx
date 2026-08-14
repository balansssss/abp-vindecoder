import { useParams } from 'react-router-dom'

export function Variable() {

    const { variableId } = useParams();
    return (
        <div>
            Variable: {variableId}
        </div>
    )
}