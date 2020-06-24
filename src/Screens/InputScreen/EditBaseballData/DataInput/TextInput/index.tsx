import React, { useContext } from 'react';
import Styled from 'styled-components/native';

import { BaseballDataContext } from '~/Context/BaseballDataContext';

const Input = Styled.TextInput`
    width: 100%;
    height: 40px;
    background-color: #FFF;
    padding: 0px 8px;
`;

interface Props {
    hideDataInput: () => void;
}

const TextInput = ({ hideDataInput }: Props) => {
    const { addBaseballData } = useContext<IBaseballDataContext>(BaseballDataContext);
    return (
        <Input
            autoFocus={true}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="ex) '1234 1B' or '1826 1S1B'"
            returnKeyType="done"
            onSubmitEditing={({ nativeEvent }) => {
                addBaseballData(nativeEvent.text);
                hideDataInput();
            }}
        />
    );
};

export default TextInput;