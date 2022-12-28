import React from 'react'

const InputGroup = (props) => {
    return (
        <div className="input-group mb-3">
            <select
            onChange={e=>{
                props.setID(e.target.value)
            }} 
                className="form-select" 
                id="episode">
                <option value='1' selected>Choose...</option>
                {[...Array(props.total).keys()].map(ele=>{
                    return(
                        <option value={ele+1}>{props.name} {ele+1}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default InputGroup