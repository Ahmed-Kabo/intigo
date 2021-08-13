import { motion } from "framer-motion";
import styled from "styled-components";
import { loadDetails } from "../actions/gamedDeatails";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Game = ({ img, name, released, id }) => {
  const dispatch = useDispatch();
  const showDetailHandler = () => {
    dispatch(loadDetails(id));
  };
  return (
    <GameSection onClick={showDetailHandler}>
      <Link to={`/game/${id}`}>
        <ImageContainer>
          <img src={img} alt={name} />
          <div className="img-overlay"></div>
        </ImageContainer>
        <h3>{name}</h3>
        <p>{released}</p>
      </Link>
    </GameSection>
  );
};

const GameSection = styled(motion.div)`
  min-height: 30vh;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgb(0 0 0 / 9%);
  text-align: center;
`;
const ImageContainer = styled(motion.div)`
  height: 35vh;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: cover;
  }
  .img-overlay {
    position: absolute;
    left: 0;
    bottom: 0%;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #fff0, #000000);
    z-index: 1;
  }
`;
export default Game;
