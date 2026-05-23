import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Erikson Wander — Psicólogo, Escritor e Mentor" },
      { name: "description", content: "Site oficial de Erikson Wander. Psicólogo clínico, escritor, mentor, professor e perito." },
      { name: "author", content: "Erikson Wander" },
      { property: "og:title", content: "Erikson Wander — Psicólogo, Escritor e Mentor" },
      { property: "og:description", content: "Site oficial de Erikson Wander. Psicólogo clínico, escritor, mentor, professor e perito." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Erikson Wander — Psicólogo, Escritor e Mentor" },
      { name: "twitter:description", content: "Site oficial de Erikson Wander. Psicólogo clínico, escritor, mentor, professor e perito." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dbb454d9-f81d-4313-946d-1341b2cdd808/id-preview-71baf876--c737a311-605b-4944-911d-254c35978cde.lovable.app-1779553479574.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dbb454d9-f81d-4313-946d-1341b2cdd808/id-preview-71baf876--c737a311-605b-4944-911d-254c35978cde.lovable.app-1779553479574.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
