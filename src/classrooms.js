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
          <div className='unenrol'>
                  <MdPersonAddDisabled/>
              </div>
      </div>
      </Link>
    });
    const elm1 = classToJoin.map((i, index) => {
      return  <Link to={`/classroom/${i._id}`} className='text-decoration-off'>
      <div className="msg-center" key={index}>
             <div className='name-text'>
                  {i.name}
              </div>
              
          <div className='faculty-text'>
                  {i.nameOfFaculty}
          </div>
          <div className='enroll'>
                  <IoMdPersonAdd/>
              </div>
      </div>
      </Link>
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
