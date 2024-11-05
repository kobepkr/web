// Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  // Estados para controlar los dropdowns
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const [acercaDeOpen, setAcercaDeOpen] = useState(false);
  const [contactoOpen, setContactoOpen] = useState(false);
  const [comunidadOpen, setComunidadOpen] = useState(false);
  const [talleresOpen, setTalleresOpen] = useState(false);
  const [utilesOpen, setUtilesOpen] = useState(false);
  const [asistentesOpen, setAsistentesOpen] = useState(false);

  // Funciones para manejar la apertura y cierre de los dropdowns
  const handleServiciosMouseEnter = () => {
    setServiciosOpen(true);
  };

  const handleServiciosMouseLeave = () => {
    setServiciosOpen(false);
  };

  const handleAcercaDeMouseEnter = () => {
    setAcercaDeOpen(true);
  };

  const handleAcercaDeMouseLeave = () => {
    setAcercaDeOpen(false);
  };

  const handleContactoMouseEnter = () => {
    setContactoOpen(true);
  };

  const handleContactoMouseLeave = () => {
    setContactoOpen(false);
  };

  const handleComunidadMouseEnter = () => {
    setComunidadOpen(true);
  };

  const handleComunidadMouseLeave = () => {
    setComunidadOpen(false);
  };

  const handleTalleresMouseEnter = () => {
    setTalleresOpen(true);
  };

  const handleTalleresMouseLeave = () => {
    setTalleresOpen(false);
  };

  const handleUtilesMouseEnter = () => {
    setUtilesOpen(true);
  };

  const handleUtilesMouseLeave = () => {
    setUtilesOpen(false);
  };

  const handleAsistentesMouseEnter = () => {
    setAsistentesOpen(true);
  };

  const handleAsistentesMouseLeave = () => {
    setAsistentesOpen(false);
  };

  const styles = {
    navbar: {
      backgroundColor: '#0056b3',  // Color de fondo del navbar
      padding: '10px 20px',        // Espaciado superior e inferior
    },
    navList: {
      listStyleType: 'none',       // Quitar las viñetas de la lista
      margin: '0',
      padding: '0',
      display: 'flex',             // Alinear los elementos horizontalmente
      justifyContent: 'center',     // Centrar los elementos
      flexWrap: 'wrap',            // Permitir que los elementos se envuelvan en pantallas pequeñas
    },
    navItem: {
      margin: '0 15px',            // Espacio entre los elementos del navbar
      position: 'relative',         // Asegura que el dropdown se posicione correctamente
    },
    navLink: {
      color: 'white',              // Color del texto
      textDecoration: 'none',       // Quitar subrayado
      fontSize: '1.2em',
    },
    dropdown: {
      display: 'block',             // Mostrar siempre para evitar problema de "display: none"
      position: 'absolute',
      backgroundColor: '#f9f9f9',
      minWidth: '160px',
      boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
      zIndex: 1,
    },
    dropbtn: {
      backgroundColor: '#0056b3',
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1.2em',
    },
    dropdownItem: {
      color: 'black',
      padding: '12px 16px',
      textDecoration: 'none',
      display: 'block',
    },
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <a href="#home" style={styles.navLink}>Inicio</a>
        </li>
        <li 
          style={styles.navItem} 
          onMouseEnter={handleAcercaDeMouseEnter} 
          onMouseLeave={handleAcercaDeMouseLeave}
        >
          <button style={styles.dropbtn}>Acerca de</button>
          {acercaDeOpen && (
            <div style={styles.dropdown}>
              <a href="#historia" style={styles.dropdownItem}>Nuestra Historia</a>
              <a href="#mision" style={styles.dropdownItem}>Nuestra Misión</a>
              <a href="#vision" style={styles.dropdownItem}>Nuestra Visión</a>
            </div>
          )}
        </li>

        <li 
          style={styles.navItem} 
          onMouseEnter={handleServiciosMouseEnter} 
          onMouseLeave={handleServiciosMouseLeave}
        >
          <button style={styles.dropbtn}>Servicios</button>
          {serviciosOpen && (
            <div style={styles.dropdown}>
              <a href="#service1" style={styles.dropdownItem}>Servicio 1</a>
              <a href="#service2" style={styles.dropdownItem}>Servicio 2</a>
              <a href="#service3" style={styles.dropdownItem}>Servicio 3</a>
            </div>
          )}
        </li>

        <li 
          style={styles.navItem} 
          onMouseEnter={handleComunidadMouseEnter} 
          onMouseLeave={handleComunidadMouseLeave}
        >
          <button style={styles.dropbtn}>Comunidad</button>
          {comunidadOpen && (
            <div style={styles.dropdown}>
              <a href="#comunidad1" style={styles.dropdownItem}>Comunidad 1</a>
              <a href="#comunidad2" style={styles.dropdownItem}>Comunidad 2</a>
              <a href="#comunidad3" style={styles.dropdownItem}>Comunidad 3</a>
            </div>
          )}
        </li>

        <li 
          style={styles.navItem} 
          onMouseEnter={handleTalleresMouseEnter} 
          onMouseLeave={handleTalleresMouseLeave}
        >
          <button style={styles.dropbtn}>Talleres</button>
          {talleresOpen && (
            <div style={styles.dropdown}>
              <a href="#talleres1" style={styles.dropdownItem}>Talleres 1</a>
              <a href="#talleres2" style={styles.dropdownItem}>Talleres 2</a>
              <a href="#talleres3" style={styles.dropdownItem}>Talleres 3</a>
            </div>
          )}
        </li>

        <li 
          style={styles.navItem} 
          onMouseEnter={handleUtilesMouseEnter} 
          onMouseLeave={handleUtilesMouseLeave}
        >
          <button style={styles.dropbtn}>Útiles</button>
          {utilesOpen && (
            <div style={styles.dropdown}>
              <a href="#utiles1" style={styles.dropdownItem}>Útiles 1</a>
              <a href="#utiles2" style={styles.dropdownItem}>Útiles 2</a>
              <a href="#utiles3" style={styles.dropdownItem}>Útiles 3</a>
            </div>
          )}
        </li>

        <li 
          style={styles.navItem} 
          onMouseEnter={handleAsistentesMouseEnter} 
          onMouseLeave={handleAsistentesMouseLeave}
        >
          <button style={styles.dropbtn}>Asistentes</button>
          {asistentesOpen && (
            <div style={styles.dropdown}>
              <a href="#asistentes1" style={styles.dropdownItem}>Asistentes 1</a>
              <a href="#asistentes2" style={styles.dropdownItem}>Asistentes 2</a>
              <a href="#asistentes3" style={styles.dropdownItem}>Asistentes 3</a>
            </div>
          )}
        </li>

        <li 
          style={styles.navItem} 
          onMouseEnter={handleContactoMouseEnter} 
          onMouseLeave={handleContactoMouseLeave}
        >
          <button style={styles.dropbtn}>Contacto</button>
          {contactoOpen && (
            <div style={styles.dropdown}>
              <a href="#ubicacion" style={styles.dropdownItem}>Ubicación</a>
              <a href="#telefono" style={styles.dropdownItem}>Teléfono</a>
              <a href="#email" style={styles.dropdownItem}>Email</a>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
