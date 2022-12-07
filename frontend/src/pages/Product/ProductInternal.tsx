import * as React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

import {
    Box,
    Container,
    Stack,
    useTheme,
    Button,
    Typography,
} from '@mui/material'

import { PostType } from '../../hooks/useFetch'
import { useEthereum } from '../../providers/useEthereuem'

import { usePageContext } from './pageContext'
import PostForm from '../../components/CreatePostForm'

import PurchaseButton from './PurchaseButton'

declare var require: any
const img = require('../../assets/sample-img.jpg')

const deletePost = (id: string) => {
    let error: boolean = false
    axios.delete(`api/post/delete/${id}`).catch((err) => {
        error = true
    })
    return error
}

function ProductInternal(product: PostType) {
    const theme = useTheme()
    const { account } = useEthereum()
    const [deleted, setDeleted] = useState<boolean>(false)
    const { pageState, setPageState } = usePageContext()

    const displayControls = () => {
        if (account.toLowerCase() === product.username.toLowerCase()) {
            return (
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    gap={3}
                >
                    <Button variant="contained" onClick={handleEditClick}>
                        Edit
                    </Button>
                    <Button
                        variant="contained"
                        color="warning"
                        onClick={handleDeleteClick}
                    >
                        Delete
                    </Button>
                </Box>
            )
        } else {
            return <PurchaseButton product={product} />
        }
    }

    const handleDeleteClick = () => {
        const error = deletePost(product._id)
        setTimeout(() => {}, 1000)
        console.log('delete clicked!')
        if (error) {
            alert('Problem Deleting Post')
        } else {
            setDeleted(true)
        }
    }

    const handleEditClick = () => {
        setPageState('Edit')
    }

    if (deleted) {
        return <Navigate to="/" />
    } else if (pageState === 'Edit') {
        return <PostForm account={account} context={'Edit'} />
    } else {
        return (
            <Container sx={{ py: 5 }}>
                <Stack spacing={2} sx={{ pt: 10 }} height="80vh">
                    <Box height="80%" display="flex">
                        <Box
                            id="img-box"
                            sx={{ background: theme.palette.background.paper }}
                            height="100%"
                            width="50%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <img
                                src={img}
                                height="100%"
                                style={{ borderRadius: '2.5%' }}
                            />
                        </Box>

                        <Stack
                            id="product-details-box"
                            width="50%"
                            height="100%"
                            spacing={4}
                            sx={{ px: 2 }}
                        >
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Typography
                                    variant="h6"
                                    component="h1"
                                    fontSize="2rem"
                                    color={theme.palette.text.primary}
                                >
                                    {product.title}
                                </Typography>
                                <Button variant="contained">
                                    ${product.price}
                                </Button>
                            </Box>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Typography
                                    variant="h6"
                                    component="h1"
                                    fontSize="1.5rem"
                                    color={theme.palette.text.primary}
                                >
                                    {product.location}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="h1"
                                    fontSize="1rem"
                                    color={theme.palette.text.secondary}
                                >
                                    {product.username}
                                </Typography>
                            </Box>
                            <Stack spacing={2}>
                                <Typography
                                    variant="h6"
                                    component="h1"
                                    fontSize="1.5rem"
                                    color={theme.palette.text.primary}
                                >
                                    Description
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="p"
                                    fontSize=".75rem"
                                    color={theme.palette.text.secondary}
                                >
                                    {product.description}
                                </Typography>
                            </Stack>
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                {displayControls()}
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        )
    }
}

export default ProductInternal
