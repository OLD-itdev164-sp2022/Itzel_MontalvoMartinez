import React from 'react';
import { graphql } from 'gatsby';
import { Image } from 'rebass'
import Layout from '../components/layout';
import { H1 } from '../components/Heading'

const BlogPost = ({ data }) => {
    const { title, body, heroImage } = data.contentfulBlogPost;

    return (
        <Layout>
        <Image src={heroImage.fluid.src} />
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{_html: body.childMarkdownRemark._html}}></div>
        </Layout>
    );
}

export default BlogPost;

export const pageQuery = graphql`
    query blogPostQuery($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            slug
            body {
                childMarkdownRemark {
                    html
                }
            }
            heroImage {
                fluid(maxWidth: 960) {
                    src
                }
            }
        }
    }
`