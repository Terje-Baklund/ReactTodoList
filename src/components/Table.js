import React from "react"

export default function Table({ todoArray, tableTitle }) {
    return (
        <div className="col-4 card p-4 m-0 h-100 overflow-hidden">
            <div className="h3 text-center border-bottom pb-3">{tableTitle}</div>
            <div className="overflow-auto">
                <table className="table table-hover">
                    <tbody>
                        {todoArray}
                    </tbody>
                </table>
            </div>
        </div>
    )
}