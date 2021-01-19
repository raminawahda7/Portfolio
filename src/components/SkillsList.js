import React from "react";

const SkillsList = (props) => {
  return (
    <div className="ui list">
      {props.skills.map((skill) => (
        <div className="item" key={skill} style={{display:"flex",justifyContent:"center"}}>
            {skill}
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
