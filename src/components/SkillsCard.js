import React from "react";
import SkillsList from "./SkillsList";
// import background from "./plus2.png";
// import 'semantic-ui-css/semantic.min.css'
const SkillsCard = (props) => {
  return (
    <div
      className="ui card" 
      style={{
        // backgroundImage: `url(${background})`,
        // background: "linear-gradient(337deg, rgba(2,0,36,1) 0%, rgba(206,217,201,0.5929892893587605) 7%, rgba(89,98,194,0.7980454691340414) 14%, rgba(220,167,129,1) 36%, rgba(193,223,39,1) 59%, rgba(73,219,157,1) 77%)",
        backgroundSize: "contain",
        backgroundColor:"#B2E782",
        backgroundRepeat: "no-repeat",
        backgroundPosition:"12px",
        boxShadow: " 0 20px 50px ",
        borderRadius: "24px",
      }}
    >
      <div className="content">
        <div
          className="center aligned header"
          style={{
            margin:"20px"
          }}
        >
          {props.skills.name}
        </div>
        <div classname="center aligned">
          <SkillsList skills={props.skills.skills} />
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
