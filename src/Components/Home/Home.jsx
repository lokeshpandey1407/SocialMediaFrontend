import { Button } from "@mui/base";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="titleText">
          <h2>TXTPULSE</h2>
          <h3>Revolutions</h3>
        </div>
        <div className="titleImage">
          <img
            src="src\assets\Humaaans-standing-22.svg"
            alt="side-facing-character"
          />
        </div>
      </div>
      <Button className="btn">Click here</Button>
    </div>
  );
};
export default Home;
