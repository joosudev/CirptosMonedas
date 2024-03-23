import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', textAlign: 'center', padding: '20px', fontFamily:'Arial'}}>
      <p>
        Joosudev - Este proyecto está bajo la Licencia MIT &copy; {currentYear}
      </p>
      <a href="https://github.com/joosudev/controlgastos.git" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/material-rounded/48/ffffff/github.png" alt="GitHub" style={{ width: '48px', height: '48px', marginTop: '10px' }} />
      </a>
    </footer>
  );
};

export default Footer;
