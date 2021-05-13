import ExLayout from "../d2/ExLayout";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import {useState} from "react";

const TodoContainer = () => {

    const [refresh, setRefresh] = useState(false)

    const change = () => {
        setRefresh(!refresh)
    }

    return (
        <ExLayout>
            <TodoHeader change={change}></TodoHeader>
            <TodoList change={change}></TodoList>
        </ExLayout>
    );
};
export default TodoContainer;