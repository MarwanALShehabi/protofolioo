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
    projectTitle: "Online Store",
    category: "React",
    imgPath: "photo_2025-05-22_13-40-32.jpg",
    liveLink: "https://marwanalshehabi.github.io/Online_Store-frontend/",
    githubLink: "https://github.com/MarwanALShehabi/Online_Store-frontend",
  },
  {
    projectTitle: "Protofolio",
    category: "React",
    imgPath: "photo_2025-05-22_15-33-52.jpg",
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
  {
    projectTitle: "Memory Game",
    category: "JavaScript",
    imgPath: "photo_2025-05-22_13-46-24.jpg",
    liveLink: "https://marwanalshehabi.github.io/memory-game/",
    githubLink: "https://github.com/MarwanALShehabi/memory-game",
  },
  {
    projectTitle: "HangmAn Game",
    category: "JavaScript",
    imgPath: "photo_2025-05-22_13-51-41.jpg",
    liveLink: "https://marwanalshehabi.github.io/hangman-game/",
    githubLink: "https://github.com/MarwanALShehabi/hangman-game",
  },
  
];

export default function Main() {
  return (
    <main className="flex">
      <section className="flex left">
        <button className="active">All Projects</button>
      </section>

      <section className="right flex">
        {myProjects.map((item) => ( 
          <a
            href={item.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            key={item.imgPath}
            className="card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img width={266} src={item.imgPath} alt={item.projectTitle} />

            <div style={{ width: "266px" }} className="box">
              <h1 className="title">{item.projectTitle}</h1>
              <p className="subTitle">{item.category}</p>

              <div className="flex icons">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <LinkIcon
                    sx={{
                      cursor: "pointer",
                      margin: "8px",
                      transition: "color 0.3s",
                      "&:hover": {
                        color: "rgb(93, 188, 252)",
                      },
                    }}
                  />
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub
                      sx={{
                        cursor: "pointer",
                        margin: "8px",
                        transition: "color 0.3s",
                        "&:hover": {
                          color: "rgb(93, 188, 252)",
                        },
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}
