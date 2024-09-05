import "./css/login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="mainclass">
        <div className="chairs">
          <div className="chair_div">
            <img src="../chairs.png" className="chair_img" alt="chairs" />
          </div>
          <div className="retrodinetech">
            RestroDineTech
            <span className="order_at_ease">ORDER AT EASE</span>
          </div>
        </div>
        <div className="login_section">
          <div className="welcome_to">
            <p>Welcome to </p>
            <span className="tech">RestroDineTech</span>
          </div>
          <div className="companies">
            <div className="cursr box2">
              {" "}
              <img src="../ggl.png" alt="password" className="icon"/>
              <input
                type="text"
                className="enter"
                placeholder="       Login with Google"
              />
            </div>
            <div className="cursr box2">
            <img src="../fcb.png" alt="password" className="icon"/>
              <input
                type="text"
                className="enter"
                placeholder="       Login with Facebook"
              />
            </div>
          </div>
          <div className="OR">
            {" "}
            <img className="line" src="../line.png" alt="line" />
            <span className="or">OR</span>{" "}
            <img className="line" src="../line.png" alt="line" />
          </div>
          <div className="login_btn_box">
            <div className="box cursr">
              <div>
                <img src="../email.png" alt="email" className="icon"/>
              </div>
              <div>
                <input
                  type="text"
                  className="enter entr"
                  placeholder="          Enter your Email"
                />
              </div>
            </div>
            <div className="box cursr">
              <img src="../password.png" alt="password" className="icon"/>
              <input
                type="text"
                className="enter"
                placeholder="       Enter your Password"
              />
            </div>
            <Link to="/dashboard">
              <div className="bn">
                <img src="../Login.png" className="lng_btn cursr" alt="login" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
