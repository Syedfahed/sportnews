import React from "react";

export default function Navebar(pro) {
  return (
    <div>
      <nav className={`navbar navbar-expand-Ig navbar-${pro.mode} bg-${pro.mode}`}>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">
              {pro.title}
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              data-bs-toggle="dropdown"
              href="/"
              role="button"
              aria-expanded="false"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              Business
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Entertainment</a>
          </li>
          <li className="nav-item">
          <a className="nav-link">General</a>
          </li>
          <li className="nav-item">
          <a className="nav-link">Science</a>
          </li>
          <li className="nav-item">
          <a className="nav-link">Health</a>
          </li>
          <li className="nav-item">
          <a className="nav-link">Sports</a>
          </li>
          <li className="nav-item">
          <a className="nav-link">Technology</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
