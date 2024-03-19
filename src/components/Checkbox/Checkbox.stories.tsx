import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Checkbox } from './Checkbox.tsx';

type ComponentType = typeof Checkbox;
type Story = StoryObj<ComponentType>;

const meta: Meta<ComponentType> = {
    component: Checkbox,
    title: 'Components/Checkbox',
    tags: ['autodocs'],
    args: {
        color: 'secondary',
        onChange: action('on-change')
    },
    argTypes: {
        onChange: {}
    }
};
export default meta;

export const DefaultCheckbox: Story = {};
