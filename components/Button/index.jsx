import styled from 'styled-components';

const convertHex = (input, opacity) => {
  try {
    const hex = input.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
  } catch (error) {
    console.log({ error });
    return input;
  }
};

const Button = styled.button`
  border: 1px solid blue;
  color: blue;
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  cursor: pointer;

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
  &:hover {
    
  background-color: ${({ backgroundColor }) => {
    if (backgroundColor) return convertHex(backgroundColor, 80);

    return 'rgba(0, 0, 0, 0.05);';
  }}
  }
`;


export default Button;
