import React from 'react';
import { useState, useReducer } from 'react';

//ICONS
import {GiBigDiamondRing} from 'react-icons/gi';
import {BsPhoneFill} from 'react-icons/bs';
import {FaMale, FaFemale, FaFilter} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai';


function Filter() {
  const [rangeFilter, setRangeFilter] = useState(5);
  const [state, dispatch] = useReducer({initialState: products})
  return (
    <section className='filter-container'>
      <div className='filter-heading-container'>
        <h1>Filter</h1>
        <FaFilter id='filter-icon'/>
      </div>
      <div className='filter-type-text-align'>
        <h3>By Category</h3>
        <ul className='checkbox-container'>
        <li className='checkbox-li-item'>
          <label htmlFor="men"> <FaMale className='filter-category-icon'/> </label>
          <input type='checkbox' name="men" id="men" />
        </li>
        <li className='checkbox-li-item'>
          <label htmlFor="women"> <FaFemale className='filter-category-icon'/> </label>
          <input type='checkbox' name="women" id="women" />
        </li>
        <li className='checkbox-li-item'>
          <label htmlFor="jewelry"> <GiBigDiamondRing className='filter-category-icon'/> </label>
          <input type='checkbox' name="jewelry" id="jewelry" />
        </li>
        <li className='checkbox-li-item'>
          <label htmlFor="tech"> <BsPhoneFill className='filter-category-icon'/> </label>
          <input type='checkbox' name="tech" id="tech" />
        </li>
      </ul>
      </div>
      
      <div className='filter-type-text-align'>
        <h3>By Price Range</h3>
        <div className='price-range-container'>
          <input  
            type="range" 
            name="range" 
            id="range" 
            min={1} 
            max={1000} 
            value={rangeFilter} 
            onChange={(e) => setRangeFilter(e.target.value)}
          />
          <h4>$ 5 - $ {rangeFilter}</h4>
        </div>
        
      </div>
      <div className='filter-type-text-align'>
        <h3>By Rating</h3>
        <div className='rating-container'>
          <AiOutlineStar className='star-icon'/>
          <AiOutlineStar className='star-icon'/>
          <AiOutlineStar className='star-icon'/>
          <AiOutlineStar className='star-icon'/>
          <AiOutlineStar className='star-icon'/>
        </div>
      </div>
    </section>
  )
}

export default Filter;