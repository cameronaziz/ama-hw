import type { MetaFunction } from 'remix';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import { ThemeProvider } from 'styled-components';
import Head from './components/head';
import { Wrapper } from './components/layout';
import GlobalStyle from './content/globalStyle';
import theme from './content/theme';

export const meta: MetaFunction = () => ({
  title: 'Anne-Marie Albract and Hampton Webb'
});

export const links = () => ([
  {
    rel: 'stylesheet',
    href: 'https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css',
  }
]);

const App = () => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />

        <Head />

        {typeof document === 'undefined'
          ? '__STYLES__'
          : null
        }
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Wrapper>
            <Outlet />
          </Wrapper>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};

export default App;
