import * as React from 'react'
import { useState } from 'react'

import { useTheme } from '@mui/material/styles'
import { TextField, Button, Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { useFilter } from '../../providers/useFilter'

const Filter = () => {
    const theme = useTheme()
    const [showTextField, setShowTextField] = useState(false)
    const [filterInputVal, setFilterInputVal] = useState<string>('')
    const { filter, setFilter } = useFilter()

    const closeFilterBtnClick = (event: React.MouseEvent) => {
        event.preventDefault()
        setShowTextField(!showTextField)
    }

    const filterBtnClick = (event: React.MouseEvent) => {
        event.preventDefault()
        console.log(filterInputVal)
        setFilter(filterInputVal)
        setShowTextField(!showTextField)
    }

    const deleteFilterBtnClick = (event: React.MouseEvent) => {
        event.preventDefault()
        setShowTextField(!showTextField)
        setFilter(null)
        setFilterInputVal('')
    }

    const handleFilterInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setFilterInputVal(event.target.value)
    }

    if (showTextField) {
        return (
            <Box display="flex" alignItems="end" gap={1}>
                <TextField
                    variant="standard"
                    id="filter-input"
                    label="Username"
                    sx={{ my: 0 }}
                    value={filterInputVal}
                    onChange={handleFilterInputChange}
                />
                <FilterAltIcon
                    onClick={filterBtnClick}
                    sx={{ cursor: 'pointer', m: 0.5 }}
                    style={{ color: theme.palette.secondary.main }}
                />
                <CloseIcon
                    onClick={closeFilterBtnClick}
                    sx={{ cursor: 'pointer', m: 0.5 }}
                    style={{ color: theme.palette.secondary.main }}
                />
            </Box>
        )
    } else {
        if (filter) {
            return (
                <Button
                    variant="outlined"
                    size="medium"
                    onClick={deleteFilterBtnClick}
                >
                    {filter}
                    <CloseIcon
                        sx={{ pl: 1, color: theme.palette.secondary.light }}
                    />
                </Button>
            )
        } else {
            return (
                <Button
                    variant="outlined"
                    size="medium"
                    onClick={closeFilterBtnClick}
                >
                    Filter
                </Button>
            )
        }
    }
}

export default Filter
