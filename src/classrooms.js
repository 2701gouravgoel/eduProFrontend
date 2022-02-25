import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getProdctList } from './actions/productAction';
import AddIcon from "@material-ui/icons/ShoppingCart";
import './products.css';
const Products = () => {
  const dispatch=useDispatch();
  let products= useSelector(state => state.products.list);
  
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProdctList());
  }, [])
  console.log(products);
  const goToclassRoom=(id)=>{
    navigate(`/classroom/${id}`)
  }
    const elm = products.map((i, index) => {
      return  <Link to={`/classroom/${i._id}`} className='text-decoration-off'>
      <div className="msg-center" key={index}>
              {/* {i.imageUrl ? <img className='img' alt='img' src={i.imageUrl} style={{height:200}} /> : null} */}
              <div className='name-text'>
                  {i.name}
              </div>
              <div className='price-text'>
                  {i.numberOfStudents}
              </div>
      </div>
      </Link>
    });
    return <div className='flex-container'>{elm}</div>;
  };

export default Products;
