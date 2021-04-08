import styled from 'styled-components';

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