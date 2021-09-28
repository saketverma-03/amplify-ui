import Head from 'next/head';
import "amplify-docs/src/styles/styles.css";
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Amplify UI</title>
      </Head>

      <Component {...pageProps} />

      <script src="https://cdn.jsdelivr.net/npm/docsearch.js@2.6.3/dist/cdn/docsearch.min.js"></script>
      <script src="https://a0.awsstatic.com/s_code/js/3.0/awshome_s_code.js"></script>
      <script src="/scripts/shortbreadv1.js"></script>
    </>
  );
}

export default MyApp;
