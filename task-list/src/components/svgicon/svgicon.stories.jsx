import { SVGIcon } from './svgicon.jsx';
import { rangeControl, designFigma } from '@/utils'

export default {
  title: 'TaskBox / Atomics / SVGIcon',
  component: SVGIcon,
  parameters: {
    ...designFigma('https://www.figma.com/file/qbQoxOz0eOlJIFTxgHlSUL/Task-List?node-id=2%3A5')
  },
  args: {
    ...SVGIcon.defaultProps,
  },
  argTypes: {
    size: rangeControl(),
    width: rangeControl(),
    height: rangeControl({ max: 50 }),
  },
};

const Template = (args) => <SVGIcon {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  id: 'checker-loading',
  label: '로딩 중...',
};

export const UnChecked = Template.bind({});
UnChecked.args = {
  id: 'checker-unchecked',
  label: '체크 안함',
};

export const Checked = Template.bind({});
Checked.args = {
  id: 'checker-checked',
  label: '체크 함',
};

export const PinLoading = Template.bind({});
PinLoading.args = {
  id: 'pin-loading',
  label: '로딩 중...',
};

export const PinDeactive = Template.bind({});
PinDeactive.args = {
  id: 'pin-deactive',
  label: '핀 비활성',
};

export const PinActive = Template.bind({});
PinActive.args = {
  id: 'pin-active',
  label: '핀 활성',
};

export const ToggleButton = Template.bind({});
ToggleButton.args = {
  id: 'toggleButton-closed',
  label: '메뉴 열림',
};

export const ToggleButtonOpened = Template.bind({});
ToggleButtonOpened.args = {
  id: 'toggleButton-opened',
  label: '메뉴 닫힘',
};

export const Logo = Template.bind({});
Logo.args = {
  id: 'logo-light',
  label: '로고 (라이트 버전)',
};

export const LogoDark = Template.bind({});
LogoDark.args = {
  id: 'logo-dark',
  label: '로고 (다크 버전)',
};
LogoDark.parameters = {
  backgrounds: {
    default: 'dark',
    values: [{ name: 'dark', value: '#111' }],
  },
};

export const TaskListEmpty = Template.bind({});
TaskListEmpty.args = {
  id: 'taskList-empty',
  label: '텅 빈 목록',
  width: 30,
  height: 42,
};

export const TaskListError = Template.bind({});
TaskListError.args = {
  id: 'taskList-error',
  label: '데이터 패치 실패',
  width: 30,
  height: 42,
};
