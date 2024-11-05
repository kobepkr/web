import React from 'react';
import logo from '../src/assets/logo.png'; // Asegúrate de que la ruta sea correcta
import 'font-awesome/css/font-awesome.min.css';

const MainPage = () => {
  return (
    <div>  <header style={styles.header}>
        <section style={styles.contactSection}>
          <p style={styles.contactItem}>
            <i className="fa fa-phone" aria-hidden="true" style={styles.icon}></i>
            Teléfono: (+56) 9-456-7890
          </p>
          <p style={styles.contactItem}>
            <i className="fa fa-envelope" aria-hidden="true" style={styles.icon}></i>
            Email: info@escuelagasparcabrales.cl
          </p>
          <p style={styles.contactItem}>
            <i className="fa fa-map-marker" aria-hidden="true" style={styles.icon}></i>
            Dirección: Almte.Simpson 152, Valparaíso.
            </p>
        </section>
      </header>

    <div style={styles.banner}>
  <img src={logo} alt="Logo del Colegio" style={styles.bannerImage} />
  <div style={styles.bannerTextContainer}>
    <h3 style={styles.subBannerText}>Escuela</h3>
    <h1 style={styles.bannerText}>Gaspar Cabrales</h1>
    <h3 style={styles.subBannerText}>Valparaíso.</h3>
  </div>


  



</div>



    

    </div>
  );
};

// Estilos en línea
const styles = {
  banner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px 20px',   // Reducir espacio superior e inferior a 10px
  },
  bannerImage: {
    height: '140px',
    marginRight: '20px',
  },
  bannerTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bannerText: {
    fontSize: '2em',
    margin: '0',
  },
  subBannerText: {
    fontSize: '1.2em',
    margin: '0',
  },
  
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    marginBottom: '-10px',
    marginTop: '-10px',
    
  },
  contactSection: {
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap', // Evita que los elementos se envuelvan
    overflow: 'hidden',
  },
  contactItem: {
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  main: {
    padding: '20px',
    backgroundColor: '#f4f4f4',
  },
  infoSection: {
    marginBottom: '40px',
  },
  footer: {
    marginTop: '20px',
    padding: '10px',
    textAlign: 'center',
    fontSize: '0.8em',
    color: '#777',
  },
  icon: {
    marginRight: '5px',
    color: '#007BFF',
  },
};

export default MainPage;
