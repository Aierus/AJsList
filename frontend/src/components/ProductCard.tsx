import * as React from 'react'

import { PostType } from '../hooks/useFetch'

import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

declare var require: any
const img = require('../assets/sample-img.jpg')

const firstHundredChars = (content: string) => {
    if (content.length > 99) {
        return content.slice(0, 97) + '...'
    }
    return content
}

const firstTwentyChars = (content: string) => {
    if (content.length > 19) {
        return content.slice(0, 17) + '...'
    }
    return content
}

const firstTenChars = (content: string) => {
    if (content.length > 10) {
        return content.slice(0, 10) + '...'
    } else {
        return content
    }
}

type PropTypes = {
    data: PostType
    keyVal: number
}

const ProductCard = ({ data, keyVal }: PropTypes) => {
    const theme = useTheme()

    return (
        <Box
            width="20%"
            borderRadius="2.5%"
            overflow="hidden"
            sx={{
                aspectRatio: '2 / 3',
                background: theme.palette.background.paper,
            }}
            key={keyVal}
        >
            <Link to={`/${data._id}`} style={{ textDecoration: 'none' }}>
                <img src={img} width="100%" height="66%" />
                <Stack spacing={1}>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="end"
                        sx={{ px: 2 }}
                    >
                        <Typography
                            variant="h6"
                            component="h6"
                            fontSize=".85rem"
                            color={theme.palette.text.primary}
                        >
                            {firstTwentyChars(data.title)}
                        </Typography>

                        <Typography
                            variant="h6"
                            component="h6"
                            fontSize=".85rem"
                            color={theme.palette.text.secondary}
                        >
                            {firstTenChars(data.username)}
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="end"
                        sx={{ px: 2 }}
                    >
                        <Typography
                            variant="h6"
                            component="h6"
                            fontSize=".8rem"
                            color={theme.palette.text.primary}
                        >
                            {data.location}
                        </Typography>

                        <Typography
                            variant="h6"
                            component="h6"
                            fontSize=".8rem"
                            color={theme.palette.text.secondary}
                        >
                            ${data.price}
                        </Typography>
                    </Box>
                    <Box sx={{ px: 2 }}>
                        <Typography
                            variant="h6"
                            component="h6"
                            fontSize=".75rem"
                            color={theme.palette.text.secondary}
                            lineHeight=".85rem"
                        >
                            {firstHundredChars(data.description)}
                        </Typography>
                    </Box>
                </Stack>
            </Link>
        </Box>
    )
}

export default ProductCard
