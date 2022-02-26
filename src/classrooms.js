import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdPersonAddDisabled } from "react-icons/md";
import { getProdctList } from './actions/productAction';
import './classroom.css';
const Products = () => {
  const dispatch=useDispatch();
  let products= useSelector(state => state.products.list);
  const [getClass, setgetclass] = useState(false);
  
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
          <div className='unenrol'>
                  <MdPersonAddDisabled/>
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
      {elm}
      </div>
  </div>;
  };

export default Products;
