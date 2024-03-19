import { FC } from 'react';
import { Switch as MuiSwitch, SwitchProps } from '@mui/material';
import * as React from 'react';

interface ISwitch extends SwitchProps {
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default';
    defaultChecked?: boolean;
    disabled?: boolean;
    label?: string;
    size?: 'small' | 'medium';
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

export const Switch: FC<ISwitch> = (props) => <MuiSwitch {...props} />;
