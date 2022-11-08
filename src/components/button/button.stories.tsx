import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

const story: Meta<ButtonProps> = {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
    children: {
      description: 'Button label',
      table: { defaultValue: { summary: '' } },
    },
    onClick: {
      description: 'Event executed when the component is clicked',
      action: 'button-clicked',
    },
  },
  parameters: {},
};

export const ButtonExample: Story<ButtonProps> = (args) => {
  const { children } = args;
  return <Button {...args}>{children}</Button>;
};

export default story;
