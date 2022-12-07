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
    imgUrl?: string
}

export const useDelete = (id: string) => {
    const [error, setError] = useState<boolean>(false)
    axios.delete(`api/post/delete/${id}`).catch((err) => {
        setError(true)
    })
    return error
}
