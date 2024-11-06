// import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Link from "next/link";
import { WrapFooter, Copyright } from "./styles";
import { Container, WrapLink, WrapLinks, WrapLogo } from "../layout/styles";

const Footer = ({ isMap }) => {
  return (
    <WrapFooter isMap={isMap}>
      <Container>
        <Link href="/">
          <WrapLogo isMap={isMap}>RETRO ZADAR</WrapLogo>
        </Link>
        {/* <WrapLinks isFooter>
    
          <Copyright></Copyright>
        </WrapLinks> */}
      </Container>
    </WrapFooter>
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Footer;
