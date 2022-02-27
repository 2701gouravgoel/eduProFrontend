import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiFileAddFill } from "react-icons/ri";
import { getFacultyClassList, getProdctList } from './actions/productAction';
import { AiFillPlusSquare } from "react-icons/ai";
import './classroom.css';
import { Button } from 'react-bootstrap';
import { useAuth } from './AuthUserContext';
const Addnotes = () => {
  const dispatch=useDispatch();
  const {authUser, loading } = useAuth();
  let products= useSelector(state => state.products.list);
  const [isShowForm, setisShowForm] = useState(false);
  const [heading, setheading] = useState('');
  const [content, setcontent] = useState('');
  
  const [notes, setNotes] = useState([]);

  const addNotes = () => {
    let option = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        notes: content,
          title: heading,
          id:authUser.uid
      }),
    };
    console.log(option.body);
    fetch(`https://edu--pro--pro.herokuapp.com/addNote`, option)
    .then((response) => response.json())
    .then(async(response) => 
    {
        if(response.statusCode===200)
        {
            // var uid = (new Date().getTime()).toString(36)
            // let date = new Date();
            var uid = (new Date().getTime()).toString(36)
            setNotes([...notes,{
                title:heading,
                notes: content,
                _id:uid
            }]);
          setisShowForm(false)
        }
    });
  }
  useEffect(() => {
    if(authUser)
fetch(`https://edu--pro--pro.herokuapp.com/getNotes?id=${authUser.uid}`)
  .then((res) => res.json())
    .then((json) => {
        console.log(json)
      setNotes(json.notes)
  });
}, [authUser])

    const elm = notes.map((i, index) => {
      return  <Link to={`/classroom/${i._id}`} className='text-decoration-off'>
      <div className="msg-center" key={index}>
             <div className='name-text'>
                  {i.title}
              </div>
              <div className='student-text'>
                  {i.notes}
          </div>
          
      </div>
      </Link>
    });
   
  return <div className='flex-container'>
    <div className='Title'><h3>My Notes</h3></div>
    <div>
      {!isShowForm && 
      <Button onClick={() => { setisShowForm(true)}}><AiFillPlusSquare/>
        Add Notes</Button>
      }
        {isShowForm ?    
       <div style={{display:'flex',flexDirection:'column'}}>
       <input
        type="text"
        className="register__textBox"
        value={heading}
        onChange={(e) => setheading(e.target.value)}
        placeholder="Heading"
      />
     
      <textarea 
      style={{height: 200,display:'flex'}}
        type="text"
  
        className="register__textBox"
        value={content}
        onChange={(e) => setcontent(e.target.value)}
        placeholder="Enter key notes here"
      />
      
      <Button onClick={()=>{setisShowForm(false)}} >
        Cancel
        </Button>
        <Button onClick={addNotes} style={{marginTop:20}}>
        Save</Button>
   </div>  :
        <div className="containerss">
          
        {elm}
      </div>
      }
    </div>
    
    
  </div>;
  };

export default Addnotes;
