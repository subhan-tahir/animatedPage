import React, { useEffect } from 'react'
import Permissionbg from '../assets/Permission-big.svg'
import Groupbg from '../assets/Group_bg.svg'
import { motion } from 'framer-motion'
const ScrollDesign = () => {
  // const handleScroll = () => {
  //   console.log('Window scrolled:',window.scrollY);
  // };
  // window.addEventListener('scroll', handleScroll);
  // useEffect(()=>{
  //   return ()=>{
  //     window.removeEventListener('scroll', handleScroll);
  //   }
  // },[]);
  return (
    <>

      {/* <div className='w-full m-auto p-4'> */}
        {/* <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity:1,
          }}
          className=' '
        >
          <img src={Permissionbg} alt="" className='max-w-full w-[500px] h-[300px] m-auto' />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity:1,
          }}
        >
          <img src={Groupbg} alt="" className='max-w  w-[500px] h-[300px] m-auto absolute top-0 left-0 right-0 bottom-0 ' />
        </motion.div> */}
       
          <img src={Groupbg} alt="" className='max-w-full w-[500px] h-[300px] m-auto absolute lg:top-[200px] top-[20px] left-0 right-0 bottom-0 p-4' />
      
        
      {/* </div> */}


    </>
  )
}

export default ScrollDesign