import React, { useState } from 'react';
import Styled from 'styled-components/native';
import DataListView from './DataListView';
import EditBaseballData from './EditBaseballData';

const Container = Styled.View`
    flex: 1;
`;

interface Props {
    title?: string;
}

const InputScreen = ({ title }: Props) => {
    return (
        <Container>
            <DataListView />
            <EditBaseballData />
        </Container>
    )
};

export default InputScreen;
