import {combineReducers, createStore,applyMiddleware} from 'redux'
import thunks from 'redux-thunk'
import axios from 'axios'
const campusReducer=(state=[],action)=>{
    if(action.type==='GET_CAMPUSES'){
        return action.campuses
    }
    return state
}
const studentReducer=(state=[],action)=>{
    console.log(action)
    if(action.type==='GET_STUDENTS'){
        return action.students //because action.students is an array
    }
    return state
}
const reducer=combineReducers({
    students:studentReducer,
    campuses:campusReducer
})
//action creator which gets passed in data and returns the type of action as a key value pair along with the data passed in
//then the reducer will handle the action based off of the action type
const _getStudents=(students)=>{ 
    return {type:'GET_STUDENTS',students}
}
const _getCampuses=(campuses)=>{
    return {type:'GET_CAMPUSES',campuses}
}

// a thunk is a function that returns a function which takes in dispatch as an argument. 
//Dispatch is a function which you pass in the action creator. 
// In this function, you need to grab whatever data you need to pass into the action creator
const getStudents=()=>{
    return async(dispatch)=>{
        const {data}=await axios.get('/student')
        dispatch(_getStudents(data))
    } //async because this is where we put axios calls
}
const getCampuses=()=>{
    return async(dispatch)=>{
        const {data}=await axios.get('/campus')
        dispatch(_getCampuses(data))
    }
}
const store=createStore(reducer,applyMiddleware(thunks)) //createStore expects one argument which is the reducer. 


export default store
export {getStudents,getCampuses}