import React from 'react'

const FilterBTN = ({setPageNumber, task, ele, name, ind}) => {
    return (
        <div>
            <style>
                {`
                    input[type='radio']{
                        display: none;
                    }

                    .x:checked + label{
                        background-color: #3D348B;
                        color: white;
                    }
                `}
            </style>
            <div className="form-check">
                <input 
                    className="form-check-input x" 
                    type="radio" 
                    name={name} 
                    id={`${name}-${ind}`} />
                <label 
                    onClick={(x)=>{
                        setPageNumber(1);
                        task(ele);
                    }}
                    className="btn btn-outline-primary" 
                    htmlFor={`${name}-${ind}`}>{ele}</label>
            </div>
        </div>
    )
}

export default FilterBTN