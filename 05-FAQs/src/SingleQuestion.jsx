import React, { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const SingleQuestion = ({id, title, info, toggledQuestion, toggledQuesID}) => {
  const isActive = id === toggledQuesID
  return (
    <div>
          <div className="question">
            <header>
      <h5>{title}</h5>
      <button type="button" className='question-btn' onClick={()=> toggledQuestion(id)}>{isActive? <AiOutlineMinus/> :<AiOutlinePlus/>
      }
      </button>
      </header>
      {isActive && <p>{info}</p>}
    </div>
    </div>
  )
};

export default SingleQuestion
