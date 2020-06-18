import React from 'react';
import Styled from 'styled-components/native';
import InputScreen from './Screens/InputScreen';

const Container = Styled.View`
  flex: 1;
  background-color: #eee;
`;

const App = () => {
  return (
    <Container>
      <InputScreen title="Number Baseball Calculator"/>
    </Container>
  );
};

export default App;
