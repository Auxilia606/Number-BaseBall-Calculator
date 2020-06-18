import React, { useState } from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button'
import Inputs from '~/Components/Inputs'

const Container = Styled.SafeAreaView`
    flex: 1;
`;

const TitleContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #aaf;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

const TitleLabel = Styled.Text`
    font-size: 24px;
`;

const InputContainer = Styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const ButtonContainer = Styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

interface Props {
    title?: string;
}

const InputScreen = ({ title }: Props) => {
    const [value0, setValue0] = useState<number>(0);
    const [value1, setValue1] = useState<number>(0);
    const [value2, setValue2] = useState<number>(0);
    const [value3, setValue3] = useState<number>(0);

    return (
        <Container>
            {title && (
                <TitleContainer>
                    <TitleLabel>{title}</TitleLabel>
                </TitleContainer>
            )}
            <InputContainer>
                <Inputs number={4}></Inputs>
            </InputContainer>
            <ButtonContainer>
                <Button iconName={'done'}></Button>
                <Button iconName={'search'}></Button>
            </ButtonContainer>
        </Container>
    )
};

export default InputScreen;
