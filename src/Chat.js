import React,{useState,useEffect} from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { useAuth } from './AuthUserContext';
import './chat.css';
function Chat(props) {
    
    const [groupMessage, setgroupMessage] = useState([]);
    const { classId } = useParams();
    const [message, setmessage] = useState('');
    const { authUser, loading } = useAuth();
    const handleChange = (text) => {
        setmessage(text)
    }
    useEffect(() => {
        console.log(`https://edu--pro--pro.herokuapp.com/getMessage?classId=${classId}`)
    fetch(`https://edu--pro--pro.herokuapp.com/getMessage?classId=${classId}`)
      .then((res) => res.json())
        .then((json) => {
            console.log(json)
          setgroupMessage(json.chats)
      });
    }, [])
    const handleSubmit = (event) => {
        event.preventDefault()
        setmessage('')
        let option = {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messageBy:authUser.uid,
                message: message,
                classId:classId
            }),
          };
          console.log(option.body);
        fetch(`https://edu--pro--pro.herokuapp.com/addMessage`, option)
        .then((response) => response.json())
        .then(async(response) => 
        {
            if(response.statusCode===200)
            {
                setgroupMessage([...groupMessage,{
                    messageBy:authUser.uid,
                    message: message,
                    date:new Date()
                }]);
            }
        });
    }


  return (
    <div className="chatWindow">
        <ul className="chat" id="chatList">
          {groupMessage.map(data => (
            <div key={data.id}>
              {this.state.user.uid === data.sender.uid ? (
                <li className="self">
                  <div className="msg">
                    <p>{data.sender.uid}</p>
                    <div className="message"> {data.data.text}</div>
                  </div>
                </li>
              ) : (
                <li className="other">
                  <div className="msg">
                    <p>{data.sender.uid}</p>
                   <div className="message"> {data.data.text} </div>
                  </div>
                </li>
              )}
            </div>
          ))}
        </ul>
        <div className="chatInputWrapper">
          <form onSubmit={ handleSubmit}>
            <input
              className="textarea input"
              type="text"
              placeholder="Enter your message..."
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
  )
}

export default Chat