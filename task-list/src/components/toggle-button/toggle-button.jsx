import { css } from '@emotion/react';
import { bool, number, func, string, oneOfType, exact } from 'prop-types';
import { SVGIcon } from '../svgicon/svgicon';

/* -------------------------------------------------------------------------- */

export function ToggleButton({ open, size, labels, onToggle, ...restProps }) {
  let buttonLabel = open ? labels.opened : labels.closed;
  let buttonSize = typeof size === 'number' ? `${size}px` : size;

  return (
    <button
      type="button"
      title={buttonLabel}
      css={css`
        cursor: pointer;
        width: ${buttonSize};
        height: ${buttonSize};
        border: 0;
        padding: 0;
        background: none;
      `}
      onClick={onToggle}
      {...restProps}
    >
      <SVGIcon
        id={`toggleButton-${open ? 'opened' : 'closed'}`}
        label={buttonLabel}
        size={size}
      />
    </button>
  );
}

ToggleButton.defaultProps = {
  open: false,
  size: 24,
  labels: {
    opened: '메뉴 닫기',
    closed: '메뉴 열기',
  },
};

ToggleButton.propTypes = {
  /** 메뉴 열림/닫힘 상태 */
  open: bool,
  /** 버튼 크기 */
  size: oneOfType([number, string]),
  /** 버튼 레이블 */
  labels: exact({
    opened: string,
    closed: string,
  }),
  /** 토글 이벤트 핸들러 */
  onToggle: func,
};
