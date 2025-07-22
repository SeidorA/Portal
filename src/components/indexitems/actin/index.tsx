import { CaralIcon } from "iconcaral2"
import style from "./index.module.css"

function Actitem(title: string, link: string) {
    return (
        <a href={link} className={style.actinItem}>
            <div className={style.box}>
                 <CaralIcon name="SAP" />
            </div>
           {title}
        </a>
            
    );
}

export default function Actin() {
    return(
        <div className="container margin-top--lg margin-bottom--lg">
            <div className="row">
                <div className="col col--3">
                    <h1>Act In</h1>
                </div>
                <div className="col col--3">
                    {Actitem("Success Factors", "https://www.seidor.com/es/soluciones/sap-commerce-cloud")}
                    {Actitem("Business One analytics​", "https://www.seidor.com/es/soluciones/sap-commerce-cloud")}
                </div>

                <div className="col col--3">
                    {Actitem("ByDesign", "https://www.seidor.com/es/soluciones/sap-commerce-cloud")}
                    {Actitem("S/4HANA Analytics​", "https://www.seidor.com/es/soluciones/sap-commerce-cloud")}
                </div>
                <div className="col col--3">
                    {Actitem("Planning", "https://www.seidor.com/es/soluciones/sap-commerce-cloud")}
                </div>
                
            </div>
        </div>
    )
}