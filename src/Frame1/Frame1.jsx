import "./Frame1.css";
import { useNavigate } from "react-router-dom";

export const Frame1 = ({ className, ...props }) => {
  const navigate = useNavigate();

  return (
    <div className={"frame-1 " + className}>
      {/* <div className="purple-1">
        <img className="_99-1" src="_99-10.png" />
        <img className="purple-12" src="purple-11.png" />
      </div> */}
      <div
        className="click-here-to-continue"
        onClick={() => navigate("/skills")}
      >
        CLICK HERE TO CONTINUE{" "}
      </div>
      {/* <div className="frame-3"></div> */}
      <img
        className="arrow-1"
        src="arrow-10.png"
        onClick={() => navigate("/skills")}
      />
    </div>
  );
};
