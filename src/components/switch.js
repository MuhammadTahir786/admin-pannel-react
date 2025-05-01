import React from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

// iOS-style customized Switch
const IOSSwitch = styled((props) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(
    ({ theme }) => ({
        width: 50,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 1,
            '&.Mui-checked': {
                transform: 'translateX(25px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: '#0075FF',
                    opacity: 1,
                },
            },
        },
        '& .MuiSwitch-thumb': {
            width: 24,
            height: 24,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: '#ccc',
            opacity: 1,
        },
    })
);

export default function RememberMeSwitch() {
    const [checked, setChecked] = React.useState(true);

    return (
        <FormControlLabel
            sx={{
                color: '#fff',
                fontFamily: 'sans-serif',
                fontSize: '14px',
                alignSelf: 'flex-start',

            }}
            control={
                <IOSSwitch
                    sx={{ m: 1 }}
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                />
            }
            label="Remember Me"
        />
    );
}
