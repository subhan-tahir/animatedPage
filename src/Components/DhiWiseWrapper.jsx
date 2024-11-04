import React from 'react'
import LeftDesign from './LeftDesign'
import ScrollDesign from './ScrollDesign'
import { motion } from 'framer-motion';

const DhiWiseWrapper = () => {
    let tabItems = [
        { tabTitle: 'Figma Design Handoff', tabId: 'figma-design', leftDesignHeading: 'Import your App designs to DhiWise' },
        { tabTitle: 'Smart Editor', tabId: 'editor', leftDesignHeading: 'Turn Designs into Front-end code and customize them' },
        { tabTitle: 'Navigation and Permissions', tabId: 'permissions', leftDesignHeading: 'More than just “Design to Code”' },
        { tabTitle: 'Data Binding', tabId: 'data', leftDesignHeading: 'More than just “Design to Code”' },
        { tabTitle: 'Git Sync and Deployment', tabId: 'deployment', leftDesignHeading: 'More than just “Design to Code”' },
    ];
    return (
        <>

            {/*left design wrapper */}

            <div className='flex justify-center mx-auto my-[40px] flex-wrap items-start '>
                <div className='flex flex-col md:flex-1  p-10'>
                    {
                        tabItems.map((tab, i) => {
                            return (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        transition: {
                                        duration: 3,
                                            

                                        }
                                    }}


                                >
                                    <LeftDesign key={i} tabTitle={tab.tabTitle} leftDesignHeading={tab.leftDesignHeading} tabId={tab.tabId} />
                                </motion.div>
                            )
                        })
                    }

                </div>

                <div className='sticky top-[100px] flex flex-col flex-1 p-10 ' >
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                duration: 3,

                            }
                        }}
                        viewport={{ once: true }}
                    >
                        <ScrollDesign />

                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                duration: 3,

                            }
                        }}
                        viewport={{ once: true }}
                    >
                        <ScrollDesign />

                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                duration: 3,

                            }
                        }}
                        viewport={{ once: true }}
                    >
                        <ScrollDesign />

                    </motion.div>



                </div>

            </div>





            {/*right design wrapper */}
        </>
    )
}

export default DhiWiseWrapper