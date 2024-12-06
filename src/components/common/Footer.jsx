import { AiOutlineSend } from 'react-icons/ai';
import styled from 'styled-components';

const Footer = () => {
 
  return (
    <FooterWrapper>
      <div className='footer-top'>
        <div className='footer-content text-white d-flex container'>
          <div className='footer-item'>
            <a href="#" className='navbar-brand text-white text-uppercase no-wrap d-block'>
              game <span>galaxy</span>
            </a>
            <p className='para-text'>Welcome to Game Galaxy,Whether you're a seasoned player or just starting your gaming journey, Game Galaxy offers a diverse selection of online games across various genres.</p>
          </div>

          <div className='footer-item'>
            <h5 className='footer-item-title text-uppercase'>quick links</h5>
            <ul className='footer-item-links'>
              <li><a href="#" className='text-white'>Home</a></li>
              <li><a href="/games" className='text-white'>Games</a></li>
              <li><a href="/genre" className='text-white'>Genre</a></li>
              <li><a href="/about" className='text-white'>About us</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <div className='container d-flex flex-column text-center'>
          <p className='footer-bottom-text text-green'>Copyright &copy; 2024 Game-Galaxy - All rights reserved.</p>
          </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer;

const FooterWrapper = styled.footer`
  bottom:0;
  .footer-top{
    background-color: var(--clr-violet-darker);
    padding: 28px 0px;
     display: flex;

    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }
  .footer-bottom{
    background:#08052b;
  }

  .footer-content{
    row-gap: 24px;
  }

  .navbar-brand{
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 18px;
    align-item:left;
    text-align:left;
    margin-right:500px;
    }
    

    span{
      color: var(--clr-green-normal);
    }
  }

  .footer-item{
    text-align: center;
        

    .para-text{
      max-width: 480px;
      margin-right: auto;
      margin-left: auto;
      align-item:left;
      text-align:left;
      margin-right:500px;
    }
  }

  .footer-item-links{
    display: flex;
    
   
    li{
      margin: 5px 20px;
      
      a{
        color: rgba(255, 255, 255, 0.9);

        &:hover{
          color: var(--clr-white);
          text-decoration: underline;
        }
      }
    }
  }

  .footer-item-title{
    margin-bottom: 12px;
    font-size: 20px;
    letter-spacing: 0.03em;
    font-weight: 700;
  }

 
    .input-group{
      height: 48px;
      max-width: 284px;
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      transition: var(--transition-default);

      :has(.input-group-field:focus){
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }

      &-field{
        background: #0C0A24;
        padding-left: 22px;
        padding-right: 22px;
        color: var(--clr-white);
        flex: 1;

        &::placeholder{
          color: var(--clr-white);
          opacity: 0.8;
        }
      }

      &-btn{
        color: #0C0A24;
        width: 48px;

        &:hover{
          transform: scale(1.1);
        }
      }
    }
  }

  .footer-bottom{
    background-color: blue;
     padding: 20px 0;

    &-text{
      font-weight: 500;
   
   }

  
  }

  @media screen and (min-width: 768px){
    .footer-content{
      grid-template-columns: repeat(2, 1fr);
      column-gap: 32px;

      .footer-item{
        align-item: center;

        .para-text{
          margin-left: 0;
        }
      }

      .input-group{
        margin-left: 0;
      }
    }

    .footer-bottom{
      & > .container{
        flex-direction: var(--clr-white);
        justify-content: space-between;
      }

      li{
        margin-left: 32px;
      }
      &-links{
          margin-top: 0;
        }
    }
  }

  @media screen and (min-width: 992px){
    flex-direction: row;
    text-align: center;
   
   
    .para-text{
      text-align:left;
    }
    
    .footer-bottom-links{
      justify-content: center;
    }
  }

  @media screen and (min-width: 1200px){
    .footer-content{
      grid-template-columns: 3fr 2fr 2fr 3fr;
    }
  }
`;
