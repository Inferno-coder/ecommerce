import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
export const Search = () => {
    const [keyword,setKeyword]=useState('');
    const navigate=useNavigate()
    const searchHandler=()=>{
        navigate(`/search?keyword=${keyword}`)
    }
  return (
    <div class="input-group">
          <input
            type="text"
            id="search_field"
            class="form-control"
            placeholder="Enter Product Name ..."
            value={keyword}
            onChange={(e)=>setKeyword(e.target.value)}
          />
          <div class="input-group-append">
            <button onClick={searchHandler} id="search_btn" class="btn">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
  )
}
