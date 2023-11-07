//Vistas Usuarios
import UsersTableView from "./pages/users/UsersTableView";
import UsersEnterView from "./pages/users/UsersEnterView";

//Vistas Posteos
import PostsTableView from "./pages/posts/PostsTableView";
import PostsEnterView from "./pages/posts/PostsEnterView";

//react
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

//PrimeReact

//estilos primereact
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Splitter, SplitterPanel } from "primereact/splitter";

const estilos = {
  centrar: {
    margin: "10px",
    padding: "15px",
    fontFamily: "monospace",
    fontSize: "20px",
    textAlign: "center",
    color: "black",
    backgroundColor: "#304878",
  },
  tabla: {
    display: "flex",
    backgroundColor: "#7890a8",
    marginTop: "10px",
    padding: "20px",
    height: "100px",
  },
};

function App() {
  return (
    <>
      <div style={estilos.centrar}>
        <Splitter style={estilos.tabla}>
          <SplitterPanel>
            <a href="/users">Usuarios</a>
            <br />
            <a href="/posts">Publicaciones</a>
            <br />
          </SplitterPanel>
          <SplitterPanel>
            <a href="/newuser">Crear Usuario</a>
            <br />
            <a href="/newpost">Crear Publicacion</a>

            <br />
          </SplitterPanel>
        </Splitter>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/newpost" Component={PostsEnterView}></Route>
          <Route path="/posts" Component={PostsTableView}></Route>
          <Route path="/newuser" Component={UsersEnterView}></Route>
          <Route path="/users" Component={UsersTableView}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
