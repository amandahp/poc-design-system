import styled from 'styled-components';

export const BannerWrapper = styled.div`
${({ image }) => `
  width: 100%;
  height: 400px;
  background: url('${image}');
  background-size: cover;
  background-attachment: fixed;
`}
`;