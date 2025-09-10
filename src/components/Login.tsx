import {  useState } from "react";
import { api } from "../peticiones";

import { useNavigate } from "react-router-dom";
import { ApiPrueba } from "./ApiPrueba";


export const Login = () => {
  
  const [id, setId] = useState("");
  const navegar = useNavigate();

    const MandarToken= async ()=>{
            try {
                const response = await fetch(`${api}`, {
                method: "GET",
                headers: {
                "Authorization": `Bearer ${id}`, // token o user
                "Content-Type": "application/json"
                }
            });
            if (!response.ok) {
                throw new Error(`Error ${response.status}`);
            }
            const data = await response.json();// lo q traigo de la api
            if (data.length === 0) {
            console.log("token mal escrito");
            return;// salgo
            }else 
            console.log("token aceptada ",id);
            navegar("/api-prueba", { state: { idTokens: id } });
            } catch (error) {
            console.error("Error al obtener categorías:", error);
            }
        };
    
    return (
    <>
    <div className="center">
    <h1 >
        Ingreso de clave token
    </h1>
    <input
        type="string"
        id="id"
        name="id"
        placeholder="Ingresa token"
        value={id}
        onChange={(e) => setId(e.target.value)}        
      />
      <button onClick={MandarToken}>Enviar</button>
      </div>
    </>
  )
}

export const a =1 ;

