import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
    background-color: #ddd;
    width: 150px;
    height: 30px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
`;
const Icon = Styled.Image``;

interface Props {
    iconName: 'search' | 'done' | 'close';
    onPress?: () => void;
}

const Button = ({ iconName, onPress }: Props) => {
    return (
        <Container onPress={onPress}>
            <Icon
                source={
                    iconName === 'search' ? require('~/Assets/Images/round_search_black_18dp.png')
                        : iconName === 'done' ? require('~/Assets/Images/round_done_black_18dp.png')
                            : iconName === 'close' ? require('~/Assets/Images/round_close_black_18dp.png') : true
                } />
        </Container>
    );
};

export default Button;
