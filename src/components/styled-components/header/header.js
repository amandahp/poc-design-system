import styled from 'styled-components';

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