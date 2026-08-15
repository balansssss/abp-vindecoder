export function validateVin(vin) {
    if (!vin.length) {
        return {
            isValid: false,
            message: 'VIN is required'
        }
    }

    if (vin.length > 17) {
        return {
            isValid: false,
            message: 'VIN must contain no more than 17 characters'
        }
    }

    if (!/^[A-HJ-NPR-Z0-9]+$/.test(vin)) {
        return {
            isValid: false,
            message: 'VIN contains invalid characters'
        }
    }

    return {
        isValid: true,
        message: null
    }
}

export function getSearchVinHistory() {
    return JSON.parse(window.localStorage.getItem('searchHistory') || '[]');
}

export function setSearchVinHistory(vin) {
    const searchHistory = getSearchVinHistory()
    const updatedHistory = [vin, ...searchHistory].slice(0, 3)
    window.localStorage.setItem('searchHistory', JSON.stringify(updatedHistory))
}