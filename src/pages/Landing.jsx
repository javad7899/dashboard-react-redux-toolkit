import { Logo } from "../components";
import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Traking</span>App
          </h1>
          <p>
            Ennui knausgaard four dollar toast pour-over schlitz seitan.
            Portland snackwave adaptogen, retro hella subway tile sriracha
            intelligentsia plaid normcore. Vibecession DIY ramps
          </p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
