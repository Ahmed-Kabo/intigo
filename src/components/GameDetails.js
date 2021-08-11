import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";

const GameDetail = () => {
  const { game, screen } = useSelector((state) => state.detail);

  return (
    <CardShadow>
      <CardDetails>
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating : {game.rating}</p>
          </div>
          <div className="info">
            <h3>platforms</h3>
            <div className="platforms">
              {game.platforms.map((data) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </div>
          </div>
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

  &::-webkit-scrollbar-thumb {
    background-color: #bc89ff;
    border-radius: 3rem;
  }
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
`;
const CardDetails = styled(motion.div)`
  width: 80%;
  padding: 5rem 15rem;
  margin: 5rem auto;
  border-radius: 2rem;
  background-color: #fff;
  img {
    width: 100%;
  }
`;

export default GameDetail;
