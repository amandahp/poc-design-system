import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => `
    width: 100%;
    margin-top: ${theme.margin.mg9};
    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    min-height: 100vh;

    .container {
      display: flex;
      width: 960px;
      margin: ${theme.margin.mg0} auto;
      
      @media only screen and (max-width: 600px) {
        width: 100%;
        box-sizing: border-box;
        padding: 0 ${theme.padding.pd5};
      }
    }

    a {
      text-decoration: none;
      color: ${theme.color.neutral.ultraLight};
    }
  `}
`;

export const Header = styled.div`
  ${({ theme }) => `
    width: 100%;
    position: fixed;
    top: 0;
    padding: ${theme.padding.pd4} 0;
    background: ${theme.color.primary};
    
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    h2 {
      ${theme.l6};
      color: ${theme.color.neutral.ultraLight};
    }

    form {
      color: ${theme.color.neutral.ultraLight};
      > div {
        margin: ${theme.margin.mg0} 10px;
      }
      > div, label, input {
        ${theme.bodyLargeTight}
        cursor: pointer !important;
      }
    }
  `}
`;

export const Title = styled.div`
  ${({ theme }) => `
    width: 100%;
    
    padding: ${theme.padding.pd6} 0;
    background: ${theme.color.neutral.ultraLight};
    border-bottom: ${theme.borderWidth.thin} solid ${theme.color.neutral.light};
    p {
      ${theme.l4};
    }
  `}
`;

export const BannerWrapper = styled.div`
  ${({ image }) => `
    width: 100%;
    height: 400px;
    background: url('${image}');
    background-size: cover;
    background-attachment: fixed;
  `}
`;

export const Information = styled.div`
  ${({ theme }) => `
    width: 100%;
    p {
      margin: ${theme.margin.mg0};
      ${theme.bodyLargeLoose}
      color: ${theme.color.neutral.ultraDark};
    }
    margin: ${theme.margin.mg3} ${theme.margin.mg0} ${theme.margin.mg0} ${theme.margin.mg0};
    span {
      font-style: italic;
      color: ${theme.color.neutral.dark};
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => `
    width: 100%;
    ${theme.bodyLargeLoose}
    color: ${theme.color.neutral.ultraDark};
    margin: ${theme.margin.mg3} ${theme.margin.mg0} ${theme.margin.mg0} ${theme.margin.mg0};
    h2 {
      font-size: 25px;
      margin-bottom: ${theme.margin.mg3};
    }
    p {
      margin-bottom: ${theme.margin.mg3};
    }
    .container {
      flex-direction: column;
    }

    button {
      background: ${theme.color.secondary};
      color: ${theme.color.neutral.ultraDark};
      padding: ${theme.padding.pd4} ${theme.padding.pd7};
      margin: 0 auto;
      border: 0;
      outline: none;
      cursor: pointer;
      border-radius: ${theme.cornerRadius.primary};
      box-shadow: ${theme.dropShadow.standard};
      ${theme.action}
    }
  `}
`;



export const Footer = styled.div`
  ${({ theme }) => `
    width: 100%;

    padding: ${theme.padding.pd4} 0;
    background: ${theme.color.primary};
    margin-top: ${theme.margin.mg3};
    display: flex;
    justify-content: center;

    h2 {
      ${theme.l6};
      color: ${theme.color.neutral.ultraLight};
    }
  `}
`;



export const Button = styled.div`
  ${({ theme }) => `
    width: 100%;
    
    padding: ${theme.padding.pd4} 0;
    background: ${theme.color.primary};
    margin-top: ${theme.margin.mg3};
    display: flex;
    justify-content: center;
    
    h2 {
      ${theme.l6};
      color: ${theme.color.neutral.ultraLight};
    }
`}
;`