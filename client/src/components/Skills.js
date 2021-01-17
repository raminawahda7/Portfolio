import React from "react";
import SkillsCard from "./SkillsCard";
// import 'semantic-ui-css/semantic.min.css'
const Skills = () => {
  const frontend = {
    name: "Frontend Stack",
    skills: [
      <i class="fab fa-js-square fa-5x"></i>,
      <i
        class="fab fa-react fa-4x"
        style={{
          color: "#00FFFF",
          textShadow: "2px 3px 6px lime",
          
        }}
      ></i>,
      <i
        class="fab fa-html5 fa-4x"
        style={{
          color: "#A52A2A",
          textShadow: "5px 5px 10px red",
          
        }}
      ></i>,
      <i
        class="fab fa-css3-alt fa-4x"
        style={{ textShadow: "4px 4px 3px #ADD8E6", }}
      ></i>,
      <i
        class="fab fa-bootstrap fa-4x"
        style={{
          color: "#3333cc",
          textShadow: "2px 3px 6px lime",
          
        }}
      ></i>,
      <i>
        <img
          src="https://miro.medium.com/max/256/0*JRLdrkNKvkizl6Nv.png"
          width="60"
          height="60"
        />
      </i>,
    ],
  };
  const backend = {
    name: "Backend Stack",
    skills: [
      // <i class="fab fa-python fa-3x"></i>,
      <i>
        <img
          src="https://i.pinimg.com/originals/4c/b7/5b/4cb75bba270525ab419c4ad4d27e6ebe.png"
          width="70"
          height="70"
        />
      </i>,
      <i>
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/django-11-1175036.png"
          width="70"
          height="70"
        />
      </i>,
      // // <i class="fas fa-2x" style={{ fontFamily: "Montserrat,sans-serif" }}>Django</i>,
      // <i class="fab fa-node fa-3x" style={{ color:"lightgreen"}}></i>,
      <i>
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/nodejs-2-226035.png"
          width="70"
          height="70"
        />
      </i>,
      <i
      style={{
        color: "#00FFFF",
        textShadow: "2px 3px 6px lime",
        
      }}>
        <img
          src="https://lh3.googleusercontent.com/proxy/7wP8nRrvFBbVo8URiyp5kqRMcI4neqMnukYgmsT8gMrjubacWUcc5RviqCjsjq73yoO5haNYI5yuEU60hBMBA2cquxwChws4W0eHYona220TPgjHo8dwqLaDZ6c6"
          width="70"
          height="70"
        />
      </i>,
      <i>
        <img
          src="https://developer.asustor.com/uploadIcons/0020_96009_1552971845_postgresql-icon.png"
          width="70"
          height="70"
        />
      </i>,
      // <i class="fas fa-database fa-2x">
      //   <span style={{ fontFamily: "Montserrat,sans-serif" }}>PostgreSQL</span>
      // </i>,
    ],
  };
  const Certificates = {
    name: "Certificates",
    skills: [
      <i>
        <img
          src="https://www.ubt-uni.net/wp-content/uploads/2019/02/IT-ESSENTIALS.jpg"
          width="100"
          height="100"
        />
      </i>,
      <i>
        <img
          src="https://www.whitewinterwolf.com/posts/2017/08/21/ccna-routing-switching-certification-review/cisco_ccna_rs.png"
          width="100"
          height="100"
        />
      </i>,
    ],
  };
  return (
    <>
      {/* <h1 className="ui center aligned basic segment" >Skills</h1> */}
      <div
        className="ui center raised cards"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <SkillsCard skills={frontend} />
        <SkillsCard skills={backend} />
        <SkillsCard skills={Certificates} />
      </div>
    </>
  );
};

export default Skills;
