import React, { useState } from 'react'
import { redirect } from 'react-router-dom';

const Signup = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const newUser = {
                firstName: firstname,
                lastName: lastname,
                email: email,
                password: password
            }
            const user = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/users/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser),
                credentials: "include"
            })
            const data = await user.json();

            if (data.success) {
                alert("User Signup Successfully");
                setFirstname("");
                setLastname("");
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
                <input type="text" placeholder='Firstname' value={firstname} onChange={(e) => { setFirstname(e.target.value) }} />
                <input type="text" placeholder='Lastname' value={lastname} onChange={(e) => { setLastname(e.target.value) }} />
                <input type="email" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button type='submit' onClick={handleSubmit} className='cursor-pointer'>Submit</button>
            </form>
        </div>
    )
}

export default Signup
