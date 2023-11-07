// components/UserTable.js 
import { usePosts } from '../../hooks/usePosts';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';


const estilos = {
  total: {
    margin: "10px",
    padding: "15px",
    fontFamily: "monospace",
    fontSize: "17px",

    color: "white",
    backgroundColor: "#304878",
    height: "600px",
  },
  tabla: {
    textAlign: "center",
    marginLeft: "5%",
    marginTop: "5px"
  },
  titulo: {
    textAlign: "center",
    marginTop: "-3%"
  },
  boton: {
    backgroundColor: "#7890a8",
    border: "none",
    color: "white"
  }
}

function PostTable() {

  const lista = usePosts();
  console.log(lista);
  const posts = lista.posts

  if (lista.length === 0) {
    return (
      <h1>Cargando Posteos</h1>
    )
  } else {
    return (
      <>
        <div style={estilos.total}>

          <div>
            <Link to={`/newpost`} className='btn btn-info'>
              <Button label="+ publicacion"  style={estilos.boton} />
            </Link>
            <h1 style={estilos.titulo}>PUBLICACIONES</h1>
          </div>
          <div style={estilos.tabla}>
            <DataTable value={posts}
              dataKey='id'
              className='datatable-responsive'
              scrollable scrollHeight="50px">
              <Column field="userId" sortable header="Usuario" rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }}></Column>
              <Column field="descripcion" header="Descripcion" ></Column>
              <Column field="fecha" sortable header="Fecha"></Column>
              <Column field="ubicacion" sortable header="Ubicacion"></Column>
              <Column field="imagen" header="Imagen"></Column>
              <Column field="userId" header="Usuario asociado"></Column>
            </DataTable>
          </div>
          </div>
      </>
    )
  }

}

export default PostTable