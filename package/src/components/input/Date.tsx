'use client';

import * as React from 'react';
import { formatDate } from '../../utils/datetime';
import { NAME_SPACE } from '../../constants/core';

interface IProps {
  value: Date | null;
  valueFormat: string;
  useClearButton: boolean;
  setValue: (value: Date | null) => void;
  setIsVisible: (value: boolean) => void;
}

function InputDate({
  value,
  valueFormat,
  useClearButton,
  setValue,
  setIsVisible,
}: IProps) {
  const handleFocus = () => {
    setIsVisible(true);
  };

  return (
    <div className={`${NAME_SPACE}__input-container`}>
      <input
        className={`${NAME_SPACE}__input`}
        type="text"
        value={formatDate(value, valueFormat)}
        readOnly
        onFocus={handleFocus}
      />
      {useClearButton && value && (
        <button
          className={`${NAME_SPACE}__clear`}
          onClick={() => setValue(null)}
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default InputDate;
