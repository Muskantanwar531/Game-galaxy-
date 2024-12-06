import styled from 'styled-components';
import { banner_image } from '../../utils/images';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../redux/store/authSlice';
import { Link } from 'react-router-dom';

const Banner = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return (
    <BannerWrapper className='d-flex align-items-center justify-content-start' style = {{
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32)), linear-gradient(248.75deg, rgba(0, 159, 157, 0.41) 0%, rgba(15, 10, 60, 0.41) 38.46%), url(${banner_image}) center/cover no-repeat`
    }}>
      <div className='banner-content w-100 container text-white'>
      {!isAuthenticated && (
        <div className='banner-badge text-uppercase'>
        <Link to="/login"  >Login / Signup </Link>
        </div>
         )}
        <h1 className='banner-title text-uppercase'>Dive into a World of Infinite Play</h1>
        <p className='lead-text'>
Welcome to Game Galaxy, the ultimate destination for gamers of all levels! Dive into a universe filled with endless excitement and adventure, where every click brings you closer to new challenges and experiences.</p>
       
      </div>
    </BannerWrapper>
  )
}

export default Banner;

const BannerWrapper = styled.div`
    min-height: 768px;

    .banner-badge{
      background-color: var(--clr-green-normal);
      padding: 4px 16px;
      font-weight: 600;
      font-size: 20px;
      letter-spacing: 0.1em;
      display: inline-block;
      margin-bottom: 25px;
    }

    .banner-title{
      font-family: var(--font-family-right);
      font-size: 25px;
      font-weight: 400;
      letter-spacing: 0.09em;
      line-height: 1.2;
      max-width: 600px;
      margin-bottom: 40px;
    }

    .lead-text{
      max-width: 600px;
    }
    .banner-btn{
      min-width: 140px;
      height: 45px;
      padding: 13px 16px;
      font-size: 16px;
      font-weight: 600;
      text-transform: uppercase;
      border: 2px solid var(--clr-green-normal);
      margin-top: 30px;

      .btn-icon{
        margin-right: 16px;
      }

      &:hover{
        background-color: var(--clr-green-normal);
        .btn-text{
          color: var(--clr-white);
        }
      }
    }

    @media screen and (min-width: 992px){
      .banner-badge{
        font-size: 2rem;
      }

      .banner-title{
        font-size: 5rem;
      }
      
    }
`;
