import { useState, useEffect } from "react";

function usePersistedDate(key: string, initialState: any){
    const [data, setData] = useState(() => {
        const storageValue = localStorage.getItem(key)
        if (storageValue){
            return JSON.parse(storageValue)
        } else {
            return initialState
        }
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data))
    }, [key, data])

    return [data, setData]
}

export default usePersistedDate;