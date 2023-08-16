import Layout from "../layout";
import "../public/assets/scss/admin.scss";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/index";
import "./styles.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <title>Sheltos - Admin dashboard page</title>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700,700i,800,800i"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i,700,700i"
            rel="stylesheet"
          />
        </Head>
        {getLayout(<Component {...pageProps} />)}
        <ToastContainer theme="light" />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
