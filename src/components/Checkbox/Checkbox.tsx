import type { FC, ReactNode } from 'react';

import { Checkbox as MuiCheckbox, CheckboxProps } from '@mui/material';

interface ICheckboxProps extends CheckboxProps {
    label?: ReactNode;
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default';
    icon?: ReactNode;
    checkedIcon?: ReactNode;
}
export const Checkbox: FC<ICheckboxProps> = () => <MuiCheckbox />;
