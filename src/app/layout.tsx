import Providers from "@/app/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Meta = () => {
    return (
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, interactive-widget=resizes-content"
      />
    );
  };
  const ManifestAndIcons = () => {
    return (
      <>
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </>
    );
  };
  const Head = () => {
    return (
      <head>
        <Meta />
        <ManifestAndIcons />
      </head>
    );
  };

  return (
    <html lang="en">
      <Head />

      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
