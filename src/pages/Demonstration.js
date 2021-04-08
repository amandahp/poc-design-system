// Modules
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components'

// Themes
import productOne from '../theme/productOne';
import productTwo from '../theme/productTwo';
import productThree from '../theme/productThree';

import Trello from '../components/logos/trello';
import Ubuntu from '../components/logos/ubuntu';
import Udacity from '../components/logos/udacity';


// Styled
import * as Styled from '../components/Styled';



function Demonstration() {
  const [currentTheme, setCurrentTheme] = useState(productOne);

  const products = [productOne, productTwo, productThree]

  return (
    <ThemeProvider theme={currentTheme}>
      <Styled.Wrapper>
        <Styled.Header>
          <div className="container">
            {currentTheme === productOne && (
                <Trello />
            )}{currentTheme === productTwo && (
                <Ubuntu />
            )}{currentTheme === productThree && (
                <Udacity />
            )}
            <form>
              {products.map((product, index) => {
                return(
                  <label for={`product-${index+1}`}>
                  <input
                    key={index+2}                
                    type="radio"
                    id={`product-${index+1}`}
                    name="theme"
                    value={`product-${index+1}`}
                    checked={currentTheme === product}
                    onChange={() => setCurrentTheme(product)}
                  />
                  Produto {index+1}
                </label>
                )
              } )}
            </form>
          </div>
        </Styled.Header>
        <Styled.Title>
          <div className="container">
            <p>Aplicando Design System com Styled Components em ReactJS</p>
          </div>
        </Styled.Title>
        <Styled.BannerWrapper image='https://static.vecteezy.com/system/resources/previews/000/693/768/non_2x/digital-connecting-banner-technology-polygon-background-vector.jpg'/>
          <Styled.Information>
            <div className="container">
              <p>
                Por <span>Jessica Machado e Nicolas Troles</span>, postado em <span>28 de agosto de 2020.</span>
              </p>
            </div>
          </Styled.Information>

          <Styled.Content>
            <div className="container">

            <h2>O que é Design System?</h2>
            <p>Essa é uma pergunta difícil, mas gosto de pensar que Design System é um padrão desenvolvido que contém todo o Design da sua aplicação mapeado e documentado. Ele é como se fosse a API do Design em que você consome os componentes e estilos para montar suas telas, facilitando demais a vida dos desenvolvedores na construção do seu produto</p>
            <h2>O que é React?</h2>
            <p>React é uma fantástica biblioteca JavaScript de código aberto com foco em criar interfaces de usuário para páginas web. Sua estrutura é voltada para criação e reutilização de componentes, o que nos permite uma boa abstração de interface.</p>
            <p>React foi desenvolvido pelo Facebook e lançado em 2013, além de ser uma biblioteca super popular no mundo Javascript, ela tem sido usada por grandes companhias ao redor do mundo como:</p>
            <button><a href='https://medium.com/' rel="noopener noreferrer" target='_blank'>Ver mais</a></button>
            </div>
          </Styled.Content>
        <Styled.Footer>
          <h2>Design System</h2>
        </Styled.Footer>
     </Styled.Wrapper>
    </ThemeProvider>
  );
}

export default Demonstration;

