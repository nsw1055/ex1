import {v4 as uuidv4} from 'uuid';

const localStorage = window.localStorage

export const addTodo = (text) => {
    const id = uuidv4()
    const obj = {id: id, text: text, complete: false}
    localStorage.setItem(id, JSON.stringify(obj))
};

export const modifyTodo = (id) => {
    const target = JSON.parse(localStorage.getItem(id))

    target.complete = target.complete? false : true

    localStorage.setItem(id, JSON.stringify(target))
}

export const removeTodo = (id) => {

    localStorage.removeItem(id)
};

export const getList = () => {

    const keys = Object.keys(localStorage)

    //console.log(keys)

    const arr = []


    keys.forEach(key => {
        arr.push(JSON.parse(localStorage.getItem(key)))
    })
    //console.log(arr)

    return arr

};