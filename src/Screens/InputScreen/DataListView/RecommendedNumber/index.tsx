import React, { useContext, useState } from 'react';
import Styled from 'styled-components/native';
import { BaseballDataContext } from '~/Context/BaseballDataContext'
import { initBaseballNumbers, changeTypes, checkData } from './Logic';

const Container = Styled.View`
    height: 40px;
    justify-content: center;
    align-items: center;
`;

const NumberLabel = Styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

interface Props { }

const RecommendedNumber = ({ }: Props) => {
    const { baseballData } = useContext<IBaseballDataContext>(BaseballDataContext);
    const [recommendedNumber, setRecommendedNumber] = useState<string>('----');
    const newNumberSet = initBaseballNumbers();
    const newBaseballData = changeTypes(baseballData);
    const recommendedNumberSet = checkData(newNumberSet, newBaseballData);

    return (
        <Container>
            <NumberLabel>{recommendedNumber}</NumberLabel>
        </Container>
    )
}

export default RecommendedNumber;
