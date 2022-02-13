import type { MetaFunction } from 'remix';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import Head from './components/head';
import { Wrapper } from './components/layout';

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
        <Wrapper>
          <Outlet />
        </Wrapper>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};

export default App;
