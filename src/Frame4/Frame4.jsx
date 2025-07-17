import "./Frame4.css";
import { useNavigate } from "react-router-dom";

export const Frame4 = ({ className, ...props }) => {  
  const navigate = useNavigate();
  return (
    <div className={"frame-4 " + className}>
      <img className="me-1" src="me-10.png" />
      <div className="i-m-a-creative-professional-with-skills-in-graphic-design-video-editing-and-motion-graphics-i-design-impactful-visuals-using-photoshop-and-illustrator-focusing-on-photo-manipulation-vector-posters-and-branding-i-edit-videos-in-premiere-pro-and-create-animated-titles-logo-reveals-and-effects-driven-motion-graphics-in-after-effects">
        I’m a creative professional with skills in graphic design, video
        editing, and motion graphics. <br />I design impactful visuals using
        Photoshop and Illustrator, focusing on photo manipulation, <br />
        vector posters, and branding. I edit videos in Premiere Pro and create
        animated titles,
        <br />
        logo reveals, and effects-driven motion graphics in After Effects{" "}
      </div>
      <img className="arrow-2" src="arrow-20.png" onClick={() => navigate("/skills")}/>
      <div className="my-skills" onClick={() => navigate("/skills")}>MY SKILLS </div>
    </div>
  );
};
