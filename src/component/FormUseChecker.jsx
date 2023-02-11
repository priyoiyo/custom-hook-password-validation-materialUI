import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Card, CardContent, Typography } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { width } from '@mui/system';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import useChecker from '../hookLibrary/useChecker';


export default function FormUseChecker() {
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(false);
    const toogleChange = (event) => {
        setChecked(event.target.checked);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const {password, handleChangePassword1 , handleChangePassword2, passwordChecker, passwordMatch } = useChecker({
        password1:'',
        password2:''
    })
    return (
        <>
            <Typography sx={{ textAlign: "center" }} gutterBottom variant="h4" component="h4">
                Form With Custom Hook useChecker
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