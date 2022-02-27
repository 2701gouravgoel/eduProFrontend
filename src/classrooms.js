import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdPersonAddDisabled } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { getClassList, getClassToJoinList } from './actions/productAction';
import './classroom.css';
import { useAuth } from './AuthUserContext';
const Products = () => {
  const dispatch=useDispatch();
  const {authUser, loading } = useAuth();
  let products= useSelector(state => state.products.list);
  let classToJoin= useSelector(state => state.products.classToJoin);
  const [getClass, setgetclass] = useState(false);
  
  useEffect(() => {
    if(authUser)
    {
      dispatch(getClassList(authUser.uid));
      dispatch(getClassToJoinList(authUser.uid));
    }
  }, [authUser])


    const addToClass = (i) =>{
      fetch(`https://edu--pro--pro.herokuapp.com/addToClass?classId=${i.id}&id=${authUser.uid}`)
      .then((res) => res.json())
      .then((json) => {
      });
    }
    const leaveClass = (i) =>{
      fetch(`https://edu--pro--pro.herokuapp.com/leaveClass?classId=${i.id}&id=${authUser.uid}`)
      .then((res) => res.json())
      .then((json) => {
      });
    }


    const elm = products.map((i, index) => {
      return  <div className="msg-center" key={index}>
             <Link to={`/classroom/${i._id}`} className='text-decoration-off'>
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
          </Link>
          <div onClick={()=>leaveClass(i)} className='unenrol'>
                  <MdPersonAddDisabled/>
              </div>
      </div>
    });
    const elm1 = classToJoin.map((i, index) => {
      return  <div className="msg-center" key={index}>
            <Link to={`/classroom/${i._id}`} className='text-decoration-off'> 
             <div className='name-text'>
                  {i.name}
              </div>
              <div className='subject-name-text'>
                  {i.subject}
              </div>
          <div className='faculty-text'>
                  {i.nameOfFaculty}
          </div>
          </Link>
          <div onClick={()=>addToClass(i)} className='enroll'>
                  <IoMdPersonAdd/>
              </div>
      </div>
    });
  return <div className='flex-container'>
    <div className='Title'><h3>My Classrooms</h3></div>
    <div className="containers">
      {elm}
    </div>
    <div className='Title'><h3>Other Courses</h3></div>
    <div className="containers">
      {elm1}
      </div>
  </div>;
  };

export default Products;
