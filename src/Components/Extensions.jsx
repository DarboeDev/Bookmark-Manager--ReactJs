import React from 'react'

const Extensions = () => {
  return (
    <section className="extension-section">
        <div className="extension-text">
            <h1>Download the extension</h1>
            <p>  We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
        </div>
        <div className="extension">
        <div className="chrome-extension">
            <img src=".\src\assets\logo-chrome.svg" alt="chrome" />
            <h2>Add to Chrome</h2>
            <p>Minimum version 62</p>
            <button className='btn-blue'>Add & install Extension</button>
        </div>
        <div className="firefox-extension">
            <img src=".\src\assets\logo-firefox.svg" alt="firefox" />
            <h2>Add to Firefox</h2>
            <p>Minimum version 62</p>
            <button className='btn-blue'>Add & install Extension</button>
        </div>
        <div className="opera-extension">
            <img src=".\src\assets\logo-opera.svg" alt="opera" />
            <h2>Add to Opera</h2>
            <p>Minimum version 62</p>
            <button className='btn-blue'>Add & install Extension</button>
        </div>
        </div>
    </section>
  )
}

export default Extensions