import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



const estilos = {
        titulo: {
                margin: "10px",
                marginBottom:"-20px",
                padding: "15px",
                fontFamily: "monospace",
                fontSize: "40px",
                textAlign: "center",
                color: "white",
                backgroundColor: "#304878"
        },
}

ReactDOM.createRoot(document.getElementById('root')).render(
        <>
                <h1 style={estilos.titulo}>MisPosT</h1>

                <App />
        </>
)