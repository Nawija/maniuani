import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.css";

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        {
            allDatoCmsSlajdy {
                edges {
                    node {
                        img {
                            gatsbyImageData(height: 600)
                        }
                    }
                }
            }
        }
    `);
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 6500,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <Layout>
                <Slider {...settings} className="relative overflow-hidden max-w-[2200px] mx-auto">
                    {data.allDatoCmsSlajdy.edges.map(({ node }) => (
                        <GatsbyImage
                            className="scale-up-top"
                            loading="eager"
                            image={getImage(node.img)}
                            alt="lancuckiesady"
                        />
                    ))}
                </Slider>
            </Layout>
        </>
    );
};

export default IndexPage;

export const Head = () => <Seo title="Animani" description="Animani" />;
