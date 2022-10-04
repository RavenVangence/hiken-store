import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";

// IMAGES
import homeWallMens from '../pictures/wall-1-mens-clothing.jpg'
import homeWallWomens from '../pictures/wall-2-womens-clothing.jpg'
import homeWallElectronics from '../pictures/wall-3-tech-1.jpg'
import homeWallJewelry from '../pictures/wall-4-jewelry-1.jpg'

// ICONS
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

const Home = () => {

  const [idMatcher, setIdMatcher] = useState(0);

  useEffect(() => {
    if (idMatcher < 0 || idMatcher > 3) {
      if (idMatcher < 0) {
        setIdMatcher(3);
      }
      if(idMatcher > 3) {
        setIdMatcher(0);
      }
    } else {
      // setInterval(() => {
      //   setIdMatcher(idMatcher + 1)
      // }, 10000)
    }
  },[idMatcher]) 
  const carousel = [
    {src: homeWallMens, id: 0, phrase: {text:'Men\'s Fashion', phraseId:'clothes-1'}},
    {src: homeWallWomens, id: 1, phrase: {text:'Women\'s Fashion', phraseId:'furniture-1'}},
    {src: homeWallElectronics, id: 2, phrase: {text:'Stay Connected', phraseId:'electronics-1'}},
    {src: homeWallJewelry, id: 3, phrase: {text: 'Jewelry', phraseId:'shoes-1'}}
  ]


  return <div className='home-container' key='rim'>
        
      { carousel.filter((wallData) => wallData.id === idMatcher).map((wallData ) =>   {
        
        const {src, id, phrase} = wallData;
        
          return  <AnimatePresence mode='wait'>
                          
            <motion.img
              key={id}                       
              src={src}
              initial={{x: '-100vw'}}
              animate={{x: 0 }}
              transition={{type: 'easeInOut', duration: .1}}
              exit={{x: '100vw' }}
              className='home-image'
            />

            {/* 
                        CATEGORY CAPTION
            */}
            <motion.div
              key={phrase.phraseId}
              initial={{x: '-100vw'}}
              animate={{x: 0 }}
              transition={{type: 'easeInOut', duration: .1}}
              exit={{x: '100vw' }}
              className='caption-container'
            >
              <h1 className='caption'
              >
                {phrase.text}
              </h1>
            </motion.div>
            
          </AnimatePresence>
          })
        }

        {/* 
                    B A C K     B U T T O N
        */}
        
        <motion.button  
          id='back-btn' 
          className='carousel-btn' 
          onClick={() => setIdMatcher(idMatcher-1)} 
          key='back-btn'
          whileHover={{
          scale: 1.2,
          transition: {type: 'easeInOut', duration: 0.3 }}}
          whileTap={{ scale: 1 }}
        >
          <FaAngleLeft className='carousel-icons'/>
        </motion.button>

        {/* 
                    N E X T     B U T T O N
        */}

        <motion.button  
          id='next-btn' 
          className='carousel-btn' 
          onClick={() => setIdMatcher(idMatcher+1)} 
          key='next-btn'
          whileHover={{
          scale: 1.2,
          transition: {type: 'easeInOut', duration: 0.3 }}}
          whileTap={{ scale: 1 }}
        >
          <FaAngleRight className='carousel-icons'/>
        </motion.button>

    </div>
}

export default Home;