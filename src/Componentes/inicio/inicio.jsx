
import { useEffect, useState } from "react";

import { MiCard } from "./MiCard";

import { Alert } from "react-bootstrap";

export function Inicio(){
    
    const [datos, setDatos] = useState(null);

    useEffect(()=>{
        const tema = 'carreras mejores pagadas';
        const apiKey = 'd5c0f7c14f2d4b139f4de9078fb87c2a';
        const consulta = `https://newsapi.org/v2/everything?q=${tema}&sortBy=publishedAt&pageSize=15&language=es&apiKey=${apiKey}`;

        fetch(consulta)
        .then( resp => {
            resp.json().then(data => {                
                setDatos(data.articles);
            } )
        })
        .catch(error => {
            console.log('error -->', error);
        });

    }, []);

    return(
        <>       
            <div>
                {
                    datos ? (datos.map((item, index) => (
                        <div key = {index}>                           
                            <MiCard articulo = {item} />
                        </div>
                    ))) 
                    : 
                    (
                        <div className="container mt-5">
                            <Alert>Cargando información...</Alert>
                        </div>
                    )
                }
            </div>
        </>
    )
}