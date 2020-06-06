import * as React from 'react';
import { Helmet } from 'react-helmet';
// import 'typeface-inter';

export default function Styling() {
  return (
    <Helmet>
      {/* For 100%, serve fonts locally */}
      {/* may be possible to install from typefaces package */}
      {/* https://github.com/ajmalafif/typeface-inter */}
      <link
        rel="preconnect"
        href="https://rsms.me/"
        crossorigin
      />
      <link
        rel="preload"
        href="https://rsms.me/inter/inter.css"
        as="style"
        onload="this.rel='stylesheet'"
      />
      <noscript>
        {`
        <link
          rel="stylesheet"
          href="https://rsms.me/inter/inter.css"
        />
        `}
      </noscript>
    </Helmet>
  );
}
