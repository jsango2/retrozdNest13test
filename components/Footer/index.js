// import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Link from "next/link";
import { WrapFooter, FooterText, ContainerFooter } from "./styles";
import { Container, WrapLink, WrapLinks, WrapLogo } from "../layout/styles";

const Footer = ({ isMap }) => {
  return (
    <WrapFooter isMap={isMap}>
      <ContainerFooter>
        <Link href="/">
          <WrapLogo isMap={isMap}>RETRO ZADAR</WrapLogo>
        </Link>
        <FooterText>
          Retro Zadar nastoji točno navesti izvore fotografija te godinu
          nastanka. Ako korisnici imaju točnije informacije ili primijete
          pogreške, molimo da nam se jave, te ćemo rado napraviti potrebne
          ispravke.
          <br />
          <a href="mailto: retrozadar@gmail.com">
            <strong>retrozadar@gmail.com</strong>
          </a>
        </FooterText>
        {/* <WrapLinks isFooter>
    
          <Copyright></Copyright>
        </WrapLinks> */}
      </ContainerFooter>
    </WrapFooter>
  );
};

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default Footer;
