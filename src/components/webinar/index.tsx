import React, { useState } from "react";
import style from "./style.module.css"
import { CaralIcon } from "iconcaral2";

interface webinarInterface{
    title: string,
    duration: string,
    lang: string,
    description: React.ReactNode,
    speakers: string, 
    img: string,
    url: string,
    version: string
}

export default function Webinar ({title, duration, lang, description, speakers, img, url, version}:webinarInterface){
    const imgside = "/img/" + img;
     const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
        window.scrollTo(0,0); 
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = "visible";
    };
    return(
       <>
       <div className={style.web}>

            <div style={{
                backgroundImage: `url(${imgside})`,
            }} className={style.imgsquare}>


            <button className={style.play} onClick={openModal}>
                <CaralIcon name="play" />
            </button>
            </div>
            <div className={style.text}>
                <div className={style.top}>
                    <h3>{title}</h3>
                    <div className={style.info}>
                        <CaralIcon name="clock"/>
                        <small>{duration}</small>
                        <div className={style.div}> | </div>
                        <CaralIcon name="mesagge"/>
                        <small>{lang}</small>
                        <div className={style.div}> | </div>
                        <CaralIcon name="flagPointer"/>
                        <small>Versión: {version}</small>
                    </div>
                </div>
                {description}
                

                {speakers && 
                <div className={style.bottom}>
                    <p>
                        <b>Oradores </b>
                        {speakers}
                    </p>
                </div>
                }
            </div>
       </div>

       {isModalOpen && (
           <div className={style.modal}>
                
                <div className={style.header}>
                    <button className={style.closeButton} onClick={closeModal}>
                        <CaralIcon name="chevronLeft" />
                    </button>
                    <h4>{title}</h4>
                </div>

                <div className={style.divframe}>
                    <iframe width="100%"  src={url} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <div className="details">
                    
                </div>
                <img src="/img/haz/3.png" className={style.haz} alt="" srcset="" />
           </div>
       )}
       </>
    )

    
}