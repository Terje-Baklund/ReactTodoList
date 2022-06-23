import React from "react";

export default function Todo({ title, description, date, updateState, completed }) {

    date = (date === null || date === "" ? new Date() : date)

    const status = (completed ? "completed" : "active")

    function deleteSelf() {
        updateState(function (prevState) {
            return {
                ...prevState,
                [status]: [...prevState[status]].filter((obj) => obj.title !== title && obj.description !== description),
                removed: [
                    ...prevState.removed,
                    { title, description, completed, date }
                ]
            }
        }
        )
    }

    function handleChange(event) {
        const newStatus = (completed ? "active" : "completed")
        updateState(function (prevState) {
            return {
                ...prevState,
                [status]: [...prevState[status]].filter((obj) => obj.title !== title && obj.description !== description),
                [newStatus]: [...prevState[newStatus], {title, description, completed, date}]
            };
        }
        )
    }

    return (
        <tr className="">
            <td>
                <input onChange={handleChange} style={{ width: 25, height: 25 }} className="mt-1" checked={completed} type="checkbox" />
            </td>
            <td className="col-9">
                <label className="d-block fw-bold">
                    {title}
                </label>
                <small>
                    {description}
                </small>
                <small className="ms-2 float-end">
                    {date.toLocaleDateString('en-GB')}
                </small>
            </td>
            <td>
                <button onClick={deleteSelf} className="btn btn-danger m-1">X</button>
            </td>
        </tr>
    )
}
