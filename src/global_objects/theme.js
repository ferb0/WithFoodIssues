import { createTheme } from '@mui/material/styles'

const grey = '#464646'
const black = '#000000'
const orange = '#eb8c34'

const theme = createTheme({
    palette: {
        primary: { main: orange },
        secondary: { main: black }
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                standardSuccess: {
                    backgroundColor: 'grey',
                    color: 'white'
                },
                standardError: {
                    backgroundColor: 'grey',
                    color: 'white'
                },
                standardWarning: {
                    backgroundColor: 'grey',
                    color: 'white'
                },
                standardInfo: {
                    backgroundColor: 'grey',
                    color: 'white'
                }
            }
        },

    },
})

export const styleTextInput = {
    "& label.Mui-focused": {
        color: black
    },
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            borderColor: black
        }
    }
};

export default theme