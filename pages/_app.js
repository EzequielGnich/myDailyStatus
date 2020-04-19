import React from "react";
import "../styles/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen container mx-auto">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
