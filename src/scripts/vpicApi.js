const API_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles'

export async function decodeVin(vin) {
    const response = await fetch(
        `${API_URL}/decodevin/${vin}?format=json`
    )

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
    }

    return response.json()
}

export async function getAllVariables() {
    const response = await fetch(
        `${API_URL}/getvehiclevariablelist?format=json`
    )

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
    }

    return response.json()
}