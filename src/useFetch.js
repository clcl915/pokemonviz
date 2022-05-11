import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(true)
  
    useEffect(()=>{
        fetch(url).then(res =>{
            if (!res.ok){
                throw Error("could not fetch data")
              }
              return res.json()
        })
        .then(data => {
            setLoading(false)
            setError(null)
            setData(data)
        })
        .catch(err => {
            setLoading(false)
            setError(err.message)
        })
    },[url]);

    return {data, isLoading, error}
}

export default useFetch