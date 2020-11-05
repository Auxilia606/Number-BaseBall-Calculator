import React, { useContext } from 'react';
import Styled from 'styled-components/native';
import { BaseballDataContext } from '~/Context/BaseballDataContext'

const ButtonContainer = Styled.TouchableOpacity`
    box-shadow: 4px 4px 8px #999;
    flex: 1;
    align-items: center;
    justify-content: center;
    margin: 5px;
    background-color: rgba(0,0,0,0.3);
    border-radius: 10px
`;

const TextContainer = Styled.Text`
    font-size: 30px;
`;

interface Props {
    title: number;
}

const NumberButton = ({ title }: Props) => {
    const {
        baseballNumberCounter,
        setBaseballNumberCounter,
        resetBaseballData,
    } = useContext<IBaseballDataContext>(BaseballDataContext);
    const onPress = () => {
        setBaseballNumberCounter(title);
        resetBaseballData();
    };
    return (
        <ButtonContainer
            onPress={onPress}
            style={
                baseballNumberCounter === title
                    ? { backgroundColor: 'rgba(11, 166, 154, 0.7)' }
                    : null
            }
        >
            <TextContainer>{title}</TextContainer>
        </ButtonContainer>
    );
};

export default NumberButton;
