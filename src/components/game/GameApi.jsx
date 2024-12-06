import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
//import './App.css';
const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
    params: {
      tag: '3d.mmorpg.fantasy.pvp',
      platform: 'pc'
    },
    headers: {
      'X-RapidAPI-Key': '24ef2fa9c1mshb36a2df542b4f0ap11d70ejsn9812d5f10eee',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

export const GameApi = () => {
    const [gameApi, setGameApi] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request(options);
                setGameApi(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();

        // Clean-up function (if needed)
        return () => {
            // Perform any clean-up here, if necessary
        };
    }, []);

    return (
        <Gamewrapper>           
     <div className="homepage-container">
        {gameApi ? (
                
                <div className="game-list">
                {gameApi.map((game, index) => (
                    <div key={index} className='card-container'>
                        <div className='card'>
                        <div lassName='card-top img-fit-cover'>
                        <img src={game.thumbnail} alt={game.title} />
                        </div>
                        <div className='card-bottom'>
                        <h4 className='text-white text-uppercase card-title'>{game.title}</h4>
                        <div className='block-wrap d-flex align-items-end justify-content-between'>
                        <div className='details-group'>
                        <div className='details-item d-flex align-items-center'>
                        <p className='details-item-name fw-6'>Release Date:</p>
                        <p className='details-item-value'>{game.release_date}</p>
                        </div>
                        <div className='details-item d-flex align-items-center'>
              <p className='details-item-name fw-6'>Developer:</p>
              <p className='details-item-value'>{game.developer}</p>
            </div>
                        </div>
                        </div>
                       <a href={game.game_url}  className='card-button text-uppercase'>Play Now</a>
                        {/* Add more information you want to display */}
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div>Loading...</div>
        )}
  
      </div>
    </Gamewrapper>
    );
};

export default GameApi;
const Gamewrapper=styled.div`
.homepage-container {
    display: flex;
    flex-direction: column;
   
  }
  .game-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  

  .card-container {
    width:300px;
   display:flex;
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
      max-width: 140px;
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