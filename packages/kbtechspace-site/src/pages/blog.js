import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import Layout from '../components/Layout/Layout'
import PageHeader from '../components/page-header/page-header'
import Card from '../components/Card/Card'
import SubscribeCard from '../components/SubscribeCard'

import '../pageCSS/blog.scss'

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
    headerImage: { sizes },
    kbImage,
  },
}) => {
  const [blogPosts, setBlogPosts] = useState([])
  useEffect(() => {
    // get data from medium api
    fetchMediumData()
  }, [])

  const fetchMediumData = async () => {
    const rawData = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@karthikbalaji99`
    )
    const { items } = await rawData.json()
    setBlogPosts(items)
  }

  return (
    <Layout pathname={'/blog/'}>
      <section>
        <PageHeader title="Blog" logo="fas fa-newspaper" />
        <section className="kbts-page-blog">
          {edges
            .filter(edge => !!edge.node.frontmatter.publishedDate) // You can filter your posts based on some criteria
            .map(edge => (
              <Card
                id={edge.node.id}
                origin="kb-techspace"
                authorImage={kbImage.sizes}
                authorName="Karthik Balaji"
                title={edge.node.frontmatter.title}
                thumbnail={edge.node.frontmatter.thumbnail}
                publishedDate={edge.node.frontmatter.publishedDate}
                updatedDate={edge.node.frontmatter.updatedDate}
                link={edge.node.frontmatter.path}
                tags={edge.node.frontmatter.tags}
                slug={edge.node.frontmatter.slug}
                readTime={edge.node.frontmatter.readTime}
              />
            ))}
          {blogPosts.map((blogPost, index) => (
            <Card
              // siteLogo={index === blogPosts.length - 1 ? sizes : null} // set site logo for last card only
              id={blogPost.guid}
              origin="medium"
              authorImage={kbImage.sizes}
              authorName="Karthik Balaji"
              title={blogPost.title}
              thumbnail={blogPost.thumbnail}
              publishedDate={blogPost.pubDate}
              updatedDate={blogPost.pubDate}
              link={blogPost.link}
              tags={blogPost.categories}
              slug=""
              readTime="3 min"
            />
          ))}
        </section>
      </section>
      <Subscribe>
        <SubscribeCard />
      </Subscribe>
    </Layout>
  )
}

export default Blog

export const BlogPageQuery = graphql`
  query BlogPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___publishedDate] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            publishedDate(formatString: "MMMM DD, YYYY")
            updatedDate(formatString: "MMMM DD, YYYY")
            path
            title
            tags
            thumbnail
            readTime
          }
        }
      }
    }

    headerImage: imageSharp(fluid: { originalName: { regex: "/logo/" } }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }

    kbImage: imageSharp(
      fluid: { originalName: { regex: "/karthikbalaji_transparent/" } }
    ) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

const Subscribe = styled.section`
  width: 50%;
  margin: auto;
  margin-bottom: 50px;
  margin-top: 100px;

  @media(max-width: 760px) {
    width: 90%;
  }
`
