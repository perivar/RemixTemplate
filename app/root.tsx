import { LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from "@remix-run/react";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";

import { themeSessionResolver } from "./sessions.server";

import "./tailwind.css";

import clsx from "clsx";

// https://gist.github.com/keepforever/43c5cfa72cad8b1dad2f3982fe81b576?permalink_comment_id=5117253#gistcomment-5117253

// Return the theme from the session storage using the loader
export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useRouteLoaderData<typeof loader>("root");

  const theme = data?.theme ?? null;

  return (
    <ThemeProvider specifiedTheme={theme} themeAction="/action/set-theme">
      <HTML lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <PreventFlashOnWrongTheme ssrTheme={Boolean(theme)} />
          <Links />
        </head>
        <body>
          {/* children will be the root Component, ErrorBoundary, or HydrateFallback */}
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </HTML>
    </ThemeProvider>
  );
}

function HTML({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const [theme] = useTheme();

  return (
    <html className={clsx(theme, className)} {...props}>
      {children}
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
