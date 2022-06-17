import { Global, css } from '@emotion/react';
import { theme } from '@/styles/theme';

export const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        background: #fff;
        color: #111;
      }

      code {
        display: inline-block;
        background: #111;
        padding: 0.4em 0.8em;
      }

      #root {
        min-height: 100vh;
      }

      .upgradeBrowserInfo {
        --transparent-black: rgba(0 0 5 / 78%);

        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        background: linear-gradient(
            to bottom,
            var(--transparent-black),
            var(--transparent-black)
          ),
          url('https://images.pexels.com/photos/4091/woman-dropped-fail-failure.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
            center / cover;
        line-height: 1.75;
        text-align: center;
      }

      .upgradeBrowserInfo h1 {
        font-size: 3rem;
        font-weight: 300;
        margin-bottom: 0;
      }

      .upgradeBrowserInfo [href] {
        color: #ddd;
        text-decoration: none;
        padding-bottom: 0.05em;
        border-bottom: 1px solid currentColor;
      }

      :focus {
        outline: 3px solid ${theme.colors.focus[50]};
        outline-offset: 4px;
        border-radius: 3px;
      }

      :focus:not(:focus-visible) {
        outline: none;
        outline-offset: initial;
        border-radius: initial;
      }
    `}
  />
);
