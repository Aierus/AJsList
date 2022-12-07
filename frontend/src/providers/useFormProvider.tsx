import * as React from 'react'
import { useEffect, useState, useContext, createContext } from 'react'

type FormInputs = {
    title: string
    location: string
    price: number
    description: string
    username: string
    imgUrl: string
}

interface FormContext {
    formData: FormInputs
    setInputs: React.Dispatch<React.SetStateAction<any>>
    onSubmit: () => void
}

const defaultFormContext: FormContext = {
    formData: {
        title: '',
        location: '',
        price: 0,
        description: '',
        username: '',
        imgUrl: '',
    },
    setInputs: () => {},
    onSubmit: () => {},
}

const formContext = createContext<FormContext>(defaultFormContext)

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
    const [inputs, setInputs] = useState<FormInputs>(
        defaultFormContext.formData,
    )
    const onSubmit = () => {}

    return (
        <formContext.Provider
            value={{
                formData: inputs,
                setInputs,
                onSubmit,
            }}
        >
            {children}
        </formContext.Provider>
    )
}

export const useFormContext = () => useContext(formContext)
