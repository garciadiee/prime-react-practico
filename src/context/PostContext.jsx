import { createContext, useState } from 'react';

const PostContext = createContext();

export default function PostContextProvider({children}) {


  const estilos = {
    centrar: {
      margin: "10px",
      padding: "15px",
      fontFamily: "-apple-system",
      fontSize: "20px",
      textAlign: "center",
      color: "black",
      backgroundColor: "#888BE3"
  
    },
    formulario:{
      margin: "50px",
      padding: "15px",
    },
    boton:{
      margin:"20px",
    },
    inputs:{
      margin:"10px"
    }
  }

  const [posts, setPosts] = useState([]);
  
  return (
    <PostContext.Provider value={{posts, setPosts}} style={estilos.centrar}>
      {children} 
    </PostContext.Provider>
  )

}

export { PostContext }