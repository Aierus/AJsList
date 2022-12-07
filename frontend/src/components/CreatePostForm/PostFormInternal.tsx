import * as React from 'react'

import {
    Box,
    Stack,
    Typography,
    TextField,
    Button,
    useTheme,
} from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

const PostFromInternal = () => {
    const theme = useTheme()

    return (
        <Box
            display="flex"
            sx={{ pt: 10 }}
            height="80vh"
            justifyContent="center"
        >
            <Box
                width="35%"
                height="100%"
                borderRadius="6rem 0 0 3rem"
                border={`2px solid ${theme.palette.background.paper}`}
            ></Box>
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
                        <TextField variant="standard" label="Title" fullWidth />
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
                                fullWidth
                            />
                        </Box>
                        <Box width="45%" height="100%">
                            <TextField
                                variant="standard"
                                label="Location"
                                fullWidth
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
                        ></TextField>
                    </Box>
                    <Box display="flex" width="100%" justifyContent="center">
                        <Button
                            variant="contained"
                            endIcon={<CloudUploadIcon />}
                        >
                            Upload Image
                            <input
                                hidden
                                type="file"
                                accept="image/png, image/jpeg"
                            />
                        </Button>
                    </Box>
                    <Box display="flex" width="100%" justifyContent="center">
                        <Button
                            variant="contained"
                            sx={{
                                background:
                                    'linear-gradient(248.86deg, #B6509E 10.51%, #2EBAC6 93.41%)',
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}

export default PostFromInternal
