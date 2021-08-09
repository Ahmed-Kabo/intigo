import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadGames } from "../actions/loadGames";
import Game from "../components/Game";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // const Games = useSelector((state) => state.games);
  const { popular, newGame, upGame } = useSelector((state) => state.games);
  return (
    <GamesList>
      <h2>up caming games </h2>
      <Games>
        {upGame.map((game) => (
          <Game
            name={game.name}
            key={game.id}
            id={game.id}
            released={game.released}
            img={game.background_image}
          />
        ))}
      </Games>
    </GamesList>
  );
};

const GamesList = styled(motion.section)`
  padding: 2rem 4rem;
  margin: auto;
  overflow: hidden;
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`;
export default Home;
