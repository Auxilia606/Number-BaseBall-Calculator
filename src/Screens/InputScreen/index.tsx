import React, { useState } from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button'
import Inputs from '~/Components/Inputs'

const Container = Styled.SafeAreaView`
    flex: 1;
`;

const TitleContainer = Styled.View`
    height: 80px;
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
    height: 80px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const ButtonContainer = Styled.View`
    height: 50px;
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

    const [strike, setStrike] = useState<number>(0);
    const [ball, setBall] = useState<number>(0);

    return (
        <Container>
            {title && (
                <TitleContainer>
                    <TitleLabel>{title}</TitleLabel>
                </TitleContainer>
            )}
            <InputContainer>
                <Inputs type={'number'}></Inputs>
            </InputContainer>
            <InputContainer>
                <Inputs type={'counter'}></Inputs>
            </InputContainer>
            <ButtonContainer>
                <Button iconName={'done'}></Button>
                <Button iconName={'close'}></Button>
            </ButtonContainer>
        </Container>
    )
};

export default InputScreen;
