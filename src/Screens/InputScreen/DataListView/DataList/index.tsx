import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';
import { BaseballDataContext } from '~/Context/BaseballDataContext'
import DataListItem from './DataListItem'

const Container = Styled(FlatList)``;

interface Props { }

const DataList = ({ }: Props) => {
    const { baseballData, removeBaseballData } = useContext<IBaseballDataContext>(BaseballDataContext);
    return (
        <Container
            data={baseballData}
            keyExtractor={(item, index) => {
                return `data-${index}`;
            }}
            renderItem={({ item, index }) => (
                <DataListItem
                    text={item as string}
                    onDelete={() => removeBaseballData(index)}
                ></DataListItem>
            )}
            contentContainerStyle={baseballData.length === 0 && { flex: 1 }}
        >
        </Container>
    )
}

export default DataList;
