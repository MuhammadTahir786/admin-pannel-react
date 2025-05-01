import { Box, TextField } from '@mui/material'
import React from 'react'

const TextInput = ({ label }) => {
    return (
        <>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    label={label}
                    variant="outlined"

                    InputLabelProps={{ style: { color: '#fff', fontFamily: "sans-serif  " } }}
                    InputProps={{
                        sx: {
                            fontFamily: 'sans-serif'
                            ,
                            borderRadius: '8px',
                            color: '#fff',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#fff',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#fff',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#fff',
                            },
                        },
                    }}
                />

            </Box>
        </>
    )
}

export default TextInput
