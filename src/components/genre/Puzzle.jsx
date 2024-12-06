import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {farm, favoriate, logo, words, world, fairy_puzzle} from "../../utils/images";
const Puzzle= () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <GenreWrapper>
      <section>
        <h3 className="heading">Puzzle Games</h3>
        <Carousel responsive={responsive}>
          <div className='card'>
            <div className='card-top img-fit-cover'>
              <img src={farm} alt="image" />
            </div>
            <div className='card-bottom'>
              <h4 className='text-white text-uppercase card-title'>
                Farm Merge Valley
              </h4>
              <div className='block-wrap d-flex align-items-end justify-content-between'>

                <Link to="/farm" className='card-button text-uppercase'>Play </Link>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-top img-fit-cover'>
              <img src={favoriate} alt="image" />
            </div>
            <div className='card-bottom'>
              <h4 className='text-white text-uppercase card-title'>
                Favoriate Puzzles
              </h4>
              <div className='block-wrap d-flex align-items-end justify-content-between'>

                <Link to="/favoriate" className='card-button text-uppercase'>Play </Link>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-top img-fit-cover'>
              <img src={logo} alt="image" />
            </div>
            <div className='card-bottom'>
              <h4 className='text-white text-uppercase card-title'>
                Logo Quiz
              </h4>
              <div className='block-wrap d-flex align-items-end justify-content-between'>

                <Link to="/logo" className='card-button text-uppercase'>Play </Link>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-top img-fit-cover'>
              <img src={words} alt="image" />
            </div>
            <div className='card-bottom'>
              <h4 className='text-white text-uppercase card-title'>
                Words Of Wonder
              </h4>
              <div className='block-wrap d-flex align-items-end justify-content-between'>

                <Link to="/words" className='card-button text-uppercase'>Play </Link>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-top img-fit-cover'>
              <img src={world} alt="image" />
            </div>
            <div className='card-bottom'>
              <h4 className='text-white text-uppercase card-title'>
                World Geography
              </h4>
              <div className='block-wrap d-flex align-items-end justify-content-between'>

                <Link to="/world" className='card-button text-uppercase'>Play </Link>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-top img-fit-cover'>
              <img src={fairy_puzzle} alt="image" />
            </div>
            <div className='card-bottom'>
              <h4 className='text-white text-uppercase card-title'>
                Fairy Puzzle
              </h4>
              <div className='block-wrap d-flex align-items-end justify-content-between'>

                <Link to="/fairy" className='card-button text-uppercase'>Play </Link>
              </div>
            </div>
          </div>
         </Carousel>
      </section>
     </GenreWrapper>
  )
}

export default Puzzle;
const GenreWrapper = styled.div`
display: flex;
flex-direction: column;


.heading {
  color:#fff;
  background-color: ;
  width:140px;
  text-align:left;
  font-size:1.9rem;
  padding:5px;
  border:1px solid aqua;
  margin-bottom:15px;
   
   &:hover{
    background-color: var(--clr-green-normal);
   }

}
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
}

 
  .card{
    width:300px;
    display:flex;
    flex-direction:column;
    margin-bottom: 20px;
  }


  .card-top{
    height: 220px;
    overflow: hidden;
    position: relative;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.27) 92.08%);
    position: relative;
    border-radius: 30px 30px 0 0;
    &::after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    }

  
  }

  .card-bottom{
    flex: 1; 
    background-color: var(--clr-violet-light);
    padding: 20px 18px;
    border-radius:0 0 30px 30px;
    .card-title{
      font-size: 18px;
      font-weight: 800px;
      font-family: var(--font-family-poppins)!important;
      letter-spacing: 0.06em;
      margin-bottom: 10px;
    }

    .card-button{
      height: 30px;
      text-align: center;
      border: 1px solid var(--clr-green-normal);
      padding: 0px 16px;
      width: 70px;
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

  
`;