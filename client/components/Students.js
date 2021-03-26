import React from 'react'

 const Students=(props)=>{
    return(
        <div>
            {props.students.map(student=>{
                return(
                    <div className='student' key={student.id}>
                        <div>{`${student.firstName} ${student.lastName}`}</div>
                        <div>{student.email}</div>
                    </div>
                )
            })}            
        </div>
    )
}

export default Students