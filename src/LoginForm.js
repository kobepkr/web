import React, { useState } from 'react';
import logo from '../src/assests/logo.png'; // Asegúrate de que la ruta sea correcta

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://tu-api.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Error en la autenticación');
      }

      const data = await response.json();
      console.log('Usuario autenticado:', data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Bienvenido a Gaspar Cabrales</h1>
        {/* Si deseas mostrar un logo, descomenta la siguiente línea */}
        <img src={logo} alt="Logo" style={styles.logo} /> 
      </header>
      <main style={styles.main}>
  <h2 style={styles.title}>Iniciar Sesión</h2>
  {error && <p style={styles.error}>{error}</p>}
  <form onSubmit={handleSubmit} style={styles.form}>
    <div style={styles.formGroup}>
      <label style={styles.label}>
        Usuario:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={styles.input}
        />
      </label>
    </div>
    <div style={styles.formGroup}>
      <label style={styles.label}>
        Contraseña:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
      </label>
    </div>
    <button type="submit" disabled={loading} style={styles.button}>
      {loading ? 'Cargando...' : 'Iniciar Sesión'}
    </button>
  </form>
</main>
      <footer style={styles.footer}>
        <p>© 2024 Mi Aplicación. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',
  },
  header: {
    marginBottom: '20px',
  },
  main: {
    width: '300px', // Ajusta según sea necesario
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    marginTop: '20px',
    fontSize: '0.8em',
    color: '#777',
  },
  logo: {
    width: '150px', // Ajusta el tamaño según necesites
    height: 'auto',
    marginBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box', // Para incluir el padding en el ancho total
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default LoginForm;
