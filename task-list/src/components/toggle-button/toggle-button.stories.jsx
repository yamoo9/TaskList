import { ToggleButton } from './toggle-button';
import { rangeControl, designFigma } from '@/utils'

export default {
  title: 'TaskBox / Atomics / ToggleButton',
  component: ToggleButton,
  parameters: {
    ...designFigma('https://www.figma.com/file/qbQoxOz0eOlJIFTxgHlSUL/Task-List?node-id=6%3A377'),
  },
  args: {
    ...ToggleButton.defaultProps,
  },
  argTypes: {
    size: rangeControl({
      min: 12,
      step: 2,
      max: 100,
    }),
  },
};

const Template = (args) => <ToggleButton {...args} />;

export const ToggleButtonClosed = Template.bind({});

export const ToggleButtonOpened = Template.bind({});
ToggleButtonOpened.args = {
  open: true,
};
