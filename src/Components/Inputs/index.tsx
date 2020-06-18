import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    justify-content: space-evenly;
`;

const TextInput = Styled.TextInput`
    border: 1px solid black;
    border-radius: 3px;
    text-align: center;
    font-size: 30px;
    padding: 2px 15px;
`;

interface Props {
    type: 'number' | 'counter';
}

const Inputs = ({ type }: Props) => {
    return (
        <Container>
            {
                type === 'number' && (
                    <>
                        <TextInput></TextInput>
                        <TextInput></TextInput>
                        <TextInput></TextInput>
                        <TextInput></TextInput>
                    </>
                )
            }
        </Container>
    );
};

export default Inputs;
