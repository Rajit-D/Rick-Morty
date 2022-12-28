import React from 'react'
import Gender from './Categories/Gender'
import Species from './Categories/Species'
import Status from './Categories/Status'

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  let clear = () => {
    setStatus("");
    setPageNumber("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  }
  return (
    <>
      <div className='col-lg-3 col-12 mb-5'>
        <div className="text-center fw-bold fs-4 mb-2">Filter</div>
        <div
          onClick={clear}
          style={{ cursor: 'pointer' }}
          className="text-center text-decoration-underline text-primary">Clear filters</div>
        <div className="accordion mt-4" id="accordionExample">
          <Gender setGender={setGender} setPageNumber={setPageNumber} />
          <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
          <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        </div>
      </div>
    </>
  )
}

export default Filters