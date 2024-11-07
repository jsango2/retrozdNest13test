// import "../styles/index.css";
// import { motion as m } from "framer-motion"
// // import "../components/layout/layout.css";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;

import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { GoogleTagManager } from "@next/third-parties/google";
import { useState } from "react";

import "../styles/index.css";
import "../styles/index2.css";

function MyApp({ Component, pageProps, router }) {
  const startIndex = 2;

  return (
    <div className="app-wrap">
      <Component {...pageProps} />
      <GoogleTagManager gtmId={`G-4640T6WR87`} />
    </div>
  );
}
export default MyApp;
