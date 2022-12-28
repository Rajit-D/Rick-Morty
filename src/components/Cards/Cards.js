import React from 'react'
import { Link } from 'react-router-dom';

const Cards = (props) => {
    let display;
    if (props.results) {
        display = props.results.map(ele => {
            let { id, name, image, location, status } = ele;
            return (<Link 
                        to={`${props.pages}${id}`} 
                        key={id}
                        style={{textDecoration: "none"}} 
                        className="col-lg-4 col-md-6 col-sm-12 mb-4 position-relative text-dark">
                <div className="d-flex flex-column justify-contents-center" style={{ border: '2px solid #06BCC1', borderRadius: '10px' }}>

                    {(() => {
                        if (status === 'Dead') {
                            return (<span className="badge text-bg-danger position-absolute" style={{ right: '20px', top: '4px' }}>{status}</span>);
                        }
                        else if(status === 'Alive'){
                            return(<span className="badge text-bg-success position-absolute" style={{ right: '20px', top: '4px' }}>{status}</span>);
                        }
                        else{
                            return(<span className="badge text-bg-secondary position-absolute" style={{ right: '20px', top: '4px' }}>{status}</span>);
                        }
                    })()}

                    <img src={image} alt="" className="img-fluid" style={{ borderRadius: '10px 10px 0 0' }} />
                    <div className="content" style={{ padding: '10px' }}>
                        <div className="fs-4 fw-bold mb-4">{name}</div>
                        <div className="fs-6">Last location</div>
                        <div className="fs-5">{location.name}</div>
                    </div>
                </div>
            </Link>)
        });
    }
    else {
        display = "No characters found :/";
    }
    return (
        <>{display}</>
    )
}

export default Cards