import * as React from 'react'

import {
    Box,
    Stack,
    Typography,
    TextField,
    Button,
    useTheme,
} from '@mui/material'
import { useFormContext } from '../../providers/useFormProvider'
import { Navigate } from 'react-router-dom'
import LeftPanel from './AJsListPanel'

const CreatePostForm = () => {
    const theme = useTheme()
    const { formData, setFormData, onSubmit, submitted } = useFormContext()

    const handleFormFieldInput = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        event.preventDefault()
        setFormData({
            ...formData,
            [event.currentTarget.id]: event.currentTarget.value,
        })
    }

    const handleSubmitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onSubmit()
    }

    if (submitted) {
        setTimeout(() => {}, 1000) // Give time for database tables to update before navigating to the products page
        return <Navigate to="/" />
    } else {
        return (
            <Box
                display="flex"
                sx={{ pt: 10 }}
                height="80vh"
                justifyContent="center"
            >
                <LeftPanel />
                <Box
                    width="50%"
                    height="100%"
                    style={{
                        backgroundColor: theme.palette.background.paper,
                    }}
                    border={`2px solid ${theme.palette.background.paper}`}
                    borderRadius="0 3rem 6rem 0"
                >
                    <Stack sx={{ p: 4 }} spacing={4}>
                        <Box display="flex" width="100%" alignItems="center">
                            <Typography
                                variant="h6"
                                component="h1"
                                color={theme.palette.text.primary}
                                fontSize="2rem"
                            >
                                Create New Post
                            </Typography>
                        </Box>
                        <Box
                            display="flex"
                            width="100%"
                            justifyContent="space-between"
                        >
                            <TextField
                                variant="standard"
                                label="Title"
                                id="title"
                                fullWidth
                                value={formData.title}
                                onChange={handleFormFieldInput}
                            />
                        </Box>
                        <Box
                            display="flex"
                            width="100%"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Box width="45%" height="100%">
                                <TextField
                                    variant="standard"
                                    label="Price"
                                    id="price"
                                    fullWidth
                                    value={formData.price}
                                    onChange={handleFormFieldInput}
                                />
                            </Box>
                            <Box width="45%" height="100%">
                                <TextField
                                    variant="standard"
                                    label="Location"
                                    id="location"
                                    fullWidth
                                    value={formData.location}
                                    onChange={handleFormFieldInput}
                                />
                            </Box>
                        </Box>
                        <Box display="flex" width="100%">
                            <TextField
                                rows={4}
                                variant="standard"
                                multiline
                                fullWidth
                                label="Description"
                                id="description"
                                value={formData.description}
                                onChange={handleFormFieldInput}
                            ></TextField>
                        </Box>
                        <Box
                            display="flex"
                            width="100%"
                            justifyContent="center"
                        >
                            <Button variant="contained">
                                <input
                                    type="file"
                                    style={{ padding: '0 0 0 5rem' }}
                                    accept="image/png, image/jpeg"
                                    id="imgUrl"
                                    value={formData.imgUrl}
                                    onChange={handleFormFieldInput}
                                />
                            </Button>
                        </Box>
                        <Box
                            display="flex"
                            width="100%"
                            justifyContent="center"
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    background:
                                        'linear-gradient(248.86deg, #B6509E 10.51%, #2EBAC6 93.41%)',
                                }}
                                onClick={handleSubmitClick}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        )
    }
}

export default CreatePostForm
