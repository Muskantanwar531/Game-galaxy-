import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { selectSidebarStatus, setSidebarOff, setSidebarOn } from '../../redux/store/sidebarSlice';
import { star } from '../../utils/images';
import { selectIsAuthenticated } from '../../redux/store/authSlice';
const Navbar = () => {
  const dispatch = useDispatch();
  const sidebarStatus = useSelector(selectSidebarStatus);
  const isAuthenticated = useSelector(selectIsAuthenticated);

 

  return (
    <NavbarWrapper className="d-flex align-items-center">
      <div className='container w-100'>
        <div className='navbar-content'>
          <img src={star} className='logo'/>
          <div className='brand-and -toggler d-flex align-items-center justify-content-between'>
            <Link to = "/" className="navbar-brand text-white text-uppercase no-wrap">Game <span>galaxy</span></Link>
            <button type='button' className='navbar-show-btn text-white' onClick={() => dispatch(setSidebarOn())}>
              <HiOutlineMenuAlt3 size = { 25 } />
            </button>
          </div>

          <div className={`navbar-collapse ${sidebarStatus ? "show" : " "}`}>
            <button type="button" className='navbar-hide-btn' onClick={() => dispatch(setSidebarOff())}>
              <MdClose size = { 25 } />
            </button>

            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to = "/" className='nav-link'>home</Link>
              </li>
              <li className='nav-item'>
                <Link to = "/games" className='nav-link'>games</Link>
              </li>
              <li className='nav-item'>
                <Link to = "/genre" className='nav-link'>Genre</Link>
              </li>
              <li className='nav-item'>
                <Link to = "/about" className='nav-link'>About Us</Link>
              </li>
             
            </ul>

            <ul className='connect-list d-flex justify-content-center align-items-center mt-5 flex-wrap'>
              <li className='nav-item text-uppercase fw-7 w-100 connect-text mb-2'>
              {!isAuthenticated && (
                 <Link to="/login" className='nav-link text-white card-button text-uppercase' >
                   Login / Signup
                     </Link>
                          )}
                     </li>
                        </ul>
          </div>
        </div>
      </div>
     
      
    </NavbarWrapper>
  )
}

export default Navbar;



const NavbarWrapper = styled.div`
  min-height: 78px;
  background: #090624;

  .navbar-brand{
    font-weight: 700;
    font-size: 32px;

    span{
      color: var(--clr-green-normal);
    }
  }
  .logo{
    width:80px;
    height:50px;
     &:hover{
      transform: scaleY(1.5);
     }
  }
  .

  .nav-item{
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .nav-link{
    text-transform: uppercase;
    font-weight: 500;
    color:#fff;
    letter-spacing: 2px;
    transition: var(--transition-default);

    &:hover{
      color: var(--clr-pink-normal);
    }
  }

  .connect-text{
    letter-spacing: 2px;
  }

  .connect-item{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2px;
    margin-left: 2px;
  }
  
  .connect-link{
    padding: 6px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition-default);

    &:hover{
      color: var(--clr-violet-normal);
    }
  }

  .navbar-collapse{
    position: fixed;
    right: 0;
    top: 0;
    width: 280px;
    height: 100%;
  
    background-color: #1e244d;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 60px 20px 16px;
    text-align: center;
    transform: translateX(100%);
    transition: var(--transition-default);
    z-index: 999;

    // after the show sidebar is triggered
    &.show{
      transform: translateX(0);
    }
  }

  .navbar-hide-btn{
    position: absolute;
    top: 20px;
    right: 20px;
    transition: var(--transition-default);
    &:hover{
      transform: scale(1.2);
    }
  }

  .navbar-show-btn{
    transition: var(--transition-default);
    &:hover{
      transform: scale(1.2);
    }
  }

  @media screen and (min-width: 992px){
    .navbar-show-btn{
      display: none;
    }
    .navbar-collapse{
      transform: translateX(0);
      position: relative;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      background-color: transparent;
      box-shadow: none;
    }
    .navbar-content{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .nav-item{
      margin-left: 6px;
    }
    .navbar-nav{
      display: flex;
    }
    .navbar-hide-btn{
      display: none;
    }
    .nav-link{
      color: var(--clr-white);
      padding: 1px 10px;
    }
    .connect-list{
      display: flex;
      margin-top: 0;
      color: var(--clr-white);
      margin-left: 40px;
      .connect-text{
        width: auto;
        margin-bottom: 0;
        margin-right: 22px;
        display: none;
      }
      .connect-link{
        color: var(--clr-white);
      }
    }
  }

  @media screen and (min-width: 1200px){
    .nav-link{
      padding-right: 16px;
      padding-left: 16px;
    }
    .connect-list{
      margin-left: 88px;

      .connect-text{
        display: inline-block;
      }
    }
  }
`;

