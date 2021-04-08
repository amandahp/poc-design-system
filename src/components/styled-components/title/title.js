import styled from 'styled-components';

export const Title = styled.div`
  ${({ theme }) => `
    width: 100%;
    
    padding: ${theme.padding.pd6} 0;
    background: ${theme.color.neutral.ultraLight};
    border-bottom: ${theme.borderWidth.ultraLight} solid ${theme.color.neutral.light};
    p {
      ${theme.l4};
    }
    form {
    margin-top: -35px;
    margin-left: 900px;
    color: ${theme.color.neutral.ultraLight};
      input, button {
      ${theme.bodyLargeTight}
      cursor: pointer !important;
      }
      button{
        margin-left: 10px;
        border-radius: ${theme.borderRadius.circle};
        width: 40px;
        height: 40px;
        background-color:${theme.color.primary};
        border: none;
      }
      input{
        height: 30px;
        border: 2px solid ${theme.color.primary};
        border-radius: ${theme.borderRadius.primary};
      }
      .icon-search{
        color: ${theme.color.neutral.ultraLight};
      }
      
    }
  `}
`;