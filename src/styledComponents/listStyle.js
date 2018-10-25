import styled from 'styled-components';

const Row = styled.section`
  display: flex;
  flex-direction: row;
`;

const Content = styled.section`
  width: 20em;
  width: 48ch;
  max-width: 20em; 
  max-width: 48ch;
  overflow-wrap: break-word;
`;

const ControlBox = styled.section`
  border-left: 2px solid #999;
  padding-left: 1em;
  margin-left: 1em;
`;

export {Row, Content, ControlBox}