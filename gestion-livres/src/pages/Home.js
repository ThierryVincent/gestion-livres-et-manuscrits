import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div style={{
            fontFamiy: 'sans-serif',
            textAlign: 'center',
            background: '#f4f4f4',
            padding: '50px',
            minHeight: '100vh'
        }}>
            <div style={{
                background: 'white',
                display: 'inline-block',
                padding: '2rem',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
            }}>
                <h1> 📘 Bienvenue </h1>
                <br/>
                <p> Applicaiton de gestion des livres et manuscrits </p>
                <Link to="/livres" style={{
                    display: 'inline-block',
                    marginTop: '20px',
                    padding: '10px 20px',
                    background: '#007bff',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontWeight: 'bold'
                }}
                onMouseEnter={(e) => e.target.style.background = '#0056b3'}
                onMouseLeave={(e) => e.target.style.background = '#007bff'}
                >
                    👉 Accéder à l'application
                </Link>
            </div>
        </div>
    );
}

export default Home;