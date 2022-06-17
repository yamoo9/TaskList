import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@/styles/theme';

const { colors } = theme;

export const componentStyle = css`
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  margin: 0;
`;

export const Face = styled.img`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  vertical-align: middle;
  border-radius: 50%;
  border: 1px solid ${colors.Primary[100]};
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: ${colors.Primary[300]};
  }
`;

export const Name = styled.span`
  color: ${colors.Primary[200]};
  font-size: 12px;
`;
