// REACT
import React from 'react';

// AXIOS
import axios from 'axios';

//ICONS
import {GiBigDiamondRing} from 'react-icons/gi';
import {BsPhoneFill} from 'react-icons/bs';
import {FaMale, FaFemale} from 'react-icons/fa';
import {RiFilterFill, RiFilterOffFill} from 'react-icons/ri'
import {AiOutlineStar, AiFillStar} from 'react-icons/ai';

// REDUX
import {useDispatch, useSelector} from 'react-redux'
import {rangeValueFilterFunc, categoryFilterFunc, darkIcon, setAllFilter, setAllFilterOff} from '../features/products/products-slice.js'


function Filter() {
  const dispatch = useDispatch();
  const {allFilter, categoryFilterMode, ratingFilterMode} = useSelector((store) => store.products)
  const {rangeFilter} = allFilter;
  const {isMenChecked, isWomenChecked, isJewelryChecked, isTechChecked} = categoryFilterMode;
  return (
    <section className='filter-container'>

      <div className='filter-heading-container'>
        <div className="filter-on-container" onClick={() => {
            const fetchData = async () => {
              const response = await axios({
                method: 'get', 
                url: 'http://localhost:8000/products'
              })
              const data = response.data;
              dispatch(setAllFilter(data));
            }
            fetchData();
          }}>
          <h1> Set Filter On</h1>
          <RiFilterFill className='filter-icon'/>
        </div>
        <div className='filter-off-container' onClick={() => {
            const fetchData = async () => {
              const response = await axios({
                method: 'get', 
                url: 'http://localhost:8000/products'
              })
              const data = response.data;
              dispatch(setAllFilterOff(data));
            }
            fetchData();
          }}>
          <h1>Set Filter Off</h1>
          <RiFilterOffFill className='filter-icon' />
        </div>
      </div>

      <div className='filter-type-text-align'>
        <h3>By Category</h3>

        <ul className='checkbox-container'>
        <li className='checkbox-li-item'>
          <label htmlFor="men"> <FaMale className='filter-category-icon'/> </label>
          <input 
            type='checkbox'
            value="men's clothing"
            name="isMenChecked" 
            id="men"
            checked={isMenChecked}
            onChange={(e) => {
              const value = e.target.value;
              const name = e.target.name;
                dispatch(categoryFilterFunc({name, value}))
          }}
          />
        </li>

        <li className='checkbox-li-item'>
          <label htmlFor="women"> <FaFemale className='filter-category-icon'/> </label>
          <input 
            type='checkbox'
            value="women's clothing"
            name="isWomenChecked" 
            id="women" 
            checked={isWomenChecked}
            onChange={(e) => {
              const value = e.target.value;
              const name = e.target.name;
                dispatch(categoryFilterFunc({name, value}))
          }}
            />
        </li>

        <li className='checkbox-li-item'>
          <label htmlFor="jewelry"> <GiBigDiamondRing className='filter-category-icon'/> </label>
          <input 
            type='checkbox' 
            value='jewelery'
            name="isJewelryChecked" 
            id="jewelry"
            checked={isJewelryChecked}
            onChange={(e) => {
              const value = e.target.value;
              const name = e.target.name;
                dispatch(categoryFilterFunc({name, value}))
          }}
            />
        </li>
        <li className='checkbox-li-item'>
          <label htmlFor="tech"> <BsPhoneFill className='filter-category-icon'/> </label>
          <input 
            type='checkbox'
            value='electronics'
            name="isTechChecked" 
            id="tech"
            checked={isTechChecked}
            onChange={(e) => {
              const value = e.target.value;
              const name = e.target.name;
                dispatch(categoryFilterFunc({name, value}))
          }}
          />
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
            min={0} 
            max={1000} 
            value={rangeFilter}
            onChange={(e) => {
                dispatch(rangeValueFilterFunc(e.target.value));
              }
            }
          />
          <h4>$ 0 - $ {rangeFilter}</h4>
        </div>
        
      </div>
      <div className='filter-type-text-align'>
        <h3>By Rating</h3>
        <div className='rating-container'>
          {ratingFilterMode[0] ? <AiFillStar 
                                    className='star-icon' 
                                    onClick={() => dispatch(darkIcon(0))} /> : 

                                  <AiOutlineStar 
                                    className='star-icon'
                                    onClick={() => dispatch(darkIcon(0))}/>
          }
          {ratingFilterMode[1] ? <AiFillStar 
                                    className='star-icon' 
                                    onClick={() => dispatch(darkIcon(1))} /> : 

                                  <AiOutlineStar 
                                    className='star-icon'
                                    onClick={() => dispatch(darkIcon(1))}/>
          }
          {ratingFilterMode[2] ? <AiFillStar 
                                    className='star-icon' 
                                    onClick={() => dispatch(darkIcon(2))} /> : 

                                  <AiOutlineStar 
                                    className='star-icon'
                                    onClick={() => dispatch(darkIcon(2))}/>
          }
          {ratingFilterMode[3] ? <AiFillStar 
                                    className='star-icon' 
                                    onClick={() => dispatch(darkIcon(3))} /> : 

                                  <AiOutlineStar 
                                    className='star-icon'
                                    onClick={() => dispatch(darkIcon(3))}/>
          }
          {ratingFilterMode[4] ? <AiFillStar 
                                    className='star-icon' 
                                    onClick={() => dispatch(darkIcon(4))} /> : 

                                  <AiOutlineStar 
                                    className='star-icon'
                                    onClick={() => dispatch(darkIcon(4))}/>
          }
        </div>
      </div>
    </section>
  )
}

export default Filter;