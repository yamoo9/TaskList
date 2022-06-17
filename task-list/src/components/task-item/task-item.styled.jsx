import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

const { colors, fontSize } = theme;

export const Headline = styled.h2`
  margin: 0;
  font-size: ${fontSize.base};
  font-weight: 700;
  line-height: 1;
  color: ${colors.Primary[300]};
  ${({ $loading }) => {
    return $loading
      ? {
          background: theme.colors.Primary[50],
          width: '100%',
          height: '24px',
          fontSize: 0,
        }
      : null;
  }}
`;

export const Description = styled.p`
  margin: 8px 0 0;
  font-size: ${fontSize.sm};
  font-weight: 400;
  line-height: 1.5;
  color: ${colors.Primary[200]};
  ${({ $loading }) => {
    return $loading
      ? {
          background: theme.colors.Primary[50],
          height: '16px',
          fontSize: 0,
        }
      : null;
  }}
`;
