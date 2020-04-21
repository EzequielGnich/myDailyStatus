import React from "react";
import "../styles/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthProvider } from "../lib/authContext";

const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <div className="h-screen flex flex-col justify-between">
        <Header />
        <main className="container mx-auto h-full">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
