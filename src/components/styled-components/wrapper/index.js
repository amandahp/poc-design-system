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