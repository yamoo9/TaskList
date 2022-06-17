import { string, number, oneOf, oneOfType } from 'prop-types';
import sprites from '@/assets/sprites/symbol/sprites.svg';

/* -------------------------------------------------------------------------- */

export const iconTypes = [
  'checker-loading',
  'checker-checked',
  'checker-unchecked',
  'pin-loading',
  'pin-active',
  'pin-deactive',
  'logo-dark',
  'logo-light',
  'toggleButton-closed',
  'toggleButton-opened',
  'taskList-empty',
  'taskList-error',
];

/* -------------------------------------------------------------------------- */

export function SVGIcon({ id, label, size, width, height, ...restProps }) {
  return (
    <svg
      role="img"
      aria-label={label}
      width={size ?? width}
      height={size ?? height}
      viewBox={`0 0 ${size || width} ${size || height}`}
      {...restProps}
    >
      <use href={`${sprites}#${id}`} />
    </svg>
  );
}

SVGIcon.defaultProps = {
  width: 24,
  height: 24,
  label: '',
};

SVGIcon.propTypes = {
  /** 아이콘 ID */
  id: oneOf(iconTypes).isRequired,
  /** 아이콘 레이블 (의미를 가질 경우 설정) */
  label: string,
  /** 아이콘 너비, 높이 일괄 설정 */
  size: oneOfType([number, string]),
  /** 아이콘 너비 설정 */
  width: oneOfType([number, string]),
  /** 아이콘 높이 설정 */
  height: oneOfType([number, string]),
};
