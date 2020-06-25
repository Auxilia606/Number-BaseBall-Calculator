import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex: 1;
    padding: 15px;
    justify-content: center;
`;

const Label = Styled.Text``;

interface Props { }

const EmptyItem = ({ }: Props) => {
    return (
        <Container>
            <Label>하단 + 버튼을 눌러서 현재 볼카운트를 입력합니다.</Label>
            <Label>"4자리 숫자" "카운트" (한 칸 띄어서 입력)</Label>
            <Label>예시: 1234 1S1B (o)</Label>
            <Label>잘못된 입력 예시:</Label>
            <Label>2345 1s1B (x) "대문자만 입력 가능합니다. S, B, OUT"</Label>
            <Label>2234 OUT (x) 숫자가 중복되지 않아야 합니다.</Label>
            <Label>상단에 보이는 숫자가 입력한 조건을 모두 만족하는 숫자입니다.</Label>
            <Label>입력 가능한 카운트:</Label>
            <Label>1B, 2B, 3B, 4B, 1S, 1S1B, 1S2B, 1S3B, 2S, 2S1B, 2S2B, 3S</Label>
        </Container>
    )
}

export default EmptyItem;