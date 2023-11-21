// components/UserTable.js 
import { useUsers } from '../../hooks/useUsers';
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

function UserTable() {
  const lista = useUsers();
  const users = lista.users


  if (lista.length === 0) {
    return (
      <h1>Cargando...</h1>
    )
  } else {
    return (
      <>
        <div style={estilos.total}>
          <div>
            <Link to={`/newuser`} className='btn btn-info'>
              <Button label="+ usuario" style={estilos.boton}/>
            </Link>
            <h1 style={estilos.titulo}>USUARIOS</h1>
          </div>
          <div style={estilos.tabla}>
            <DataTable value={users}
              dataKey='id'
              className='datatable-responsive'
              scrollable scrollHeight="50px" style={{ minWidth: '50rem' }}>
              <Column field="id" header="Usuario ID"></Column>
              <Column field="username" sortable header="Username" rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }}></Column>
              <Column field="email" header="Email"></Column>
              <Column field="password" header="Password"></Column>
            </DataTable>
          </div>
        </div>

      </>
    )
  }
}

export default UserTable