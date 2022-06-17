import React from 'react';
import { css } from '@emotion/react';
import { elementType, number, bool, oneOfType, string } from 'prop-types';
import { componentStyle, Face, Name } from './avatar.styled';
import { theme } from '@/styles/theme';

/* -------------------------------------------------------------------------- */

export function Avatar({
  as: Component,
  loading,
  src,
  alt,
  name,
  size,
  ...restProps
}) {
  return (
    <Component css={componentStyle} {...restProps}>
      {loading ? (
        <>
          <span
            css={css`
              width: 24px;
              height: 24px;
              background: ${theme.colors.Primary[50]};
              border-radius: 50%;
            `}
          />
          <span
            css={css`
              width: 47px;
              height: 14px;
              background: ${theme.colors.Primary[50]};
            `}
          />
        </>
      ) : (
        <>
          <Face src={src} alt={alt} size={size} />
          {name && <Name>{name}</Name>}
        </>
      )}
    </Component>
  );
}

Avatar.defaultProps = {
  as: 'figure',
  loading: true,
  size: 24,
  alt: '',
};

Avatar.propTypes = {
  /** 렌더링 할 요소 타입 */
  as: oneOfType([string, elementType]),
  /** 로딩 상태 */
  loading: bool,
  /** 아바타 이미지 경로 */
  src: string.isRequired,
  /** 아바타 이미지 대체 텍스트 (name 값이 없을 경우, 아바타 이름 입력 필요) */
  alt: string,
  /** 아바타 이름 */
  name: string,
  /** 아바타 크기 */
  size: number,
};
