import React, { useState, useContext } from 'react';
import AddButton from './AddButton';
import ResetButton from './ResetButton';
import DataInput from './DataInput';
import { BaseballDataContext } from '~/Context/BaseballDataContext';

interface Props { }

const EditBaseballData = ({ }: Props) => {
    const [showInput, setShowInput] = useState<Boolean>(false);
    const { resetBaseballData } = useContext<IBaseballDataContext>(BaseballDataContext);
    return (
        <>
            {!showInput && <AddButton onPress={() => setShowInput(true)} />}
            {/* <ResetButton onPress={() => resetBaseballData()}></ResetButton> */}
            {showInput && <DataInput hideDataInput={() => setShowInput(false)} />}
        </>
    );
};

export default EditBaseballData;
