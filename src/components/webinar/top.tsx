import React from "react";
import { Brand } from "iconcaral2";
import style from "./style.module.css"

// Use the type for props (if you're using TypeScript)
interface TopProps {
    marca: string;
}

export default function Top({ marca }: TopProps) { // <-- Destructure 'marca' from the props object
    return (
        <div className={style.topban}>
            <Brand name={marca} size={70} />
            <h2>Webinars de {marca}</h2>
            <p>Explora todos los webinars emitidos sobre {marca}. Aquí encontrarás grabaciones organizadas por temas para que puedas verlas cuando quieras.</p>
        </div>
    );
}