import type { FC, PropsWithChildren } from 'react';

import { Button as MuiButton, type ButtonProps } from '@mui/material';

interface IButtonProps extends ButtonProps {
    variant?: 'text' | 'outlined' | 'contained';
    size?: 'small' | 'medium' | 'large';
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
    children,
    color = 'primary',
    size = 'medium',
    disabled = false,
    variant = 'contained',
    type = 'button',
    ...restProps
}) => (
    <MuiButton variant={variant} size={size} color={color} disabled={disabled} type={type} {...restProps}>
        {children}
    </MuiButton>
);
