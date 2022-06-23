import React from "react";

export default function RemovedTodo({ title, description, date, updateState, completed }) {

    const [regretTimer, setRegretTimer] = React.useState(true)

    const status = (completed ? "completed" : "active")

    function undo() {
        updateState(function (prevState) {
            return {
                ...prevState,
                [status]: [...prevState[status], {title, description, date}],
                removed: [...prevState.removed.filter(obj => obj.title !== title && obj.description !== description)]
            };
        }
        )
    }

    setTimeout(() => {
        (regretTimer
            ? setRegretTimer(false)
            : setTimeout(() => {
                updateState(prevState => (
                    {
                        ...prevState,
                        removed: [...prevState.removed.filter(
                            obj => obj.title !== title && obj.description !== description
                            )]
                    })
                )
            }, 60000)
        );
    }, 30000)

    return (
        <tr className="ms-3 mt-3">
            <td className="col-9">
                <label className="d-block fw-bold">
                    {title}
                </label>
                <small>
                    {description}
                </small>
                <small className="float-end">
                    {date.toLocaleDateString('en-GB')}
                </small>
            </td>
            <td>
                {regretTimer && <button onClick={undo} className="btn btn-secondary">Undo</button>}
            </td>
        </tr>
    )
}