import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    height: 40px;
    justify-content: center;
    align-items: center;
`;

const NumberLabel = Styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

interface Props {
    recommendedNumber?: number;
}

const RecommendedNumber = ({ recommendedNumber }: Props) => {
    return (
        <Container>
            <NumberLabel>{recommendedNumber}</NumberLabel>
        </Container>
    )
}

export default RecommendedNumber;
