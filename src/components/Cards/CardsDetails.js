import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CardsDetails = () => {
  const [fetchedData, updateFetchedData] = useState([]);
  let { id } = useParams();
  let url = `https://rickandmortyapi.com/api/character/${id}`

  let { name, image, origin, location, gender, species, status, type } = fetchedData;

  useEffect(() => {
    (async function () {
      let data = await fetch(url).then(res => res.json());
      updateFetchedData(data);
    })()
  }, [url]);
  return (
    <div className='container d-flex justify-content-center'>
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>
        <img src={image} alt="" className="img-fluid" />
        {(() => {
          if (status === 'Dead') {
            return (<span className="badge text-bg-danger fs-5">{status}</span>);
          }
          else if (status === 'Alive') {
            return (<span className="badge text-bg-success fs-5">{status}</span>);
          }
          else {
            return (<span className="badge text-bg-secondary fs-5">{status}</span>);
          }
        })()}
        <div className="content">
          <div className="text-center">
            <span className="fw-bold">Gender: </span>
            {gender}
          </div>
          <div className="text-center">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
          <div className="text-center">
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div className="text-center">
            <span className="fw-bold">Type: </span>
            {type === "" ? "Unknown" : type}
          </div>
          <div className="text-center">
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsDetails