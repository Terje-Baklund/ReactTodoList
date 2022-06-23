import React from "react";
import Todo from "./Todo"
import TodoForm from "./TodoForm";
import RemovedTodo from "./RemovedTodo"
import Table from "./Table";


export default function Body() {

    const [todoArray, setTodoArray] = React.useState(
        {
            active: [],
            completed: [],
            removed: []
        }
    )
    var activeElements = todoArray.active.map(
        obj =>
            <Todo
                title={obj.title}
                description={obj.description}
                updateState={setTodoArray}
                completed={false}
                date={obj.date}
            />)
    var completedElements = todoArray.completed.map(
        obj =>
            <Todo
                title={obj.title}
                description={obj.description}
                updateState={setTodoArray}
                completed={true}
                date={obj.date}
            />)
    var removedElements = todoArray.removed.map(
        obj =>
            <RemovedTodo
                title={obj.title}
                description={obj.description}
                updateState={setTodoArray}
                completed={obj.completed}
                date={obj.date}
            />)

    return (
        <div style={{height: "calc(100vh - 90px"}}>
            <div className="row w-100" style={{height: "60%"}}>
                <Table todoArray={activeElements} tableTitle="Active" />
                <Table todoArray={completedElements} tableTitle="Completed" />
                <Table todoArray={removedElements} tableTitle="Removed"/>
            </div>
            <TodoForm returnState={setTodoArray} />
        </div>
    )
}