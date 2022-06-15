import React from "react"

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    
    function handleFirstNameChange(event) {
        /**
         * Challenge: update the firstName state on every keystroke
         */
        setFirstName(event.target.value)
    }

    function handleLastNameChange(event) {
        /**
         * Challenge: update the lastName state on every keystroke
         */
        setLastName(event.target.value)
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleFirstNameChange}
            />
            <input 
                type="text"
                placeholder="Last Name"
                onChange={handleLastNameChange}
            />
        </form>
    )
}
