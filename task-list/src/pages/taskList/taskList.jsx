import { css, ThemeProvider } from '@emotion/react';
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

  const [currentTheme, setCurrentTheme] = useState('light');
  const { data: theme } = useFetch(`/api/theme/${currentTheme}.json`);

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
    <ThemeProvider theme={theme ?? {}}>
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
        <div
          css={css`
            position: fixed;
            top: 30px;
            right: 30px;
          `}
        >
          <button
            css={css`
              cursor: pointer;
              border: 0;
              border-radius: 4px;
              padding: 0.82em 0.96em;
              &:hover {
                background: ${theme?.primary[700].value};
                color: ${theme?.primary[100].value};
              }
            `}
            onClick={() =>
              setCurrentTheme(currentTheme.includes('light') ? 'dark' : 'light')
            }
          >
            change theme
          </button>
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              width: 88px;
              height: 88px;
              margin: 20px auto 0;
              border-radius: 50%;
              background: ${theme?.primary[500].value};
              color: ${theme?.bg.default.value};
              text-transform: uppercase;
            `}
          >
            {currentTheme}
          </div>
        </div>
      </TaskBoxProvider>
    </ThemeProvider>
  );
}
