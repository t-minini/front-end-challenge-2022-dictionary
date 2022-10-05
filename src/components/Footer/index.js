import "./Footer.css";

export function Footer() {
  return (
    <div className="footer-bottom">
      <div className="footer">
        {/* <h1>Front-end Challenge 2022 - Dictionary</h1>  */}
        <h4>
          <em>
            this is a challenge by{" "}
            <a href="https://coodesh.com/" target="_blank" rel="noreferrer">
              Coodesh
            </a>
          </em>
        </h4>
        <p>
          © Copyright 2022{" "}
          <a
            href="https://www.linkedin.com/in/tulio-minini/"
            target="_blank"
            rel="noreferrer"
          >
            Tulio Minini
          </a>
        </p>
      </div>
    </div>
  );
}
