
import {v1} from 'uuid';
import {FilterValuesType, TodolistType} from '../App';
import {
    addTodolistAC,
    changeFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
    TodolistsReducers
} from "./TodolistsReducers";

test.skip('correct todolist should be removed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = TodolistsReducers(startState, removeTodolistAC(todolistId1))

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
});

test.skip ('correct todolist should be added task',()=>{
    let todolistId1 = v1();
    let todolistId2 = v1();
    let newID = v1()
    let newTitle = "Winner";

    const startState:Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
    const endState = TodolistsReducers(startState,addTodolistAC(newTitle,newID))

    expect(endState.length).toBe(3)
    expect(endState[0].title).toBe(newTitle)
    expect(endState[0].filter).toBe("all")

})

test.skip('correct todolist should be change title',()=>{
    let todolistId1 = v1();
    let todolistId2 = v1();
    let newTitle = "Winner";

    const startState:Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
    const endState = TodolistsReducers(startState,changeTodolistTitleAC(todolistId1,newTitle))

    expect(endState.length).toBe(2);
    expect(endState[0].title).toBe(newTitle)
    expect(endState[1].title).toBe("What to buy")
})

test.skip('correct todolist should be change filter',()=>{
    let todolistId1 = v1();
    let todolistId2 = v1();
    let newValue:FilterValuesType = "active"

    const startState:Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState=TodolistsReducers(startState,changeFilterAC(newValue,todolistId1))

    expect(endState[0].filter).toBe(newValue)
    expect(endState[1].filter).toBe("all")
})

