import React from 'react';
import { Meta, Story } from '@storybook/react';

import Button from '../src/Button';

const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
    },
    parameters: {

    },
}

export default meta;

const Template: Story<any> = args => <Button label="hellow world" />

export const Default = Template.bind({});

Default.args = {};