import { Header } from './header';
import { designFigma } from '@/utils'

export default {
  title: 'TaskBox / Molecules / Header',
  component: Header,
  parameters: {
    ...designFigma('https://www.figma.com/file/qbQoxOz0eOlJIFTxgHlSUL/Task-List?node-id=6%3A359'),
    backgrounds: {
      default: 'gray',
      values: [
        { name: 'gray', value: '#eee' },
        { name: 'darkgray', value: '#424242' },
      ],
    },
  },
  args: {
    ...Header.defaultProps,
  },
};

const Template = (args) => <Header {...args} />;

export const HeaderClosed = Template.bind({});

export const HeaderOpened = Template.bind({});
HeaderOpened.args = {
  open: true,
};
