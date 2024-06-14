import React from 'react';
import styles from "./page.module.css";
import TitleHeader from "@/component/squirtle"
import CardSection from "@/component/CardSection"

export default function Home() {
  // Array de objetos contendo títulos e conteúdos para cada CardSection
  const sections = [
    {
      titulo: 'Informações sobre Squirtle',
      conteudo: 'Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.'
    },
    {
      titulo: 'Características',
      conteudo: 'Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.'
    },
    {
      titulo: 'Curiosidades',
      conteudo: 'Fazer'
    },
    {
      titulo: 'Squirtle: O Amigo Aquático',
      conteudo: (
        <>
          <p>
            Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.
          </p>
          <p>
            Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.
          </p>
          <p>
            Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.
          </p>
        </>
      )
    },
    {
      titulo: 'Recursos Adicionais',
      conteudo: 'Fazer'
    },
    {
      titulo: 'Evoluções',
      conteudo: 'Fazer'
    }
  ];

  return (
    <body>
      <TitleHeader />
      <main className={styles.main}>
        {sections.map((section, index) => (
          <CardSection key={index} titulo={section.titulo}>
            {section.conteudo}
          </CardSection>
        ))}
      </main>
    </body>
  );
}
