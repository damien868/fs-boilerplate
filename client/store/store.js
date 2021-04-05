import {combineReducers, createStore,applyMiddleware} from 'redux'
import thunks from 'redux-thunk'
import axios from 'axios'
const campusReducer=(state=[],action)=>{
    if(action.type==='GET_CAMPUSES'){
        return action.campuses
    }
    else if(action.type==='CREATE_CAMPUS'){
        return [...state,action.campus]
    }
    else if(action.type==='DELETE_CAMPUS'){
        return state.filter(campus=>campus.id !== action.id) //return all values of the array that don't match the id you are removing
    }
    else if(action.type==='UPDATE_CAMPUS'){
        return [...state,action.campus]
    }
    return state 
}
const studentReducer=(state=[],action)=>{
    console.log(action)
    if(action.type==='GET_STUDENTS'){
        return action.students //because action.students is an array
    }
    else if(action.type==='CREATE_STUDENT'){
        return [...state,action.student]
    }
    else if(action.type==='DELETE_STUDENT'){
        return state.filter(student=>student.id !== action.id) //return all values of the array that don't match the id you are removing
    }
    else if(action.type==='UPDATE_STUDENT'){
        return [...state,action.student]
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
const _createCampus=(campus)=>{
    return{type:'CREATE_CAMPUS',campus}
}
const _createStudent=(student)=>{
    return{type:'CREATE_STUDENT',student}
}
const _deleteCampus=(id)=>{
    return{type:'DELETE_CAMPUS',id}
}
const _deleteStudent=(id)=>{
    return{type:'DELETE_STUDENT',id}
}
const _updateCampus=(campus)=>{
    return{type:'UPDATE_CAMPUS',campus}
}
const _updateStudent=(student)=>{
    return{type:'UPDATE_CAMPUS',student}
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
const createCampus=(campusName,campusAddress,campusDescription)=>{
    return async(dispatch)=>{
        const{data}=await axios.post('/campus/new',{campusName,campusAddress,campusDescription}) //2nd argument is the object with values you pass in
        dispatch(_createCampus(data)) //dispatches the object
    }
}
const createStudent=(studentFirstName,studentLastName,studentEmail)=>{
    return async(dispatch)=>{
        const {data}=await axios.post('/student/new',{studentFirstName,studentLastName,studentEmail})
        dispatch(_createStudent(data))
    }
}
const deleteCampus=(id)=>{
    return async(dispatch)=>{
        await axios.delete(`/campus/${id}`,{})
        dispatch(_deleteCampus(id))
    }
}
const deleteStudent=(id)=>{
    return async(dispatch)=>{
        await axios.delete(`/student/${id}`,{})
        dispatch(_deleteStudent(id))
    }
}
const updateCampus=(name,address,description,image,id)=>{
    return async(dispatch)=>{
        const{data}=await axios.post(`/campus/${id}`,{name,address,description,image})
        dispatch(_updateCampus(data))
    }
}
const updateStudent=(firstName,lastName,email,profilePicture,id)=>{
    return async(dispatch)=>{
        const{data}=await axios.post(`/student/${id}`,{firstName,lastName,email,profilePicture})
        dispatch(_updateStudent(data))
    }
}
const store=createStore(reducer,applyMiddleware(thunks)) //createStore expects one argument which is the reducer. 


export default store
export {getStudents,getCampuses,createCampus,createStudent,deleteCampus,deleteStudent,updateCampus,updateStudent}