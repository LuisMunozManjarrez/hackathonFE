import React from 'react'
import NewsCard from '../components/NewsCard'
import SideBar from '../components/Sidebar/SideBar'


function createData(title,url,description) {
    return { title,url,description};
  }
  
  const rows = [
    createData('Powell discusses the effect of changing financial', 
    'https://image.cnbcfm.com/api/v1/image/107159213-16698350051669835002-26886781887-1080pnbcnews.jpg?v=1669835254',
    'Federal Reserve Chair Jerome Powell delivers remarks at the the Brookings Institute on the elements of core inflation, setting monetary policy with consideration to lag times and the indicators of ...'),
    createData('Nexus Select Trust REIT IPO Receives 57%',
    'https://image.cnbcfm.com/api/v1/image/107205630-1678341960422-gettyimages-1239345111-AFP_326J3AY.jpeg?v=1683782484&w=630&h=354&ffmt=webp&vtcrop=y',
    'The Initial Public Offering (IPO) of Nexus Select Trust, the first REIT backed by rent yielding retail real estate assets, was subscribed...'),
    createData('Tech investors question UK as an IPO destination','https://image.cnbcfm.com/api/v1/image/107233160-1682831474793-gettyimages-584020526-JAPAN_SOFTBANK.jpeg?v=1683528030&w=630&h=354&ffmt=webp&vtcrop=y', 'They say the institutional investors that dominate the market lack a good understanding of tech, while Brexit, too, has clouded the outlook for tech listings.'),
  ];

const WatchList = () => {
  return (
    <div className='flex flex-wrap justify-between overflow max-h-[100vh]'> 
            <div className="w-1/12">
                <SideBar></SideBar>
            </div>
            <div className="w-11/12 p-10 flex flex-wrap gap-5 bg-slate-300">
            <NewsCard title={rows[0].title} description={rows[0].description} url={rows[0].url}></NewsCard>
            <NewsCard title={rows[1].title} description={rows[1].description} url={rows[1].url}></NewsCard>
            <NewsCard title={rows[2].title} description={rows[2].description} url={rows[2].url}></NewsCard>
            </div>
        </div>
  )
}

export default WatchList