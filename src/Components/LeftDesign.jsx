import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import cardLogo1 from '../assets/figma-logo1.png';
import cardLogo2 from '../assets/Templates-logo.svg';
import cardLogo3 from '../assets/ThemeCustomization-logo.svg';
import cardLogo4 from '../assets/FigmaRefresh-logo.svg';
const LeftDesign = ({tabTitle,leftDesignHeading , tabId}) => {
    let cardsData = [
        {cardPic:cardLogo1,
          heading:'Figma Plugin'  ,
          para:'Convert Figma design to code in no time using DhiWise Figma-to-code plugin.',
          link:'Install plugin',
          
        },
        {cardPic:cardLogo2,
          heading:'Ready-to-use Templates & Screen Library'  ,
          para:'Wide range of pre-built Templates and 1000+ screens based on various categories.',
          link:'',
        },
        {cardPic:cardLogo3,
          heading:'Figma Refresh'  ,
          para:'Resync your new Figma design changes in your app in minutes.',
          link:'Install plugin',
        },
        {cardPic:cardLogo4,
          heading:'Theme Customization'  ,
          para:'Define the user interface for your app, by selecting between dark and light themes.',
          link:'Install plugin',
        },
    ]
    return (
        <>

            {/*left Design */}
            <div className='flex flex-col gap-[20px] mb-[30px] scroll-smooth' id={tabId}>
                {/*design header */}
                <div className='flex flex-col gap-[20px]'>
                    <h3 className='text-[var(--primaryColor)] capitalize mt-3'>{tabTitle}</h3>
                    <h1 className='text-[var(--secondaryColor)] text-[38px] font-bold leading-[46px]'>{leftDesignHeading}</h1>
                    <p className='text-[var(--paraColor)] text-[16px] font-bold leading-[24px]'>Easily import designs from Figma or choose one from our vast collection of Templates and Screen Library and start building your app.</p>
                </div>
                <div className='grid sm:grid-cols-2 gap-6'>
                    {cardsData.map((cardItem,cardIndex)=>
                    
                    <div className='flex flex-col gap-[8px]' key={cardIndex}>
                        <img src={cardItem.cardPic} alt="" className='w-[40px] h-[40px] object-contain'/>
                        <h4 className='text-[var(--secondaryColor)] text-[18px] font-[500] leading-[26px]'>{cardItem.heading}</h4>
                        <p className='text-[var(--paraColor)] text-[16px] font-bold leading-[24px]'>{cardItem.para}</p>
                        <div className='flex gap-4 cursor-pointer'><a href="#" className='text-[var(--linkColor)] flex items-center gap-2'>{cardItem.link}
                    <span className='rotate-[-30deg] font-normal text-[12px]'> {cardItem.link !== '' ? <FaArrowRight /> : ''}</span>
                            </a></div>
                    </div>
                    
                    )}
                </div>
            </div>
        </>
    )
}

export default LeftDesign