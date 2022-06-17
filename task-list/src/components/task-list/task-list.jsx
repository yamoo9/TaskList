import React from 'react';
import {
  arrayOf,
  bool,
  elementType,
  oneOfType,
  shape,
  string,
} from 'prop-types';
import { css } from '@emotion/react';
import { TaskItem, SVGIcon } from '@/components';
import { errorStyle, loadingStyle } from './task-list.styled';

/* -------------------------------------------------------------------------- */

export function TaskList({
  as: Component,
  loading,
  error,
  items,
  visibleArchived,
  ...restProps
}) {
  if (loading) {
    items = Array(4).fill(null);
  }

  if (!loading && items[0] !== null) {
    items = [
      ...items.filter((item) => item.pinned),
      ...items.filter((item) => !item.pinned),
    ];

    if (!visibleArchived) {
      items = items.filter((item) => !item.archived);
    }
  }

  return (
    <Component
      css={css`
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: stretch;
        gap: 12px;
      `}
      {...restProps}
    >
      {error ? (
        <TaskList.Error />
      ) : items.length === 0 ? (
        <TaskList.Loading />
      ) : (
        items.map((item, index) => (
          <TaskItem
            key={item?.id ?? index}
            id={item?.id}
            loading={loading}
            pinned={item?.pinned}
            archived={item?.archived}
            headline={item?.headline}
            description={item?.description}
            avatar={
              item?.auther
                ? { src: item.auther.avatar, name: item.auther.name }
                : { src: '', name: '' }
            }
          />
        ))
      )}
    </Component>
  );
}

TaskList.defaultProps = {
  as: 'div',
  loading: false,
  error: false,
  items: [],
  visibleArchived: false,
};

TaskList.propTypes = {
  /** 렌더링 할 요소 타입 */
  as: oneOfType([string, elementType]),
  /** 로딩 상태 */
  loading: bool,
  /** 오류 상태 */
  error: bool,
  /** 렌더링 할 아이템 리스트(배열) */
  items: arrayOf(shape(TaskItem.propTypes)),
  /** 아카이브 된 아이템 표시 설정 */
  visibleArchived: bool,
};

/* -------------------------------------------------------------------------- */

TaskList.Error = () => (
  <div role="alert" css={errorStyle}>
    <SVGIcon id="taskList-error" width={30} height={42} label="" />
    <h3>문제가 발생했습니다!</h3>
    <p>
      신속히 문제를 찾아 해결하겠습니다.
      <br />
      불편을 드려 죄송합니다.
    </p>
  </div>
);

TaskList.Loading = () => (
  <div css={loadingStyle}>
    <SVGIcon id="taskList-empty" width={30} height={42} label="" />
    <h3>수행할 작업이 없습니다.</h3>
    <p>새로운 일을 시작해보는건 어때요? 😃</p>
  </div>
);
