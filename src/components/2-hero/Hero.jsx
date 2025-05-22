import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function Hero() {
  return (
    <motion.section
      className="hero flex"
      style={{justifyContent:"space-between"}}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="left"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="parentAvatar">
          <motion.img
            src="11zon_cropped.png"
            className="avatar"
            alt="avatar"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
          <VerifiedIcon sx={{ color: "rgb(93 , 188 , 252)", fontSize: 20 }} />
        </div>

        <motion.h2
          style={{ margin: "10px", display: "flex", alignItems: "center" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Marwan AlShehabi
        </motion.h2>

        <h1 className="title">
          Front-End Developer | React.js Enthusiast Building modern web apps
          with JavaScript, React, and Material UI.
        </h1>

        <p className="subTitle">
          I’m Marwan Al-Shehabi, a passionate self-taught front-end developer
          and automation AI specialist from Aleppo, Syria. I’m dedicated to
          creating seamless, user-friendly web experiences while continuously
          expanding my knowledge and skills in web development and automation
          technologies. Currently, I’m actively learning and growing to stay
          ahead in the fast-evolving tech landscape. I’m open to internship
          opportunities as well as remote or on-site roles in front-end
          development and automation.
        </p>

        <p>Skills:</p>

        <p className="subTitle">
          Tailwind CSS , JavaScript , React.js, React Router, Redux, Material
          UI, Basic understanding of Vue.js, Git & GitHub, Responsive Design,
          n8n.io Low-code automation workflows, Webhooks & API Integration, JSON
          Parsing and Mapping, Building customer service bots, Memory and
          session handling (via MemoryBufferWindow),
        </p>

        <motion.div
          className="allIcons flex"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[
            {
              icon: <GitHubIcon />,
              link: "https://github.com/MarwanALShehabi",
            },
            { icon: <InstagramIcon />, link: "https://www.instagram.com/" },
            {
              icon: <LinkedInIcon />,
              link: "https://www.linkedin.com/in/marwan-alshehabi-521942360/",
            },
            { icon: <FacebookIcon />, link: "https://www.facebook.com/" },
          ].map(({ icon, link }, i) => (
            <motion.a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              style={{ margin: "0 5px" }}
            >
              {React.cloneElement(icon, {
                sx: { color: "var(--subtite)", fontSize: "1.2rem" },
              })}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="right "
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <motion.img
  src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXhkMWRwM3dnaXk4N2EydzJ4MXNxazFhbGRhbW51bHJnYXp3eXh1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif"
  alt="programming gif"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  whileHover={{ scale: 1.05 }}
  style={{
    width: "240px ",
    maxWidth: "500px",
    borderRadius: "30px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
    marginBottom:"200px"
  }}
/>

      </motion.div>
    </motion.section>
  );
}
