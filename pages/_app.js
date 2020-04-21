import React from "react";
import "../styles/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthProvider } from "../lib/authContext";

const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <div>
        <Header />
        <main className="min-h-screen container mx-auto">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
