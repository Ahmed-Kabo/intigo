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
      <h2>new games </h2>
      <Games>
        {newGame.map((game) => (
          <Game
            name={game.name}
            key={game.id}
            id={game.id}
            released={game.released}
            img={game.background_image}
          />
        ))}
      </Games>
      <h2>popular games </h2>
      <Games>
        {popular.map((game) => (
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
  padding: 2rem 5rem;
  h2 {
    padding: 5rem 0;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 4rem;
`;
export default Home;
