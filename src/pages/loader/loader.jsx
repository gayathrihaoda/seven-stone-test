import React from 'react'
import "../../style/nav.css"
import { easeInOut, motion } from "framer-motion";

import gif from "../../assets/sevenAni.gif"
import desGif from "../../assets/sevenAniDes.gif"


const Loader = () => {
  return (
    <motion.div
    className='loader__container'>
        <div className='w-full h-full grid place-content-center'>

            <img src={ desGif } alt='logo__gif' className='gif__logo' />
        </div>
    </motion.div>
  )
}

export default Loader