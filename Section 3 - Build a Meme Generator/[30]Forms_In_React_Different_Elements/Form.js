import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )

    function handleChange(event) {
        const { name, value, type, checked } = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault() 
        /* This won't refresh our page, 
         * but essentially rerenders our app with all the default values instead.
         * We can then run the following code the way we want to  */
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* Input */}
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />

            {/* Textarea */}
            <textarea
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />

            {/* Checkbox */}
            <input
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />

            {/* Radio Buttons */}
            <fieldset>
                <legend>Current employment status</legend>
                {/* Radio Button 1 */}
                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                {/* Radio Button 2 */}
                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                {/* Radio Button 3 */}
                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br />

            {/* Select & Option */}
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            
            {/* Submitting the form */}
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}
