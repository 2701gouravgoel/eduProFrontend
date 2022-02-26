import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { GrGallery } from 'react-icons/gr';
import './AskDoubt.css';
function AskDoubt() {
    const [question, setQuestion] = useState("");
    
  
    
    return (
      <div>
      <div className="askQuestion">
              <input
               type="text"
               className="register__textBox"
               value={question}
               onChange={(e) => setQuestion(e.target.value)}
               placeholder="Post a Question"
                />
                <div style={{marginRight:20}}>
                    <GrGallery size={30} />
                    </div>
            </div>
            <div>
                
            </div>
            </div>
  )
}

export default AskDoubt