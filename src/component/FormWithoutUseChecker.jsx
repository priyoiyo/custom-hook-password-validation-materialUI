import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Card, CardContent, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Switch from '@mui/material/Switch';


export default function FormWithoutUseChecker() {
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(false);
    const [password, setPassword] = useState({
        password1: '',
        password2: ''
    })
    const [passwordMatch, setPasswordMatch] = useState(<></>)
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [passwordChecker, setPasswordChecker] = useState({
        barValue: 0,
        emoticon: '',
        helper: '',
        color: 'primary'
    })
    const toogleChange = (event) => {
        setChecked(event.target.checked);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleChangePassword1 = (event) => {
        setPassword({ ...password, password1: event.target.value })
    }
    const handleChangePassword2 = (event) => {
        setPassword({ ...password, password2: event.target.value })
    }
    const checkAlphanumeric = (props) => {
        return /\d/.test(props)
    }
    const checkCapitalize = (props) => {
        return props.toLowerCase() !== props
    }
    const checkSymbol = (props) => {
        return /[`!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(props)
    }
    const checkPasswordMatch = (props) => {
        return props.password1 == props.password2
    }

    useEffect(() => {
        if (password.password1.length >= 12 && checkAlphanumeric(password.password1) && checkCapitalize(password.password1) && checkSymbol(password.password1)) {
            setPasswordChecker({
                barValue: 90,
                emoticon: <div style={{ color: "green" }}><span>Strong &#128526;</span></div>,
                helper: 'Your password is great! Nice work!',
                color: 'success'
            })
        } else if (password.password1.length >= 8 && password.password1.length < 12 && checkAlphanumeric(password.password1) && checkCapitalize(password.password1) && checkSymbol(password.password1)) {
            setPasswordChecker({
                barValue: 60,
                emoticon: <div style={{ color: "orange" }}><span>Average &#128534;</span></div>,
                helper: 'Your password is easily guessable. You can do better.',
                color: 'warning'
            }
            )
        } else if (!password.password1) {
            setPasswordChecker({
                barValue: 0,
                emoticon: '',
                helper: ''
            })
        } else {
            setPasswordChecker({
                barValue: 20,
                emoticon: <div style={{ color: "red" }}><span>Weak &#128553;</span></div>,
                helper: 'Your is easily guessable. You can do better.',
                color: 'error'
            }
            )
        }
        if (password.password1.length >= 8 && password.password2.length > 0) {
            if (checkPasswordMatch(password)) {
                setPasswordMatch(<span style={{ fontWeight: "bold" }}>&#9989; Password Match </span>)
            } else {
                setPasswordMatch(
                    <span style={{ fontWeight: "bold" }}>&#10060; Password Doesn't Match </span>)
            }
        } else {
            setPasswordMatch(<></>)
        }
    }, [password])

    return (
        <>
            <Typography sx={{ textAlign: "center" }} gutterBottom variant="h4" component="h4">
                Form without useChecker
            </Typography>
            <Card variant='outlined' sx={{ maxWidth: "450px", margin: "auto" }}>
                <CardContent sx={{ display: "flex", flexDirection: "column" }}>

                    <span style={{ fontSize: "0.8rem" }}>Confirm your password with angular form group</span>
                    <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", fontSize: "0.8rem" }}>
                        <Switch
                            checked={checked}
                            onChange={toogleChange}
                            color="secondary"
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        <span>Show Password Details</span>
                    </Box>
                    {checked &&
                        <Box sx={{ fontSize: "0.8rem", marginBottom: "1rem" }}>
                            <span>- Password minimum 8 character</span>
                            <br />
                            <span>- Password must contain alpanumeric</span>
                            <br />
                            <span>- Password must contain capitalize</span>
                            <br />
                            <span>- Password must contain symbol</span>
                        </Box>}
                        
                    <FormControl color='secondary' fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            inputProps={{
                                maxLength: 30,
                                autoComplete: 'new-password',
                                form: {
                                    autoComplete: 'off',
                                }
                            }}
                            id="outlined-adornment-password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={handleChangePassword1}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <div style={{ fontSize: "0.7rem", display: "flex", justifyContent: "flex-end" }}>
                        <span>{password.password1.length} /30</span>
                    </div>
                    <FormControl color='secondary' fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            inputProps={{ maxLength: 30 }}
                            id="outlined-adornment-password2"
                            label="Confirm Password"
                            type={showPassword ? 'text' : 'password'}
                            onChange={handleChangePassword2}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <Box style={{ fontSize: "0.7rem", display: "flex", justifyContent: "flex-end" }}>
                        <span>{password.password2.length} /30</span>
                    </Box>
                    {password.password1 && <Box sx={{ width: '100%', fontSize: "0.8rem" }}>

                        <Box sx={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }} >
                            <span>Password Strength</span>
                            {passwordChecker.emoticon}
                        </Box>
                        <LinearProgress variant="determinate" color={passwordChecker.color} value={passwordChecker.barValue} />
                        <span>{passwordChecker.helper}</span>
                        <br />
                        <span>{passwordMatch}</span>
                    </Box>
                    }
                    
                    <Button sx={{ margin: "auto", marginTop: "10px", color: "white" }} color="secondary" variant="contained" >Submit</Button>
                </CardContent>
            </Card>
        </>

    );
}