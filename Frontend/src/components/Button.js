import React from 'react'
import MuiButton from '@mui/material/IconButton'

const Button = ({ onClick, icon}) => (
    <MuiButton
        variant='contained'
        color='primary'
        size='small'
        onClick={onClick}
        icon={icon ? icon : null}
    >
        {icon}
    </MuiButton>
)

export default Button