import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Unna:ital,wght@1,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200&display=swap" />
          {/* Add other global stylesheets here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

