import React from 'react';
import Styled from 'styled-components/native';
import { BaseballDataProvider } from '~/Context/BaseballDataContext';
import InputScreen from './Screens/InputScreen';

const Container = Styled.View`
  flex: 1;
  background-color: #EEE;
`;

const App = () => {
  return (
    <BaseballDataProvider>
      <Container>
        <InputScreen title="Number Baseball Calculator" />
      </Container>
    </BaseballDataProvider>
  );
};

export default App;
