import axios from 'axios'
import * as React from 'react'
import { useEffect, useState, useContext, createContext } from 'react'

type FormInputs = {
    title: string
    location: string
    price: string | number
    description: string
    username: string
    imgUrl: string
}

interface FormContext {
    formData: FormInputs
    setFormData: React.Dispatch<React.SetStateAction<FormInputs>>
    onSubmit: (id?: string) => void
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
    onSubmit: (id?: string) => {},
    submitted: false,
}

const formContext = createContext<FormContext>(defaultFormContext)

export const FormProvider = ({
    children,
    account,
    context,
}: {
    children: React.ReactNode
    account: string
    context: 'Create' | 'Edit'
}) => {
    const [formData, setFormData] = useState<FormInputs>({
        ...defaultFormContext.formData,
        username: account,
    })
    const [submitted, setSubmitted] = useState<boolean>(false)

    const onSubmit = (id?: string) => {
        let price = parseFloat(String(formData.price))
        let data = { ...formData, price }

        if (context === 'Create') {
            axios
                .post(`/api/post/create`, data)
                .then((res) => setSubmitted(true))
                .catch((err) => alert('Problem Creating Post'))
        } else if (context === 'Edit') {
            axios.put(`/api/post/update/${id}`, data)
        }
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
