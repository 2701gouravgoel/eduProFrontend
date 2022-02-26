import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiFileAddFill } from "react-icons/ri";
import { getProdctList } from './actions/productAction';
import { AiFillPlusSquare } from "react-icons/ai";
import './classroom.css';
import { Button } from 'react-bootstrap';
const Products = () => {
  const dispatch=useDispatch();
  let products= useSelector(state => state.products.list);
  const [getClass, setgetclass] = useState(false);
  const [isShowForm, setisShowForm] = useState(false);
  useEffect(() => {
    setgetclass(true);
  }, [])
  if(getClass)
  dispatch(getProdctList());

    const elm = products.map((i, index) => {
      return  <Link to={`/classroom/${i._id}`} className='text-decoration-off'>
      <div className="msg-center" key={index}>
             <div className='name-text'>
                  {i.name}
              </div>
              <div className='student-text'>
                  {i.numberOfStudents}
          </div>
          <div className='faculty-text'>
                  {i.nameOfFaculty}
          </div>
          <div className='add-file'>
          <RiFileAddFill size={20}/>
          </div>
          
      </div>
      </Link>
    });
  return <div className='flex-container'>
    <div className='Title'><h3>My Classrooms</h3></div>
    <div>
      <Button onClick={() => { setisShowForm(true)}}><AiFillPlusSquare/>
        Add Course</Button>
        {isShowForm ?    
        <div className="registers">
    <div className="register__container">
        
        <input
          type="text"
          className="register__textBox"
          placeholder="Course"
        />
        <input
          type="text"
          className="register__textBox"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          placeholder="Category Name"
        />
          <input
          type="text"
          className="register__textBox"
          // value={InstituteCode}
          // onChange={(e) => setInstituteCode(e.target.value)}
          placeholder="Category ID number"
        />
          <input
          type="text"
          className="register__textBox"
          // value={schoolName}
          // onChange={(e) => setschoolName(e.target.value)}
          placeholder="description"
          /><Button onClick={() => { setisShowForm(false)}}>
          Close</Button>
          
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
