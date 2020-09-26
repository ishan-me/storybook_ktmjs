import styled from 'styled-components';

const validation = styled.input`
  border-color: ${((props) => (props.error ? 'red' : 'black'),
  (props) => (props.warning ? 'orange' : 'black'),
  (props) => (props.sucess ? 'green' : 'black'),
  (props) => (props.default ? 'grey' : 'black'))};
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 14px;
  padding: 6px 8px;
  border-width: 1px;
  width: 100%;
  border-style: solid;
  border-color: ${validation};
  margin: 0;
`;

export { StyledInput, validation };
