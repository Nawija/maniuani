import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";
import Rezerwation from "./rezerwation";

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Seovileo`} />
            <Rezerwation />
            <main className="w-full overflow-hidden min-h-screen relative">
                {children}
            </main>

            <Footer />
        </>
    );
};

export default Layout;
