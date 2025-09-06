import React from "react";
import "./main.css";
import LinkIcon from "@mui/icons-material/Link";
import { GitHub } from "@mui/icons-material";

const myProjects = [
  {
    projectTitle: "Weather App",
    category: "React",
    imgPath: "photo_2025-05-22_13-26-12.jpg",
    liveLink: "https://marwanalshehabi.github.io/Weather-App/",
    githubLink: "https://github.com/MarwanALShehabi/Weather-App",
  },
  {
    projectTitle: "HR-System",
    category: "Next.js",
    imgPath: "image.png",
    liveLink: "https://hr-system-mocha-tau.vercel.app/login",
    githubLink: "",
  },
  {
    projectTitle: "Form-Builder",
    category: "Next.js",
    imgPath: "photo_2025-09-06_11-41-09.jpg",
    liveLink: "https://form-builder-ivory.vercel.app/",
    githubLink: "https://github.com/MarwanALShehabi/Form-Builder",
  },
  {
    projectTitle: "Online Store",
    category: "React",
    imgPath: "photo_2025-05-22_13-40-32.jpg",
    liveLink: "https://marwanalshehabi.github.io/Online_Store-frontend/",
    githubLink: "https://github.com/MarwanALShehabi/Online_Store-frontend",
  },
  {
    projectTitle: "Todo-List",
    category: "JavaScript",
    imgPath: "photo_2025-05-22_14-02-45.jpg",
    liveLink: "https://marwanalshehabi.github.io/todo-list/",
    githubLink: "https://github.com/MarwanALShehabi/todo-list",
  },
];

export default function Main() {
  return (
    <main className="flex main-container">
      <section className="flex left">
        <button className="active"></button>
      </section>

      <section className="right flex project-grid">
        {myProjects.map((item) => (
          <a
            href={item.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            key={item.imgPath}
            className="card"
          >
            <img
              className="project-img"
              src={item.imgPath}
              alt={item.projectTitle}
            />
            <div className="box">
              <h1 className="title">{item.projectTitle}</h1>
              <p className="subTitle">{item.category}</p>

              <div className="flex icons">
                <LinkIcon className="project-link" />
                {item.githubLink && (
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub className="project-link" />
                  </a>
                )}
              </div>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}
