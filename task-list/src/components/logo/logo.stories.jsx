import { Logo } from './logo';
import { rangeControl, designFigma } from '@/utils'

export default {
  title: 'TaskBox / Atomics / Logo',
  component: Logo,
  parameters: {
    ...designFigma('https://www.figma.com/file/qbQoxOz0eOlJIFTxgHlSUL/Task-List?node-id=6%3A354')
  },
  args: {
    ...Logo.defaultProps,
  },
  argTypes: {
    size: rangeControl({
      min: 14,
      step: 2,
      max: 100,
    }),
  },
};

const Template = (args) => <Logo {...args} />;

export const LogoLight = Template.bind({});

export const LogoHomeLink = Template.bind({});
LogoHomeLink.args = {
  homelink: true,
};

export const LogoDark = Template.bind({});
LogoDark.args = {
  dark: true,
};
LogoDark.parameters = {
  backgrounds: {
    default: 'dark',
    values: [{ name: 'dark', value: '#111' }],
  },
};

export const LogoDarkHomeLink = Template.bind({});
LogoDarkHomeLink.args = {
  dark: true,
  homelink: true,
};
LogoDarkHomeLink.parameters = {
  ...LogoDark.parameters,
};
