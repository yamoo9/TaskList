import { number, bool, func, oneOf } from 'prop-types';
import { css } from '@emotion/react';
import { SVGIcon } from '@/components';

/* -------------------------------------------------------------------------- */

const getLabel = (type) => {
  switch (type) {
    case 'active':
      return '핀(고정) 비활성';
    case 'deactive':
      return '핀(고정) 활성';
    default:
      return '로딩 중...';
  }
};

/* -------------------------------------------------------------------------- */

export function PinButton({ loading, type, size, onPin, ...restProps }) {
  let typeLabel = getLabel(type);

  return (
    <button
      type="button"
      css={css`
        cursor: pointer;
        border: 0;
        background: none;
        width: ${size}px;
        height: ${size}px;
        padding: 0;
      `}
      title={typeLabel}
      onClick={onPin}
      {...restProps}
    >
      <SVGIcon id={`pin-${loading ? 'loading' : type}`} label={typeLabel} />
    </button>
  );
}

PinButton.defaultProps = {
  loading: true,
  type: 'loading',
  size: 24,
};

PinButton.propTypes = {
  /** 로딩 상태 */
  loading: bool,
  /** 버튼 타입 */
  type: oneOf(['loading', 'deactive', 'active']),
  /** 버튼 크기 */
  size: number,
  /** 핀 이벤트 핸들러 */
  onPin: func,
};
