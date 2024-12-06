import styled from "styled-components";
import {
  Banner,
  ImageSlider,
  
  Title,
} from "../../components/common/index";

import {GenreItem} from "../../components/genre/index";
import { GameItem } from "../../components/game/index";
import { Link } from "react-router-dom";
import { join_image} from "../../utils/images";

const HomePage = () => {
 

  return (
    <HomeWrapper>
    <>
        <Banner />
        {/* Rest of the home page content */}
        <section className="section sc-popular">
          <div className="container">
            <Title
              titleName={{ firstText: "top popular", secondText: "games" }}
            />
            <GameItem />
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/games" className="section-btn">
              see more games
            </Link>
          </div>
        </section>
        <ImageSlider />
        <section
          className="section sc-join sc-genres d-flex"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${join_image}) center/cover no-repeat`,
          }}
        >
          <div className="container">
            <Title
              titleName={{
                firstText: "top",
                secondText: "genres",
              }}
            />
            <GenreItem />
            <div className="d-flex justify-content-center">
              <Link to="/genre" className="section-btn">
                see more genres
              </Link>
            </div>
          </div>
        </section>
      </>
    
  </HomeWrapper>
);
};
export default HomePage;

const HomeWrapper = styled.div`
  .sc-popular {
    background-color: var(--clr-violet-dark-active);
    .section-btn {
      margin-top: 60px;
    }
  }

  .sc-join {
    min-height: 640px;
  }

  .sc-genres {
    background-color: var(--clr-violet-dark-active);
  }

  .sc-stores {
    min-height: 841px;
  }
`;
