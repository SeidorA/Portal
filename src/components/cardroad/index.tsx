
import React from 'react';
import { Brand, CaralIcon } from 'iconcaral2';
import styles from './indes.module.css';

type CardroadProps = {
    title: string;
    children?: React.ReactNode;
    integration: boolean;
    brand?: boolean;
    icon?: string;
    realization?: boolean;
}

export function Cardroad({ title, children }: CardroadProps) {
    return (
        <div
            className={styles.boxrroadmap}
            style={{
                backgroundImage: `url('/img/haz/Road${Math.floor(Math.random() * 5) + 1}.png')`,
            }}
        >
            <p className={styles.title}>{title}</p>
            <div className={styles.box}>
                {typeof children !== "undefined" && children}
            </div>
        </div>
    );
}


export function Kind({ integration }: CardroadProps) {
    return (
        <div className={styles.kind}>
            {integration ? (
                <div className={styles.funcionality}>
                    Integraciones
                    <CaralIcon name="cube" size={10} />
                </div>
            ) : (
                <div className={styles.bug}>

                    Funcionalidades
                    <CaralIcon name="wrench" size={10} />
                </div>
            )}
        </div>
    );
}

export function Subitle({ title, brand, icon }: CardroadProps) {

    return (
        <div className={styles.titleBox}>
            {brand ? (<Brand name={icon} size={30} />) : (<CaralIcon name={icon} size={30} />)}
            <p>{title}</p>
        </div>
    )
}


export function Featurecheck({ title, brand, icon, realization, description }: CardroadProps) {
    return (
        <div className={styles.featurecheck}>
            {realization ? (
                <div className={styles.realization}>
                    <CaralIcon name="check" size={30} />
                </div>
            ) : (
                <div className={styles.notrealization}>
                    <CaralIcon name="x" size={20} />
                </div>
            )}
            <div className={styles.description}>
                <div className={styles.titleBox}>
                    {brand ? (<Brand name={icon} size={30} />) : (<CaralIcon name={icon} size={30} />)}
                    <h5>{title}</h5>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}