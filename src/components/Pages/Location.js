import React, { useEffect, useState } from 'react'
import Cards from '../Cards/Cards';
import InputGroup from '../Filters/Categories/InputGroup';

const Location = () => {
    const [id, setID] = useState(1);
    const [info, updateInfo] = useState([]);
    const [results, setResults] = useState([])
    let { type, name, dimension } = info;

    let url = `https://rickandmortyapi.com/api/location/${id}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(url).then(res => res.json());
            updateInfo(data);

            let a= await Promise.all(
                data.residents.map((ele)=>{
                    return fetch(ele).then(res => res.json())
                })
            )
            setResults(a);
        })()
    }, [url]);
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center">Location : <span className="text-primary">{name === "" ? 'Unknown' : name}</span></h1>
                <h5 className="text-center mt-3">Dimension : {dimension === "" ? 'Unknown' : dimension}</h5>
                <h6 className="text-center mt-3 mb-5">Type : {type === "" ? 'Unknown' : type}</h6>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12 mb-5">
                    <h5 className='text-center mb-4'>Select location</h5>
                    <InputGroup setID={setID} total={126} name='Location'/>
                </div>
                <div className="col-lg-8 col-12">
                    <div className="row"><Cards pages="/location/" results={results}/></div>
                </div>
            </div>
        </div>
    )
}

export default Location