import { Paper } from "@material-ui/core";
import { useState } from "react";
import CountButtons from "./CountButtons";
import CountDisplay from "./CountDisplay";
import OddEvenDisplay from "./OddEvenDisplay";

const CountContainer = () => {

    const [num, setNum] = useState(1)

    const changeNum = (value) => {
        console.log("click", value)
        setNum(num+value < 1 ? 1 : num+value)
    }

    return (  
        <Paper elevation = {5}>
            <CountDisplay num={num}></CountDisplay>
            <CountButtons fn ={changeNum}></CountButtons>
            <OddEvenDisplay num = {num}></OddEvenDisplay>
        </Paper>
    );
}
 
export default CountContainer;