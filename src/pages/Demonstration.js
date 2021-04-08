// Modules
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components'

// Themes
import productOne from '../theme/productOne';
import productTwo from '../theme/productTwo';
import productThree from '../theme/productThree';

import Trello from '../components/logos/trello';
import Ubuntu from '../components/logos/ubuntu';
import Slides from '../components/logos/slides';


// Styled
import * as Styled from '../components/Styled';



function Demonstration() {
  let urlBanner = ""
  const [currentTheme, setCurrentTheme] = useState(productOne);

  const products = [productOne, productTwo, productThree]

  if (currentTheme === productOne){
    urlBanner = "https://images.pexels.com/photos/175773/pexels-photo-175773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  } else if (currentTheme === productTwo){
    urlBanner = "https://images.pexels.com/photos/50570/sandstone-the-wave-rock-nature-50570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  } else {
    urlBanner="https://images.pexels.com/photos/2156884/pexels-photo-2156884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }


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
                <Slides />
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
        <Styled.BannerWrapper image={urlBanner}/>
          <Styled.Information>
            <div className="container">
              <p>
                Por <span>Jessica Machado e Nicolas Troles</span>, postado em <span>28 de agosto de 2020.</span>
              </p>
            </div>
          </Styled.Information>

          <Styled.Content>
            <div className="container">
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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

