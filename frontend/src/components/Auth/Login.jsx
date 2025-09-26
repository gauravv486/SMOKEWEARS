import React, { useState } from 'react'
import { redirect } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const newUser = {
                email: email,
                password: password
            }
            const user = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/users/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser) ,
                credentials : "include"
            })
            const data = await user.json();

            if (data.success) {
                alert("User login Successfully");
                setEmail("");
                setPassword("");
            }
        } catch (error) {
            alert(error.message);
        }

    }

    return (
        <div>
            <form action="">
                <input type="email" placeholder='Email'value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" placeholder='Password'value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button type='submit' onClick={handleSubmit} className='cursor-pointer'>Submit</button>
            </form>
        </div>
    )
}

export default Login
