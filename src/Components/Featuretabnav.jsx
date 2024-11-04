import React, { useState } from 'react'
const Featuretabnav = () => {
  const [activeTab, setActiveTab] = useState('Figma Design Handoff')
  let tabItems = [
    { tabItem: 'Figma Design Handoff', tabId: 'figma-design' },
    { tabItem: 'Smart Editor', tabId: 'editor' },
    { tabItem: 'Navigation and Permissions', tabId: 'permissions' },
    { tabItem: 'Data Binding', tabId: 'data' },
    { tabItem: 'Git Sync and Deployment', tabId: 'deployment' },
  ];
  // let activeTabHandler = () => {
  //   setActiveTab(activeTab);
  // }
  return (
    <>
      <div className='bg-[#121212] p-2 lg:w-max  rounded-[27px] relative z-[100]  flex flex-wrap justify-center  items-center  mx-auto my-[60px] shadow-md shadow-white'>
        {tabItems.map((tabItem, tabIndex) =>
          <div key={tabIndex} onClick={() => setActiveTab(tabItem.tabItem)} className={`${activeTab === tabItem.tabItem ? 'bg-[#0061ff]' : ''}  py-[10px] px-[16px] rounded-[27px]`}><a href={`#${tabItem.tabId}`} key={tabIndex}  className='font-bold'>{tabItem.tabItem}</a></div>
        )}
      </div>
    </>
  )
}

export default Featuretabnav


