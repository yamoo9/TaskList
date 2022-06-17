import styled from '@emotion/styled';
import sprites from '@/assets/sprites/view/sprites.svg';
import { theme } from '@/styles/theme';

export const Wrapper = styled.span`
  display: inline-block;
  position: relative;
  ${({ $size }) => {
    if (typeof $size === 'number') {
      return {
        width: `${$size}px`,
        height: `${$size}px`,
      };
    }
    return {
      width: $size.includes('px') ? `${$size}px` : $size,
      height: $size.includes('px') ? `${$size}px` : $size,
    };
  }};
  background: ${({ $loading }) =>
    $loading ? theme.colors.Primary[50] : theme.colors.White};
  border-radius: 12px;

  :focus-within::before {
    outline: 3px solid ${theme.colors.focus[50]};
    border-radius: 6px;
  }

  & input {
    cursor: pointer;
    position: relative;
    z-index: 10;
    opacity: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${({ checked, $loading }) => {
        let id = 'checker-unchecked';
        if (checked) id = 'checker-checked';
        if ($loading) id = 'checker-loading';
        return `${sprites}#${id}`;
      }})
      center center / cover;
  }
`;
