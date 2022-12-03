import axios from 'axios'
import * as React from 'react'
import { useState, useEffect } from 'react'

export type PostType = {
    _id: string
    description: string
    location: string
    price: number
    title: string
    username: string
}

export const useFetchPosts = () => {
    const [data, setData] = useState<PostType[]>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<any>()

    useEffect(() => {
        setLoading(true)
        axios
            .get('/api/posts')
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return { data, loading, error }
}
