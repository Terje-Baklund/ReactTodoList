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
    //     {
    //     active: [
    //         ["Clean house", "Vacuum top and bottom floor, put books back in place and pick up all the trash in the entire house.", "22/5"],
    //         ["Walk dog", "Take dog for at least a 20 min walk", "22/5"],
    //         ["Make dinner", "Lasagne with extra chese and garlic bread", "22/5"]
    //     ],
    //     completed: [["hello", "there", "22/5"]],
    //     removed: [{ title: "I was removed", description: ":(", date: "22/5", completed: false }]
    // }
    )
    // var activeElements = todoArray.active.map(([title, desc, date]) => <Todo title={title} description={desc} updateState={setTodoArray} completed={false} date={date} />)
    // var completedElements = todoArray.completed.map(([title, desc, date]) => <Todo title={title} description={desc} updateState={setTodoArray} completed={true} date={date} />)
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