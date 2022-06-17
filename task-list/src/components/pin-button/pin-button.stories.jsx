import { PinButton } from './pin-button';
import { rangeControl, designFigma } from '@/utils'

export default {
  title: 'TaskBox / Atomics / PinButton',
  component: PinButton,
  parameters: {
    ...designFigma('https://www.figma.com/file/qbQoxOz0eOlJIFTxgHlSUL/Task-List?node-id=2%3A31')
  },
  args: {
    ...PinButton.defaultProps,
  },
  argTypes: {
    size: rangeControl({
      min: 20,
      step: 2,
      max: 40,
    }),
  },
};

const Template = (args) => <PinButton {...args} />;

export const Loading = Template.bind({});

export const Deactive = Template.bind({});
Deactive.args = {
  loading: false,
  type: 'deactive',
};

export const Active = Template.bind({});
Active.args = {
  loading: false,
  type: 'active',
};
