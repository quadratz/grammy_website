export default (
  { title, lang, children }: Lume.Data,
  helpers: Lume.Helpers,
) => (
  <html lang={lang}>
    <head>
      <meta charset="UTF-8" />
      <title>{title}</title>
    </head>
    <body class="my-class tw-prose tw-bg-slate-50 tw-font-sans un">
      {children}
    </body>
  </html>
);
