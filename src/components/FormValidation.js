
import React, { useState } from 'react'

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const FormValidation = () => {


    const [name, setName] = useState("")
    const [nameEmptyErr, setNameEmptyErr] = useState(false)
    const [nameRegErr, setNameRegErr] = useState(false)


    const [email, setEmail] = useState("")
    const [emailEmptyErr, setEmailEmptyErr] = useState(false)
    const [emailRegErr, setEmailRegErr] = useState(false)


    const [password, setPassword] = useState("")
    const [passwordEmptyErr, setPasswordEmptyErr] = useState(false)
    const [passwordRegErr, setPasswordRegErr] = useState(false)


    const [age, setAge] = useState("")
    const [ageEmptyErr, setAgeEmptyErr] = useState(false)
    const [ageErr, setAgeErr] = useState(false)


    const [tnc, setTnc] = useState(false)
    const [tncErr, setTncErr] = useState(false)

    const [formValid, setFormValid] = useState("")

    const handleChange = (e, type) => {
        console.log(e)
        if (type === "name") {
            setName(e.target.value)
        }
        if (type === "email") {
            setEmail(e.target.value)
        }
        if (type === "password") {
            setPassword(e.target.value)
        }
        if (type === "age") {
            setAge(e.target.value)
        }
        if (type === "tnc") {
            setTnc(!tnc)
            setTncErr(tnc)
        }
    }

    const handleKeyUp = (e, type) => {
        if (type === "name") {
            const reg = new RegExp(/^[a-zA-Z ]*$/)
            if (reg.test(e.target.value)) {
                setNameRegErr(false)
                setNameEmptyErr(false)
            } else {
                setNameRegErr(true)
                setNameEmptyErr(false)
            }
        }
        if (type === "email") {
            const reg = new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)
            if (reg.test(e.target.value)) {
                setEmailRegErr(false)
            } else {
                setEmailRegErr(true)
                setEmailEmptyErr(false)
            }
        }
        if (type === "password") {
            const reg = new RegExp(
                /^[a-zA-Z0-9+_.-]/
            )
            if (reg.test(e.target.value)) {
                setPasswordRegErr(false)
            } else {
                setPasswordRegErr(true)
                setPasswordEmptyErr(false)
            }
        }
        if (type === "age") {
            if (e.target.value >= 18 && e.target.value <= 99) {
                setAgeErr(false)
            } else {
                setAgeErr(true)
                setAgeEmptyErr(false)
            }
        }
    }
    const handleSubmit = () => {
        if (!name.length > 0) {
            setNameEmptyErr(true)
        } else {
            setNameEmptyErr(false)
        }
        if (!email.length > 0) {
            setEmailEmptyErr(true)
        } else {
            setEmailEmptyErr(false)
        }
        if (!password.length > 6) {
            setPasswordEmptyErr(true)
        } else {
            setPasswordEmptyErr(false)
        }
        if (!age.length > 0) {
            setAgeEmptyErr(true)
        } else {
            setAgeEmptyErr(false)
        }
        if (!tnc) {
            setTncErr(true)
        } else {
            setTncErr(false)
        }
        if (
            name.length > 0 &&
            !nameRegErr &&
            email.length > 0 &&
            !emailRegErr &&
            password.length > 0 &&
            !passwordRegErr &&
            age.length > 0 &&
            !ageErr &&
            tnc &&
            !tncErr
        ) {
            setFormValid(alert("valid"))
        } else {
            setFormValid(alert("Invalid"))
        }
    }
    return (

        <div className="w-25 border rounded p-5 mx-auto " >
            <div>
                <h3>FORM VALIDATION!!!</h3>
            </div>
            <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                    type="text"
                    value={name}
                    className="form-control"
                    onChange={(e) => handleChange(e, "name")}
                    onKeyUp={(e) => handleKeyUp(e, "name")}
                />
                {nameRegErr && (
                    <small className="text-danger">
                        This field can only contain characters
                    </small>
                )}
                {nameEmptyErr && (
                    <small className="text-danger">Please fill out this field</small>
                )}
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    value={email}
                    className="form-control"
                    onChange={(e) => handleChange(e, "email")}
                    onKeyUp={(e) => handleKeyUp(e, "email")}
                />
                {emailRegErr && (
                    <small className="text-danger">
                        Use the standard domain format, like example.com
                    </small>
                )}
                {emailEmptyErr && (
                    <small className="text-danger">Please fill out this field</small>
                )}
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                    type="password"
                    value={password}
                    className="form-control"
                    onChange={(e) => handleChange(e, "password")}
                    onKeyUp={(e) => handleKeyUp(e, "password")}
                />
                {passwordRegErr && (
                    <small className="text-danger">
                        Please enter the password that meets out security standard
                    </small>
                )}
                {passwordEmptyErr && (
                    <small className="text-danger">Please fill out this field</small>
                )}
            </div>
            <div className="mb-3">
                <label className="form-label">Age</label>
                <input
                    type="number"
                    value={age}
                    className="form-control"
                    min="0"
                    onChange={(e) => handleChange(e, "age")}
                    onKeyUp={(e) => handleKeyUp(e, "age")}
                />
                {ageErr && (
                    <small className="text-danger">
                        Age should be greater than 18 or below 99
                    </small>
                )}
                {ageEmptyErr && (
                    <small className="text-danger">Please fill out this field</small>
                )}
            </div>
            <div className="mb-3">
                <input
                    type="checkbox"
                    id="tnc"
                    checked={tnc}
                    onChange={(e) => handleChange(e, "tnc")}
                />
                <label className="ms-2">Agree to terms and conditions</label>
                {tncErr && (
                    <small className="text-danger">
                        Please agree to Terms and Conditions!
                    </small>
                )}
            </div>
            <div>
                <button className="btn btn-success" onClick={() => handleSubmit()}>
                    Submit
                </button>
                <div>{formValid}</div>
            </div>
        </div>
    )
}

export default FormValidation