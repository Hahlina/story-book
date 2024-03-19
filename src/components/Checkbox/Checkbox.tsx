import { ChangeEvent, FC } from 'react';

import { Checkbox as MuiCheckbox, CheckboxProps } from '@mui/material';

interface ICheckboxProps extends CheckboxProps {
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default';
    disabled?: boolean;
    required?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

export const Checkbox: FC<ICheckboxProps> = (props) => <MuiCheckbox {...props} />;
