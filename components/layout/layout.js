// import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Link from "next/link";
import { Container, HeaderWrap, WrapLogo, WrapLinks, WrapLink } from "./styles";

// import "./layout.css";
// import Footer from "../footer/footer";
// import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header siteTitle={`Title`} /> */}
      <div>
        <HeaderWrap>
          <Container>
            <Link href="/">
              <WrapLogo>RETRO ZADAR</WrapLogo>
            </Link>
            <WrapLinks>
              <Link href="/blog">
                <WrapLink>Blog</WrapLink>
              </Link>
              <Link href="/mapa">
                <WrapLink>Mapa</WrapLink>
              </Link>
            </WrapLinks>
          </Container>
        </HeaderWrap>
        <main>{children}</main>

        {/* <Footer /> */}
      </div>
    </>
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Layout;
