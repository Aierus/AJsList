import axios from 'axios'
import * as React from 'react'
import { useEffect, useState, useContext, createContext } from 'react'

type FormInputs = {
    title: string
    location: string
    price: string
    description: string
    username: string
    imgUrl: string
}

interface FormContext {
    formData: FormInputs
    setFormData: React.Dispatch<React.SetStateAction<FormInputs>>
    onSubmit: () => void
    submitted: boolean
}

const defaultFormContext: FormContext = {
    formData: {
        title: '',
        location: '',
        price: '',
        description: '',
        username: '',
        imgUrl: '',
    },
    setFormData: () => {},
    onSubmit: () => {},
    submitted: false,
}

const formContext = createContext<FormContext>(defaultFormContext)

export const FormProvider = ({
    children,
    account,
}: {
    children: React.ReactNode
    account: string
}) => {
    const [formData, setFormData] = useState<FormInputs>({
        ...defaultFormContext.formData,
        username: account,
    })
    const [submitted, setSubmitted] = useState<boolean>(false)

    const onSubmit = () => {
        let price = parseFloat(formData.price)
        let data = { ...formData, price }
        console.log(data)
        axios
            .post(`/api/post/create`, data)
            .then((res) => setSubmitted(true))
            .catch((err) => alert('Problem Creating Post'))
        setSubmitted(true)
    }

    return (
        <formContext.Provider
            value={{
                formData,
                setFormData,
                onSubmit,
                submitted,
            }}
        >
            {children}
        </formContext.Provider>
    )
}

export const useFormContext = () => useContext(formContext)
