import React from 'react';
import styles from "./page.module.css";
import TitleHeader from "@/component/squirtle"
import CardSection from "@/component/CardSection"

export default function Home() {
  return (
    <body>
      <TitleHeader />
      <main className={styles.main}>
        <CardSection titulo='Informações sobre Squirtle'>
          Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de
          Kanto e evolui para Wartortle.
        </CardSection>
        <CardSection titulo='Características'>
          Squirtle é conhecido por sua concha nas costas, que oferece proteção
          adicional. Ele possui ataques de água poderosos, como Water Gun e
          Hydro Pump.
        </CardSection>
        <CardSection titulo='Curiosidades'>
          Fazer
        </CardSection>
        <CardSection titulo='Squirtle: O Amigo Aquático'>
        <p>
          Squirtle, com sua aparência simpática e sua habilidade em controlar a
          água, conquistou o coração de treinadores Pokémon ao redor do mundo.
          Sendo o inicial de água na região de Kanto, Squirtle é uma escolha
          popular para aqueles que buscam equilíbrio e versatilidade em suas
          equipes.
        </p>
        <p>
          Sua concha nas costas não apenas oferece proteção, mas também é um
          símbolo de resistência. Ao evoluir para Wartortle e, posteriormente,
          para Blastoise, Squirtle se transforma em uma força formidável,
          dominando ataques aquáticos que podem surpreender adversários em
          batalhas.
        </p>
        <p>
          Além de suas habilidades de batalha, Squirtle é conhecido por seu
          carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle
          como uma amizade profunda, tornando-o não apenas um companheiro de
          lutas, mas um amigo leal ao longo de suas jornadas.
        </p>
        </CardSection>
        <CardSection titulo='Recursos Adicionais'>
          Fazer
        </CardSection>
        <CardSection titulo='Evoluções'>
          Fazer
        </CardSection>
      </main>
    </body>
  );
}
