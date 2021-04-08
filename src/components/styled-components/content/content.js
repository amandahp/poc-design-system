import styled from 'styled-components';

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
      background: ${theme.color.primary};
      color: ${theme.color.neutral.ultraDark};
      padding: ${theme.padding.pd4} ${theme.padding.pd7};
      margin: 0 auto;
      border: 0;
      outline: none;
      cursor: pointer;
      border-radius: ${theme.borderRadius.primary};
      box-shadow: ${theme.dropShadow.standard};
      ${theme.action}
    }
  `}
`;