import styled from 'styled-components';

const CardSecondary = styled.div`
  padding: 16px;
  padding-bottom: 8px;

  ${({ color }) => color && `background-color: ${color}`}
`;

export default CardSecondary;
