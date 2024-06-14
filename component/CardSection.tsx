import React, { ReactNode } from "react";
import stylesCS from "./CardSection.module.css";

interface CardSectionProps {
    titulo: string;
    children: ReactNode;
}

function CardSection(props: CardSectionProps) {
    return (
        <div>
            <section className={stylesCS.section}></section>
            <section>
                <h2>{props.titulo}</h2>
                {props.children} {/* Renderiza os elementos filhos aqui */}
            </section>
        </div>
    )
}

export default CardSection
