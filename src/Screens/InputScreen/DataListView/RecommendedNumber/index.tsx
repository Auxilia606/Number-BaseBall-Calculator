import React, { useContext } from 'react';
import Styled from 'styled-components/native';
import { BaseballDataContext } from '~/Context/BaseballDataContext'
import { initBaseballNumbers, changeTypes, checkData, pickRandomNumber } from './Logic';

const Container = Styled.View`
    justify-content: center;
    align-items: center;
    background-color: rgb(11, 166, 154);
`;

const Title = Styled.Text`
    font-size: 36px;
    font-weight: bold;
`;

const NumberLabel = Styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

interface Props { }

const RecommendedNumber = ({ }: Props) => {
    const { baseballData } = useContext<IBaseballDataContext>(BaseballDataContext);
    const newNumberSet = initBaseballNumbers();
    const newBaseballData = changeTypes(baseballData);
    const recommendedNumberSet = checkData(newNumberSet, newBaseballData);
    const recommendedNumber = pickRandomNumber(recommendedNumberSet);
    return (
        <Container>
            <Title>추천 숫자</Title>
            <NumberLabel>{baseballData.length === 0 ? '----' : recommendedNumber}</NumberLabel>
        </Container>
    )
}

export default RecommendedNumber;
