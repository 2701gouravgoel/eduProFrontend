import React from 'react'
import { FcTodoList } from 'react-icons/fc';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './todo.css';
function Footer() {

    const navigate = useNavigate();
    const todo = () => {
        navigate('/todo')
    }
  return (
      <div><Button className='footer-button' onClick={todo}><FcTodoList size={35}/></Button>
      </div>
  )
}

export default Footer