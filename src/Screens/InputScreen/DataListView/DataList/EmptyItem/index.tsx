import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex: 1;
    padding: 15px;
`;

const Label = Styled.Text``;

interface Props { }

const EmptyItem = ({ }: Props) => {
    return (
        <Container>
            <Label>상단에 위치한 3, 4, 5 버튼을 눌러서 자릿수를 설정합니다.</Label>
            <Label>하단 + 버튼을 눌러서 현재 볼카운트를 입력합니다.</Label>
            <Label>"N자리 숫자" "카운트" (한 칸 띄어서 입력)</Label>
            <Label>예시: 234 1B (o)</Label>
            <Label>예시: 1234 1S1B (o)</Label>
            <Label>예시: 12345 1S2B (o)</Label>
            <Label>잘못된 입력 예시:</Label>
            <Label>1. 2234 OUT (x) 숫자가 중복되지 않아야 합니다.</Label>
            <Label>2. 자릿수 다르게 입력</Label>
            <Label>조건을 모두 만족하는 N자리 숫자가 상단에 표시됩니다.</Label>
            <Label>볼카운트는 대소문자를 구분하지 않습니다.</Label>
            <Label style={{fontSize: 16}}>일치하는 숫자가 하나도 없다면 OUT을 입력합니다.</Label>
        </Container>
    )
}

export default EmptyItem;