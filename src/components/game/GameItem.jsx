import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Tictactoe, cat_bakery, ramp_car, fire_stone, volcano, ninja_hands, haunted_school, fairy_puzzle } from '../../utils/images';

import PropTypes from 'prop-types';


const GameItem = () => {
 
  return (
    <GameItemWrapper >
   <div className='card'>
      <div className='card-top img-fit-cover'>
        <img src ={Tictactoe} alt="image" />
       </div>
      <div className='card-bottom'>
        <h4 className='text-white text-uppercase card-title'>
         TicTacToe
        </h4>
        <div className='block-wrap d-flex align-items-end justify-content-between'>
          <div className='details-group'>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>Rating: </p>
              <p className='details-item-value'>7.9 </p>
            </div>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>(104,234 votes)</p>
              <p className='details-item-value'></p>
            </div>
          </div>
           
          <Link to ="/tictactoe" className='card-button text-uppercase'>Play Now</Link>
            
        </div>
    
      </div>
   </div>
    <div className='card'>
      <div className='card-top img-fit-cover'>
        <img src ={cat_bakery} alt="image" />
       
       
      </div>
      <div className='card-bottom'>
        <h4 className='text-white text-uppercase card-title'>
        Cat Bakery
        </h4>
        <div className='block-wrap d-flex align-items-end justify-content-between'>
          <div className='details-group'>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>Rating : </p>
              <p className='details-item-value'> 8.9</p>
            </div>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>(1,436,932 votes)</p>
              <p className='details-item-value'></p>
            </div>
            
          </div>
          <Link to ="/catbakery" className='card-button text-uppercase'>Play Now</Link>
        </div>
      </div>
    </div>
    <div className='card'>
      <div className='card-top img-fit-cover'>
        <img src ={ramp_car} alt="image" />
       </div>
      <div className='card-bottom'>
        <h4 className='text-white text-uppercase card-title'>
         Ramp Car Jumping
        </h4>
        <div className='block-wrap d-flex align-items-end justify-content-between'>
          <div className='details-group'>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>Rating: </p>
              <p className='details-item-value'> 8.9</p>
            </div>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>(29,896 votes)</p>
              <p className='details-item-value'></p>
            </div>
            
          </div>
          <Link to ="/rampcar" className='card-button text-uppercase'>Play Now</Link>
        </div>
      </div>
   </div>
   <div className='card'>
      <div className='card-top img-fit-cover'>
        <img src ={fire_stone} alt="image" />
       </div>
      <div className='card-bottom'>
        <h4 className='text-white text-uppercase card-title'>
        Firestone Idle
        </h4>
        <div className='block-wrap d-flex align-items-end justify-content-between'>
          <div className='details-group'>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>Rating: </p>
              <p className='details-item-value'> 8.7</p>
            </div>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>(2,967 votes)</p>
              <p className='details-item-value'></p>
            </div>
            
          </div>
          <Link to ="/firestone" className='card-button text-uppercase'>Play Now</Link>
        </div>
      </div>
   </div>
   <div className='card'>
      <div className='card-top img-fit-cover'>
        <img src ={volcano} alt="image" />
       </div>
      <div className='card-bottom'>
        <h4 className='text-white text-uppercase card-title'>
        Volcano Island
        </h4>
        <div className='block-wrap d-flex align-items-end justify-content-between'>
          <div className='details-group'>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>Rating: </p>
              <p className='details-item-value'>9.1 </p>
            </div>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>(5,722 votes)</p>
              <p className='details-item-value'></p>
            </div>
            
          </div>
          <Link to ="/volcano" className='card-button text-uppercase'>Play Now</Link>
        </div>
      </div>
   </div>
   <div className='card'>
      <div className='card-top img-fit-cover'>
        <img src ={ninja_hands} alt="image" />
       </div>
      <div className='card-bottom'>
        <h4 className='text-white text-uppercase card-title'>
        Ninja Hands
        </h4>
        <div className='block-wrap d-flex align-items-end justify-content-between'>
          <div className='details-group'>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>Rating: </p>
              <p className='details-item-value'>9.2</p>
            </div>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>(144,385 votes) </p>
              <p className='details-item-value'></p>
            </div>
            
          </div>
          <Link to ="/ninja" className='card-button text-uppercase'>Play Now</Link>
        </div>
      </div>
   </div><div className='card'>
      <div className='card-top img-fit-cover'>
        <img src ={fairy_puzzle} alt="image" />
       </div>
      <div className='card-bottom'>
        <h4 className='text-white text-uppercase card-title'>
        Fairy Puzzle
        </h4>
        <div className='block-wrap d-flex align-items-end justify-content-between'>
          <div className='details-group'>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>Rating: </p>
              <p className='details-item-value'>8.5</p>
            </div>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>(5875 votes) </p>
              <p className='details-item-value'></p>
            </div>
            
          </div>
          <Link to ="/fairy" className='card-button text-uppercase'>Play Now</Link>
        </div>
      </div>
   </div>
   <div className='card'>
      <div className='card-top img-fit-cover'>
        <img src ={haunted_school} alt="image" />
       </div>
      <div className='card-bottom'>
        <h4 className='text-white text-uppercase card-title'>
        Haunted School
        </h4>
        <div className='block-wrap d-flex align-items-end justify-content-between'>
          <div className='details-group'>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>Rating: </p>
              <p className='details-item-value'>
8.3</p>
            </div>
            <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>(144,385 votes) </p>
              <p className='details-item-value'></p>
            </div>
            
          </div>
          <Link to ="/haunted" className='card-button text-uppercase'>Play Now</Link>
        </div>
      </div>
   </div>
    </GameItemWrapper>
  )
}

export default GameItem;

GameItem.propTypes = {
  gameItem: PropTypes.object
}

const GameItemWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 10px;

 
  .card{
    width:300px;
    display:flex;
    flex-direction:column;
    margin-bottom: 20px;
  }


  .card-top{
    height: 250px;
    overflow: hidden;
    position: relative;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.27) 92.08%);
    position: relative;

    &::after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    }

    .ratings-count{
      position: absolute;
      left: 18px;
      bottom: 10px;
      font-weight: 700;
      font-size: 14px;
      padding: 0px 12px;
      border-radius: 16px;
      background-color: var(--clr-white);
      z-index: 1;
    }
  }

  .card-bottom{
    flex: 1; 
    background-color: var(--clr-violet-light);
    padding: 20px 18px;

    .card-title{
      font-size: 18px;
      font-weight: 800px;
      font-family: var(--font-family-poppins)!important;
      letter-spacing: 0.06em;
      margin-bottom: 10px;
    }

    .card-button{
      height: 34px;
      text-align: center;
      border: 1px solid var(--clr-green-normal);
      padding: 0px 16px;
      min-width: 108px;
      color: var(--clr-white);
      font-weight: 600;
      letter-spacing: 0.03em;
      display: flex;
      align-items: center;
      transition: var(--transition-default);

      &:hover{
        background-color: var(--clr-green-normal);
      }
    }
  }

  .details-group{
    padding-top: 12px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }

`;
