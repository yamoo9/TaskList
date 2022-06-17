import { css } from '@emotion/react';
import { theme } from '@/styles/theme';

export const errorStyle = css`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  min-height: 560px;

  & * {
    margin: 0;
  }

  svg {
    margin-bottom: 12px;
  }

  h3 {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 700;
    color: ${theme.colors.Primary[300]};
  }

  p {
    font-size: 14px;
    line-height: 1.5;
    text-align: center;
    color: ${theme.colors.Primary[200]};
  }
`;

export const loadingStyle = css`
  ${errorStyle};
  svg {
    margin-bottom: 24px;
  }
`;
