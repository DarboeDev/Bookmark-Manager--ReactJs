import React, { useState } from 'react'
import tabData from '../tab-data'

const Features = () => {
    const[data, setData] = useState([tabData[0]])
    const [selectedIndex, setSelectedIndex] = useState('')

    function switchTab(index){
       setData([tabData[index]])
       setSelectedIndex(index)
    }

  return (
    <section className="features">
        <h1>Features</h1>
        <p>
        Our aim is to make it quick and easy for you to access
         your favourite websites. Your bookmarks sync between 
         your devices so you can access them on the go.
        </p>
        <div className="features-btns">
            <button className={selectedIndex == 0 ? 'tab-selected' : ''} onClick={()=> switchTab(0)}>Simple Bookmarking</button>
            <button className={selectedIndex == 1 ? 'tab-selected' : ''} onClick={()=> switchTab(1)}>Speedy Searching</button>
            <button className={selectedIndex == 2 ? 'tab-selected' : ''} onClick={()=> switchTab(2)}>Easy Sharing</button>
        </div>
        {
                data.map(tab =>(
                    <div className="tab" key={tab.index}>
                      <img src={tab.image} alt="" />
                      <div className="tab-desc">
                        <h1>{tab.title}</h1>
                        <p>{tab.text}</p>
                        <button className='btn-blue'>More Info</button>
                      </div>
                    </div>
                ))
            }
    </section>
  )
}

export default Features