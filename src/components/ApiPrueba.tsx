
import { useEffect, useState } from "react";
interface Categoria {
  id: number;
  title: string;
  description: string;
  picture?: string | null; // si viene a veces null
}



export const ApiPrueba = () => {

  const [id, setId] = useState("");
  const [categorias, setCategorias] = useState<Categoria[]>([]); // para recorrer el array y traer las cateorias 

  const GETS = async () => {
    try {
      const response = await fetch('http://161.35.104.211:8000/categories/', {
        method: "GET",
        headers: {
          "Authorization": "Bearer marko", // token o user
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }
      const data = await response.json();
      setCategorias(data); // guardo en estado
      console.log("GET data:", data);
    } catch (error) {
      console.error("Error al obtener categorías:", error);
    }
  };

      const POST = async () => {
    try {
      const response = await fetch("http://161.35.104.211:8000/categories/", {
        method: "POST",
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
      console.error("Error al actualizar categoría:", error);
    }
  };


  const PUTT = async () => {
    try {
      const response = await fetch("http://161.35.104.211:8000/categories/38", {
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
      console.error("Error al actualizar categoría:", error);
    }
  };

    const Delet = async () => {
      console.log(id);
    try {
      const response = await fetch(`http://161.35.104.211:8000/categories/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer marko", // token o user
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      const data = await response.json();
      console.log("GET data:", data);
    } catch (error) {
      console.error("Error al obtener categorías:", error);
    }
  };

 

  useEffect(() => {
    GETS();
  }, []);


  
  return (
    <>
      <h6>traigo de la api</h6>
      <button onClick={POST}>agregarr</button>
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
      
      <h1>Categorías</h1>
      <ul>
        {categorias.map(cat => (
          <li key={cat.id}>{cat.description} {cat.id} {cat.title} </li> // asumiendo que los objetos tienen id y name
        ))}
      </ul>
      
    </>
  );
};
