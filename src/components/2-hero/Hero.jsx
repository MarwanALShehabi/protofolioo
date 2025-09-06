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
      style={{ justifyContent: "space-between", padding: "50px 80px" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Left Content */}
      <motion.div
        className="left"
        style={{ maxWidth: "600px" }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div
          className="parentAvatar"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <motion.img
            src="11zon_cropped.png"
            className="avatar"
            alt="avatar"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          />
          <VerifiedIcon sx={{ color: "#5dbcfc", fontSize: 24 }} />
        </div>

        <motion.h2
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            color: "#fff",
            marginBottom: "15px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Marwan AlShehabi
        </motion.h2>

        <h1
          className="title"
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.6",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "20px",
          }}
        >
          Front-End Developer | React.js & Next.js Enthusiast Building modern
          web apps with React, Next.JS and Tailwind CSS.
        </h1>

        <p
          className="subTitle"
          style={{
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.7)",
            marginBottom: "20px",
          }}
        >
          I’m Marwan Al-Shehabi, a passionate self-taught front-end developer
          and automation AI specialist from Aleppo, Syria. Creating seamless,
          user-friendly web experiences while expanding my skills in web
          development and automation.
        </p>

        <p style={{ fontWeight: "600", marginBottom: "5px" }}>Skills:</p>

        <p
          className="subTitle"
          style={{
            fontSize: "0.9rem",
            color: "rgba(255,255,255,0.7)",
            lineHeight: "1.5",
            marginBottom: "25px",
          }}
        >
          Tailwind CSS, JavaScript, React.js, Next.js, React Router, Redux,
          React Hook Form, Material UI, Basic Vue.js, Git & GitHub, Responsive
          Design, n8n.io, Webhooks & API Integration, JSON Parsing & Mapping,
          Customer Service Bots, Memory & Session Handling.
        </p>

        {/* Social Icons */}
        <motion.div
          className="allIcons flex"
          style={{ gap: "15px" }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
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
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
              }}
              whileHover={{ scale: 1.2, background: "rgba(93,188,252,0.2)" }}
            >
              {React.cloneElement(icon, {
                sx: { color: "#5dbcfc", fontSize: "1.4rem" },
              })}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXhkMWRwM3dnaXk4N2EydzJ4MXNxazFhbGRhbW51bHJnYXp3eXh1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif"
          alt="programming gif"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          style={{
            width: "280px",
            maxWidth: "500px",
            borderRadius: "30px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
          }}
        />
      </motion.div>
    </motion.section>
  );
}
