import React, { useState } from 'react';

const Form = props => {

    const [member, setMember] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setMember({ 
            ...member, 
            [event.target.name]: event.target.value 
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.setUser([
            member,
            ...props.member,
        ]);
    }

    const resetForm = (event) => {
        event.preventDefault();
        setMember({
            email: "",
            role: ""
        })
    }

    return (
        <form onSubmit={handleSubmit}>
                    
            <input
                onChange={handleChange}
                type="text"
                name="email"
                placeholder="Email"
                value={member.email}
            />

            <input
                onChange={handleChange}
                type="text"
                name="password"
                placeholder="Password"
                value={member.password}
            />


            <button type="submit">Submit</button>
            <button type="button" onClick={resetForm}>Reset</button>
        </form>
    )
}

export default Form;