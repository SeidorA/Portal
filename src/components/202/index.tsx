import React from 'react';
import img from "@site/static/img/nosy.png"
import style from "./style.module.css"


export default function Not(){
    return (
        <div className={style.not}>
            <img src={img} alt="" />
            <h2>Actualmente no hay información disponible en esta sección</h2>
            <p>Nuestro equipo la estará actualizando muy pronto. <br></br>
Gracias por tu paciencia y sigue explorando el resto de los contenidos.</p>
        </div>
    )
}