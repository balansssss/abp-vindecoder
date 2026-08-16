import { createContext, useContext, useEffect, useState } from 'react'
import { useLoading } from './LoadingProvider'
import { getAllVariables } from '../scripts/vpicApi'
import { Outlet } from 'react-router-dom'

const VariablesContext = createContext()

export function VariablesProvider() {
    const [variables, setVariables] = useState([])
    const {setLoading} = useLoading()

    useEffect(() => {
        setLoading(true)

        const loadVariables = async () => {
            try {
                const allVariables = await getAllVariables()
                setVariables(allVariables.Results)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        
        loadVariables()
    }, [])

    return <VariablesContext.Provider value={{variables, setVariables}}>
        <Outlet />
    </VariablesContext.Provider>
}


export function useVariables() {
    return useContext(VariablesContext)
}