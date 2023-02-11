import React, {useState, useEffect} from 'react'

const useChecker = (passwordProps) => {
    const [password, setPassword] = useState(passwordProps)
    const [passwordMatch, setPasswordMatch] = useState(<></>)
    const [passwordChecker, setPasswordChecker] = useState({
        barValue: 0,
        emoticon: '',
        helper: '',
        color: 'primary'
    })
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
                helper: '',
                color: 'primary'
                
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
  return {password, handleChangePassword1, handleChangePassword2, passwordChecker, passwordMatch}
}

export default useChecker