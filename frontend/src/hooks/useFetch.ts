import axios from 'axios'
import * as React from 'react'
import { useState, useEffect } from 'react'

export type PostType = {
    _id: string
    description: string
    location: string
    price: number | string
    title: string
    username: string
    imgUrl?: string
}

const makePostsUrl = (filter: string | null) => {
    if (!filter) {
        return '/api/posts'
    } else {
        return `/api/user/${filter}`
    }
}

const makeIDUrl = (id: string | null) => {
    if (!id) {
        return null
    } else {
        return `/api/post/${id}/`
    }
}

export const useFetchPosts = (filter: string | null) => {
    const [data, setData] = useState<PostType[]>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<any>()

    useEffect(() => {
        setLoading(true)
        axios
            .get(makePostsUrl(filter))
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, [filter])

    return { data, loading, error }
}

export const useFetchPostByID = (id: string | undefined) => {
    const [data, setData] = useState<PostType>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<any>()

    useEffect(() => {
        setLoading(true)
        if (id) {
            console.log(id)
            axios
                .get(makeIDUrl(id))
                .then((res) => {
                    setData(res.data)
                    console.log(res.data)
                })
                .catch((err) => setError(err))
                .finally(() => setLoading(false))
        }
    }, [id])

    return { data, loading, error }
}
