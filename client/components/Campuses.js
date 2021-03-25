import React from 'react'

 const Campuses =(props)=>{
        return(
            <div>
                {props.campuses.map(campus=>{
                    return(
                        <div className='campus' key={campus.id}>
                            <div>{campus.name}</div>
                            <div>{campus.address}</div>
                        </div>
                    )
                })}
                {console.log(props)}
                
            </div>
        )    
}
export default Campuses