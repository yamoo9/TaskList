import { css } from '@emotion/react';
import { theme } from '@/styles/theme';

const { colors, boxShadow } = theme;

export const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: ${colors.White};
  box-shadow: ${boxShadow.Shadow[100]};
`;
