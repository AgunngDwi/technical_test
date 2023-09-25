import React from "react";

const BottomNav = () => {
  return (
    <div className="bottom">
      <div className="credit">
        <p>
          created by :{" "}
          <a
            href="https://www.linkedin.com/in/agung-dwi-laksono/"
            target="_blank"
            rel="noopener noreferrer"
          >
            agunngdwi
          </a>
        </p>
        <a
          href="https://www.linkedin.com/in/agung-dwi-laksono/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i style={{ fontSize: "20px" }} className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/AgunngDwi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i style={{ fontSize: "20px" }} className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/agunngdwi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            style={{ fontSize: "20px" }}
            className="fa-brands fa-instagram"
          ></i>
        </a>
      </div>
    </div>
  );
};

export default BottomNav;
