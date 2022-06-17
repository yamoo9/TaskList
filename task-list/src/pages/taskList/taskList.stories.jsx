import { css } from '@emotion/react';
import { screen, userEvent } from '@storybook/testing-library';
import { hideNoControlWarning, designFigma } from '@/utils';
import TaskListPage from './taskList';

export default {
  title: 'TaskBox / Pages / TaskBox',
  component: TaskListPage,
  ...hideNoControlWarning(
    designFigma(
      'https://www.figma.com/file/qbQoxOz0eOlJIFTxgHlSUL/Task-List?node-id=0%3A1'
    )
  ),
};

export const Default = () => (
  <TaskListPage
    css={css`
      max-width: 420px;
      outline: 1px solid rgba(20 20 20 / 10%);
    `}
  />
);

Default.play = async () => {
  const delay = setTimeout;
  const taskListItems = await (await fetch('/api/taskList.json')).json();

  let randomIindex = Math.floor(Math.random() * taskListItems.length);
  let targetPinId = `pin-${taskListItems[randomIindex].id}`;
  const targetPin1 = await screen.findByTestId(targetPinId);

  taskListItems.splice(randomIindex, 1);

  randomIindex = Math.floor(Math.random() * taskListItems.length);
  targetPinId = `pin-${taskListItems[randomIindex].id}`;

  let targetCheckerId = `checker-${taskListItems[randomIindex].id}`;
  const targetPin2 = await screen.findByTestId(targetPinId);
  const targetChecker2 = await (
    await screen.findByTestId(targetCheckerId)
  ).querySelector('input');

  const button = screen.getByTestId('toggle-button');

  delay(() => userEvent.click(targetPin1), 1000);
  delay(() => userEvent.click(targetPin2), 2000);
  delay(() => userEvent.click(targetChecker2), 3000);
  delay(() => userEvent.click(button), 4000);
  delay(() => userEvent.click(button), 5000);
};
