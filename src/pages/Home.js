import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/loadGames";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div className="Home">
      <h1>hello </h1>
    </div>
  );
};
export default Home;
