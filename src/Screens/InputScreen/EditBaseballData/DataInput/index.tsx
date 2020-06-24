import React from 'react';
import Styled from 'styled-components/native';

import Background from './Background';
import TextInput from './TextInput';

const Container = Styled.View`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
`;

interface Props {
    hideDataInput: () => void;
}

const DataInput = ({ hideDataInput }: Props) => {
    return (
        <Container>
            <Background onPress={hideDataInput} />
            <TextInput hideDataInput={hideDataInput} />
        </Container>
    );
};

export default DataInput;
