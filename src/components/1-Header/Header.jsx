import React, { useState } from "react";
import "./header.css";
import ListIcon from '@mui/icons-material/List';
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import CloseIcon from "@mui/icons-material/Close";
export default function Header() {
  const [showModle,setShowModele]=useState(false)
  return (
    <header className="flex  ">
      <button onClick={()=>{
        setShowModele(true)
      }} className="menu"> <ListIcon/> </button>
      <div />
      <nav
        style={{
          background: "var(--bgHeader)",
          padding: "0.77rem 1.6rem",
          borderRadius: "55px",
          boxShadow: "1px 1px 40px #2323242a",
        }}
      >




        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button></button>

      {showModle && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button onClick={()=>{
                setShowModele(false )
              }}>
                <CloseIcon/>
              </button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Users</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
