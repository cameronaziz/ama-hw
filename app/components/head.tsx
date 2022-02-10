import { Fragment, VFC } from 'react';

const Head: VFC = () => {
  return (
    <Fragment>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="A college romance getting married April 1, 2023. No April Fools jokes allowed. " />
      <meta property="og:title" content="Anne-Marie and Hampton" />
      <meta property="og:image" content="images/open-graph/image.png" />
      <meta property="og:url" content="amahw.cameronaziz.com" />
      <meta property="og:site_name" content="" />
      <meta property="og:description" content="We are getting married on April 1, 2023. No April Fools jokes allowed." />
      <meta name="twitter:title" content="Anne Marie and Hampton" />
      <meta name="twitter:image" content="images/open-graph/twitter-image.png" />
      <meta name="twitter:url" content="amahw.cameronaziz.com" />
      <meta name="twitter:card" content="" />
      <link rel="shortcut icon" href="favicon.ico" />

      <link href="https://fonts.googleapis.com/css2?family=Quintessential" rel="stylesheet" />

      <link rel="stylesheet" href="css/animate.css" />
      <link rel="stylesheet" href="css/icomoon.css" />
      <link rel="stylesheet" href="css/bootstrap.css" />
      <link rel="stylesheet" href="css/superfish.css" />
      <link rel="stylesheet" href="css/magnific-popup.css" />
      <link rel="stylesheet" href="css/style.css" />
    </Fragment>
  );
};

export default Head;
