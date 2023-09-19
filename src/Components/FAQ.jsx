import React, {useState} from 'react'
import { FAQData } from '../FaQ-data'
import { data } from 'autoprefixer'

const FAQ = () => {
const[showFaqIndex, setShowFaqIndex] = useState(null)

function handleFaq(id){
  if(id === showFaqIndex){
    setShowFaqIndex(null)
  }else{
  setShowFaqIndex(id)
}
}
  return (
    <section className="faq-section">
        <h1 >Frequently Asked Questions</h1>
        <p className='faq-text'>Here are some of our FAQs. If you have any other questions you’d like 
  answered please feel free to email us.</p>
  <div className="faq-questions">
   {
    FAQData.map((faq, index) =>(
<div className='faq'>
        <div className="question" key={faq.id}>
        <h3>{faq.question}</h3>
          <img onClick={()=> handleFaq(faq.id)} src=".\src\assets\icon-arrow.svg" alt="" />
               </div>
               <p className={showFaqIndex == faq.id ? 'faq-show' :'faq-hide'}>
                {faq.answer}
               </p>
    </div>
    ))
   }

  </div>
  <button className='btn-blue'>More Info</button>
    </section>
  )
}

export default FAQ