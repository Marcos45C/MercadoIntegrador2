import { useLocation } from "react-router-dom"; // para navegar y que te traiga el componente 
import { useEffect, useState } from "react";
import { api } from "../peticiones";

interface Categoria {
  id: number;
  title: string;
  description: string;
  picture?: string | null; // si viene o no 
}


export const ApiPrueba = () => {
    const location = useLocation();
    const { idTokens } = location.state; // esto se usa para navegar a este componente y te traiga el token

  const [id, setId] = useState("");
  const [categorias, setCategorias] = useState<Categoria[]>([]); // para recorrer el array y traer las cateorias 

  const GETS = async () => {
    try {
      const response = await fetch(`${api}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${idTokens }`, // token o user
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }
      
      const data = await response.json();
      setCategorias(data); // guardo el estado
      console.log("GET data:", data);
      console.log(id);
      
    } catch (error) {
      console.error("Error al obtener categorías:", error);
    }
  };

    const POST = async () => {
    try {
      const response = await fetch(`${api}`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${idTokens }`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: "Mayonesaa la anonoima",
          description: "Mayonbesa la anonima "
        })
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      const data = await response.json();
      console.log("PUT data:", data);
      GETS();// pa actualizar
    } catch (error) {
      console.error("Error al agregar un producto:", error);
    }
  };


  const PUTT = async () => {
    try {
      const response = await fetch(`${api}38`, {
        method: "PUT",
        headers: {
          "Authorization": "Bearer marko",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: "Mayonesaa la anonoima",
          description: "Mayonbesa la anonima "
          
        })
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      const data = await response.json();
      console.log("PUT data:", data);
    } catch (error) {
      console.error("Error al modificar un producto:", error);
    }
  };

    const Delet = async () => {
      console.log(id);
    try {
      const response = await fetch(`${api}${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer marko", // token o user
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }
      GETS();// pa actualizar
      const data = await response.json();
      console.log("GET data:", data);
    } catch (error) {
      console.error("Error borrar un product:", error);
    }
  };

  useEffect(() => {
    GETS();
    console.log(idTokens );
    
  }, []);


  return (
    < div className="center">
  
      
      {/* <button onClick={GETS}>VER TODO </button> */}
      <button onClick={Delet}>ELIMINAR </button>
      <input
        type="number"
        id="id"
        name="id"
        placeholder="Ingresa id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <br/>
      <button onClick={POST}>agregarr</button>
      <h1>Categorías</h1>
      <ul>
        {categorias.map(cat => (
          <li key={cat.id}>{cat.description} {cat.id} {cat.title} </li> // asumiendo que los objetos tienen id y name
        ))}
      </ul>
      
    </div>
  );
};
