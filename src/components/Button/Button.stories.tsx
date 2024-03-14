import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button.tsx';

type ComponentType = typeof Button;
type Story = StoryObj<ComponentType>;

const meta: Meta<ComponentType> = {
    component: Button,
    title: 'Components/Button',
    tags: ['autodocs']
};
export default meta;

const DefaultProps: Story = {
    args: {
        variant: 'contained',
        size: 'medium',
        children: 'Button'
    }
};

export const Contained: Story = {
    args: {
        ...DefaultProps.args
    }
};

export const Text: Story = {
    args: {
        ...DefaultProps.args,
        variant: 'text'
    }
};

export const Outlined: Story = {
    args: {
        ...DefaultProps.args,
        variant: 'outlined'
    }
};
