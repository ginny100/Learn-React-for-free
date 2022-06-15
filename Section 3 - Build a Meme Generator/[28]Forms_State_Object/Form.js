import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        { firstName: "", lastName: "", email: "", }
    )

    function handleChange(event) {
        // console.log(event.target.value)
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
            />
            <input 
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
            />
        </form>
    )
}
