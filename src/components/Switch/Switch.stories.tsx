import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Switch } from './Switch.tsx';

type ComponentType = typeof Switch;
type Story = StoryObj<ComponentType>;

const meta: Meta<ComponentType> = {
    component: Switch,
    title: 'Components/Switch',
    tags: ['autodocs'],
    args: {
        color: 'primary',
        onChange: action('on-change')
    }
};
export default meta;

export const DefaultSwitch: Story = {};
