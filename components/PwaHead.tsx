export function PwaHead() {
  return (
    <>
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      <link rel="mask-icon" href="/b/cap26-icon.svg" color="#d89b57" />
      <meta name="application-name" content="Cap26" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Cap26" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#0d0d12" />
      <meta name="msapplication-config" content="none" />

      <script
        dangerouslySetInnerHTML={{
          __html: `if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').catch(function () {})
  })
}`,
        }}
      />
    </>
  )
}
