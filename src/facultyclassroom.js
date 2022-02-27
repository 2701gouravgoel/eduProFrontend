import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiFileAddFill } from "react-icons/ri";
import { getFacultyClassList, getProdctList } from './actions/productAction';
import { AiFillPlusSquare } from "react-icons/ai";
import './classroom.css';
import { Button } from 'react-bootstrap';
import { useAuth } from './AuthUserContext';
const Products = () => {
  const dispatch=useDispatch();
  const {authUser, loading } = useAuth();
  let products= useSelector(state => state.products.list);
  const [isShowForm, setisShowForm] = useState(false);
  const [name, setname] = useState('');
  const [link, setlink] = useState('');
  const [subject, setsubject] = useState('');
  useEffect(() => {
    if(authUser)
    dispatch(getFacultyClassList(authUser.uid));
  }, [authUser])

    const elm = products.map((i, index) => {
      return  <Link to={`/classroom/${i._id}`} className='text-decoration-off'>
      <div className="msg-center" key={index}>
             <div className='name-text'>
                  {i.name}
          </div>
          <div className='subject-name-text'>
                  {i.subject}
              </div>
              <div className='student-text'>
                  {i.numberOfStudents}
          </div>
          <div className='faculty-text'>
                  {i.nameOfFaculty}
          </div>
      </div>
      </Link>
    });
  const createClass=()=>{
    if(link==='')
    {
      alert('please enter link of the class')
    }
    else if(subject==='')
    {
      alert('please enter subject of the class')
    }
    else if(name==='')
    {
      alert('please enter code of the class')
    }
    else
    {
    let option = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        facultyId:authUser.uid,
        link:link,
        name:name,
        subject:subject,
      }),
    };
    console.log(option.body);
    fetch(`https://edu--pro--pro.herokuapp.com/addClass`, option)
      .then((response) => response.json())
      .then(async(response) => 
      {
          if(response.statusCode===200)
          {
          }
      });
    }
    setisShowForm(false);
  }
  return <div className='flex-container'>
    <div className='Title'><h3>My Classrooms</h3></div>
    <div>
      {!isShowForm && 
      <Button onClick={() => { setisShowForm(true)}}><AiFillPlusSquare/>
        Add Course</Button>
      }
        {isShowForm ?    
        <div className="registers">
    <div className="register__container">
        
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="Course Code"
        />
        <input
          type="text"
          className="register__textBox"
          value={subject}
          onChange={(e) => setsubject(e.target.value)}
          placeholder="Course Subject"
        />
          <input
          type="text"
          className="register__textBox"
          value={link}
          onChange={(e) => setlink(e.target.value)}
          placeholder="Course Link"
        />
        <Button onClick={() => { setisShowForm(false)}}>
          Close</Button>
          <Button style={{marginTop:10}} onClick={createClass}>
          Submit</Button>
          
          </div>
          
        </div>  :
        <div className="containers">
          
        {elm}
      </div>
      }
    </div>
    
    
  </div>;
  };

export default Products;
