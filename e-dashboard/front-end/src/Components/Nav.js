import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Nav=()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/register');
    }

    return(
        <div>
            <img className='logo' src='https://play-lh.googleusercontent.com/LhHDUTjXeuwyiGLB7R-yDzRVSleGZrahYil4slrij4myQlLoNV2-Mizjmc8TL2KkKg' alt='logo'></img>
        
          {auth?  <ul className='nav-ul'>
                <li><Link to ="/">Product</Link></li>
                <li><Link to ="/add"> Add Product</Link></li>
                <li><Link to ="/update"> Update Product</Link></li>
                <li><Link to ="/profile">profile</Link></li>
                <li> <Link onClick={logout}to ="/register">logout({JSON.parse(auth).name})</Link></li>

                </ul>
                :
                <ul className='nav-ul nav-right'>
                
                <li><Link to ="/register">Sign Up </Link></li>
                <li><Link to ="/login"> Login</Link></li>

                </ul>
                
            }    
        </div>
    )
}

export default Nav;