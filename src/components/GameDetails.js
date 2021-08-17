import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const GameDetail = () => {
  const history = useHistory();
  const exitDetailHandelar = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  //datat
  const { game, screen, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandelar}>
          <CardDetails>
            <div className="stats">
              <Stats>
                <div className="rating">
                  <h3>{game.name}</h3>
                  <p>Rating : {game.rating}</p>
                </div>
                <Info>
                  <h3>platforms</h3>
                  <div className="platforms">
                    {game.platforms.map((data) => (
                      <h4 key={data.platform.id}>{data.platform.name}</h4>
                    ))}
                  </div>
                </Info>
              </Stats>
              <div className="media">
                <img src={game.background_image} alt={game.background_image} />
              </div>
              <div className="description">
                <p>{game.description_raw}</p>
              </div>
              <div className="gallery">
                {screen.results.map((screen) => (
                  <img src={screen.image} alt={screen.image} />
                ))}
              </div>
            </div>
          </CardDetails>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background: rgba(0, 0, 0, 0.5);

  p {
    margin: 1.5rem 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bc89ff;
    border-radius: 3rem;
  }
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: #4d4d4d;
  }
`;
const CardDetails = styled(motion.div)`
  width: 80%;
  padding: 5rem 5rem;
  margin: 5rem auto;
  border-radius: 2rem;
  background-color: #fff;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
  h3 {
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  .platforms {
    display: flex;
    margin-bottom: 1.5rem;

    h4 {
      margin-inline: 0.6rem;
      font-weight: lighter;
    }
  }
`;
export default GameDetail;
