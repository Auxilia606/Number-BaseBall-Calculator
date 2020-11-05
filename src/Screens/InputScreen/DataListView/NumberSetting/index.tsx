import React from 'react';
import Styled from 'styled-components/native';
import NumberButton from './NumberButton';

const Container = Styled.View`
    height: 50px;
    justify-content: space-between;
    flex-direction: row;
`;

interface Props {}

const NumberSetting = ({}: Props) => {
    return (
        <Container>
            <NumberButton title={3} />
            <NumberButton title={4} />
            <NumberButton title={5} />
        </Container>
    );
};

export default NumberSetting;
