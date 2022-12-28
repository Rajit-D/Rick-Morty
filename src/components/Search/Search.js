import React from 'react'

const Search = (props) => {
    return (
        <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center mb-5 gap-3" role="search">
            <input className="form-control me-2" 
                   onChange={ele=>{
                    props.setPageNumber('1');
                    props.setSearch(ele.target.value);
                   }}
                   type="text" 
                   placeholder="Search for characters" 
                   style={{ width: '60%', border: '3px solid #5BC8AF', borderRadius: '16px', boxShadow:'1px 3px 9px #888888' }} />
            <button className="btn btn-outline-success" 
                    onClick={ele=>ele.preventDefault()}
                    style={{boxShadow:'1px 3px 9px #888888'}}>Search</button>
        </form>
    )
}

export default Search