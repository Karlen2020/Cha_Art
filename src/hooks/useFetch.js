import { useCallback, useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = useCallback(async () => {
        try {
            setLoading(true)
            setError(null)

            const res = await fetch(url)

            if (!res.ok) {
                throw new Error(`Error ${res.status}: ${res.statusText}`)
            }
            const result = await res.json()
            setData(result)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }, [url])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return { data, loading, error }
}
export default useFetch