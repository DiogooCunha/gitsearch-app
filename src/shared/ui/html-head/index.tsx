import { type ReactElement } from 'react';

const HTMLHead = (): ReactElement => {
  return (
    <>
      <title>Gitsearch</title>

      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content='Gitsearch' />
      <meta name='handheldFriendly' content='true' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta
        name='apple-mobile-web-app-status-bar-style'
        content='black-translucent'
      />

      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap'
        rel='stylesheet'
      />
    </>
  );
};

export default HTMLHead;
