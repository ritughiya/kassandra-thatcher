//Footer.js

/**
 * @jest-environment jsdom
 */

import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import PortableText from "@sanity/block-content-to-react";
import Script from 'next/script'
import Klaviyo from "./Klaviyo.js";


const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
  marks: {
    link: ({ mark, children }) => {
      // Read https://css-tricks.com/use-target_blank/
      const { blank, href } = mark;
      return blank ? (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
  },
};

const Footer = (props) => {
  const [klaviyo, setKlaviyo] = useState('');
  const klaviyoKey = Math.floor(Math.random() * 100);

  useEffect(() => {
console.log('change')

console.log(klaviyoKey)

setKlaviyo(klaviyoKey);
  }, []);


  return (
    <div>
      <div className="Footerexpanded">
        <div className="stacked">
        <div className="flex text">
          <div className="subtext">
            <PortableText blocks={props.notes} serializers={serializers} />{" "}
          </div>
          <div className="links">
            <div>
              <PortableText
                blocks={props.instagram}
                serializers={serializers}
              />
            </div>
            <div>
              <PortableText blocks={props.email} serializers={serializers} />
            </div>
            <div>
              <PortableText
                blocks={props.privacyPolicy}
                serializers={serializers}
              />
            </div>
          </div>
        </div>
        <div className="formblock">
          <div className="e"></div>
          <div className="form">
          <div className="signup">Newsletter Sign Up</div>
        <Klaviyo/>
        </div>
        </div>
        </div>


        <div className="flexbetween">
          <div className="footerlogo">{props.title}</div>
          <div className="credits">
            <PortableText blocks={props.credits1} serializers={serializers} />
            <PortableText blocks={props.credits2} serializers={serializers} />
          </div>
        </div>
      </div>

    </div>
    
  );
};

export default Footer;
