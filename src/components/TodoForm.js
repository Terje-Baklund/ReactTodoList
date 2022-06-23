import React from "react"
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'

export default function TodoForm({ returnState }) {
    const [formData, setFormData] = React.useState({ title: "", description: "", date: null })

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault()
        returnState(prevState => {
            return {
                ...prevState,
                active: [...prevState.active, {
                    title: formData.title,
                    description: formData.description,
                    date: formData.date
                }],
            }
        });
        setFormData({ title: "", description: "", date: null });
    }
    console.log(formData.date)

    return (
        <form className="border-top mt-3" onSubmit={submitHandler}>
            <input name="title" value={formData.title} onChange={handleChange} className="m-3" placeholder="Title" />
            <input name="description" value={formData.description} onChange={handleChange} className="m-3" placeholder="Description" />
            <DatePicker className="m-3" selected={formData.date} onChange={newDate => setFormData(prevState => ({...prevState, date:newDate}))} dateFormat='dd/MM' minDate={new Date()}/>
            <button type="submit" className="btn btn-warning ms-3 mt-3 d-block">Add to list</button>
        </form>
    )
}