import React from 'react'
import Featuretabnav from './Components/Featuretabnav'
import DhiWiseWrapper from './Components/DhiWiseWrapper'

const AnimatedPage = () => {
    return (
        <>
            <div className='bg-black w-full'>

                <div className='max-w-7xl mx-auto   text-white'>
                    <Featuretabnav />
                    <DhiWiseWrapper />
                </div>
            </div>

        </>
    )
}

export default AnimatedPage