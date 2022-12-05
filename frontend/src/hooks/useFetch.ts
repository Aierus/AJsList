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

const makeUrl = (filter: string | null) => {
    if (!filter) {
        return '/api/posts'
    } else {
        return `/api/user/${filter}`
    }
}

export const useFetchPosts = (filter: string | null) => {
    const [data, setData] = useState<PostType[]>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<any>()

    useEffect(() => {
        setLoading(true)
        axios
            .get(makeUrl(filter))
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, [filter])

    return { data, loading, error }
}
