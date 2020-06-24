import React from 'react';
import Styled from 'styled-components/native';
import RecommendedNumber from './RecommendedNumber';
import DataList from './DataList';

const Container = Styled.SafeAreaView`
    flex: 1;
`;

interface Props { }

const DataListView = ({ }: Props) => {
    return (
        <Container>
            <RecommendedNumber></RecommendedNumber>
            <DataList />
        </Container>
    )
}

export default DataListView;
