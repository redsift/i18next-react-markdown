import styled from 'styled-components';


const Button = styled.button`
  border: 1px solid blue;

  font-size: 1rem;
  line-height: 32px;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  -webkit-tap-highlight-color: transparent;
  padding: 0 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  ${({ minWidth }) => `${minWidth ? `min-width: ${minWidth}` : null}`}
  ${({ height }) => `${height ? `height: ${height}` : null}`}
  outline: none;
  user-select: none;
  overflow: hidden;
  vertical-align: middle;
  border-radius: 2px;

  &:focus {
    outline: none;
  }
`;


export default Button;
