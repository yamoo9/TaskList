import { css } from '@emotion/react';
import { useState, useMemo } from 'react';
import { TaskBoxProvider } from '@/contexts';
import { LayoutBase } from '@/pages';
import { TaskList } from '@/components';
import { useFetch } from '@/hooks';

/* -------------------------------------------------------------------------- */

export default function TaskListPage(props) {
  const {
    loading,
    error,
    data: items,
    setData: setItems,
  } = useFetch('/api/taskList.json');

  /* ------------------------------------------------------------------------ */

  const [visibleArchived, setVisibleArchived] = useState(false);

  const headerProp = useMemo(
    () => ({
      open: visibleArchived,
      onToggle() {
        setVisibleArchived((prevState) => !prevState);
      },
      toggleButtonProps: {
        labels: {
          opened: '아카이브(보관)된 아이템 감춤',
          closed: '아카이브(보관)된 아이템 표시',
        },
      },
    }),
    [visibleArchived]
  );

  /* ------------------------------------------------------------------------ */

  const value = useMemo(
    () => ({
      updatePin(id) {
        setItems(
          items.map((item) => {
            if (item.id === id) item.pinned = !item.pinned;
            return item;
          })
        );
      },
      updateArchive(id) {
        setItems(
          items.map((item) => {
            if (item.id === id) item.archived = !item.archived;
            return item;
          })
        );
      },
    }),
    [items, setItems]
  );

  return (
    <TaskBoxProvider value={value}>
      <LayoutBase headerProps={headerProp} {...props}>
        <TaskList
          css={css`
            padding: 20px;
          `}
          loading={loading}
          error={error}
          items={items}
          visibleArchived={visibleArchived}
        />
      </LayoutBase>
    </TaskBoxProvider>
  );
}
