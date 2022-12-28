import React, { useEffect, useState } from 'react'
import Cards from '../Cards/Cards';
import InputGroup from '../Filters/Categories/InputGroup';

const Episodes = () => {
    const [id, setID] = useState(1);
    const [info, updateInfo] = useState([]);
    const [results, setResults] = useState([])
    let { air_date, name } = info;

    let url = `https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(url).then(res => res.json());
            updateInfo(data);

            let a= await Promise.all(
                data.characters.map((ele)=>{
                    return fetch(ele).then(res => res.json())
                })
            )
            setResults(a);
        })()
    }, [url]);
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center">Episode : <span className="text-primary">{name === "" ? 'Unknown' : name}</span></h1>
                <h5 className="text-center mt-3 mb-5">Air date : {air_date === "" ? 'Unknown' : air_date}</h5>
            </div>
            <div className="row">
                <div className="col-lg-3 col-12 mb-5">
                    <h5 className='text-center mb-4'>Select episodes</h5>
                    <InputGroup setID={setID} total={51} name='Episode'/>
                </div>
                <div className="col-lg-8 col-12">
                    <div className="row"><Cards pages="/episodes/" results={results}/></div>
                </div>
            </div>
        </div>
    )
}

export default Episodes