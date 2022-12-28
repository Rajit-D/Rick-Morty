import React from 'react'
import FilterBTN from '../FilterBTN'

const Status = (props) => {
    let status= ['Alive', 'Dead', 'Unknown'];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Status
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex flex-wrap gap-2">
                    {status.map((ele, ind)=>(
                        <FilterBTN 
                            task={props.setStatus} 
                            setPageNumber={props.setPageNumber}
                            key={ind} 
                            ind={ind} 
                            ele={ele} 
                            name='status' />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Status