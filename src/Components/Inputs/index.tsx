import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    justify-content: center;
`;

const Text = Styled.Text`
    font-size: 30px;
    margin-left: 10px;
`;

const TextInput = Styled.TextInput`
    border: 1px solid black;
    border-radius: 3px;
    text-align: center;
    font-size: 30px;
    padding: 2px 15px;
    margin-left: 10px;
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
            {
                type === 'counter' && (
                    <>
                        <TextInput></TextInput>
                        <Text>S</Text>
                        <TextInput></TextInput>
                        <Text>B</Text>
                    </>
                )
            }
        </Container>
    );
};

export default Inputs;
