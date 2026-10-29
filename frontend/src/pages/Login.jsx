import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from './../api/api';
import { toast } from "react-toastify"

function Login() {
    const nav = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const [otp, setOtp] = useState("")
    const [showOtp, setShowOtp] = useState(false)

    const sendOTP = async () => {

        try {
            const res = await API.post("/auth/sendOTP", form)

            toast.success("OTP sent to your email.")

            setShowOtp(true)

        } catch (error) {
            alert("failed to send otp")

        }
    }


    const verifyOTP = async () => {

        try {
            const res = await API.post("/auth/verifyOTP", {
                email: form.email,
                otp
            })
            localStorage.setItem("token", res.data.token)

            toast.success("Login successful")

            nav("/")

            setTimeout(() => {
                window.location.reload()
            }, 500)

        } catch (error) {
            alert("otp verification failed")

        }
    }

    return (
        <div className='flex min-h-screen justify-center items-center'>
            <div className='flex flex-col gap-6 text-center' >
                <h1>Welcome Back.</h1>

                {
                    !showOtp ? (
                        <>

                                <input type="email" placeholder='Enter your email'
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            email: e.target.value

                                        })
                                    }

                                />
                                <input type="password" placeholder='Enter your password'
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            password: e.target.value

                                        })
                                    }

                                />

                                <button type='submit' onClick={sendOTP} className=' bg-blue-400 text-white px-2 py-1'>Login</button>

                                <p>Don't have an account ?
                                    <Link to="/signup">Signup</Link>
                                </p>

                        </>

                    ) : (
                        <>
                            <input type="number" placeholder='Enter your otp'
                                onChange={(e) => setOtp(e.target.value)}

                            />
                            <button onClick={verifyOTP}>Verify OTP</button>
                        </>
                    )
                }


            </div>

        </div>
    )
}

export default Login