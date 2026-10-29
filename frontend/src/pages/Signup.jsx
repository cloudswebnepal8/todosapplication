import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../api/api';

function Signup() {
    const navigate=useNavigate()
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })

    const submit = async (e) => {
        e.preventDefault()
        try {
            const res = await API.post("/auth/register", form);
            console.log(res.data)
            
            alert("Signup successfull.")
            navigate("/login")

        } catch (error) {
            alert("Signup error")

        }

    }
    return (
        <div className='flex min-h-screen justify-center items-center'>
            <form className='flex flex-col gap-6 text-center' onSubmit={submit}  >
                <h1>Signup</h1>
                <input type="text" placeholder='Enter your Full Name'
                value={form.name}
                    onChange={e => setForm({
                        ...form,
                        name: e.target.value
                    })}

                    required />
                <input type="email" placeholder='Enter your email address'
                value={form.email}


                    onChange={e => setForm({
                        ...form,
                        email: e.target.value
                    })}

                    required />
                <input type="password" placeholder='Enter your password'
                value={form.password}

                    onChange={e => setForm({
                        ...form,
                        password: e.target.value
                    })}

                    required />
                <button type='submit' className=' bg-blue-400 text-white px-2 py-1'>Signup</button>
                <p>Already have an account ?
                    <Link to="/login">Login</Link>
                </p>

            </form>
        </div>
    )
}

export default Signup