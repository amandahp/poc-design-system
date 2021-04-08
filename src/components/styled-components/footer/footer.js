import styled from 'styled-components';

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
