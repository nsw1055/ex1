import { useState } from "react";

const InputEx = ({name}) => {

    //let nameValue = {name}
    
    //리엑트에서 상태를 다시 뿌려줌 클래스 컴포넌트를 사용하지 않아도 가능함
    const [nameValue, setNameValue] = useState(name)

    const changeValue = (e) => {
        console.log("changeValue");
        console.log(e.target.value)
        
        //컴포넌트 안에서의 변화를 갱신하지 않음 따라서 변화되었다는것을 리엑트에 알려 주어야 함
        //nameValue = e.target.value

        setNameValue(e.target.value);
    }

    return ( 
        <div>
            <div>
                <h2>Value {nameValue}</h2>
            </div>
            <div>
                {/* props로 전달 받은 값은 불변 => type이 text이지만 수정 불가능 하다. */}
                <input type ="text" value = {nameValue} onChange = {(e) => changeValue(e) }></input>
            </div>
        </div>
     );
}
 

export default InputEx;