import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import Img from 'gatsby-image'

import Post from 'templates/Post'
import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Hero from 'components/Hero'

import Icon from 'components/Icon'

const BlogIndex = ({ data, location }) => {
  const posts = get(data, 'remark.posts')
  const profile = get(data, 'profile')
  const work1 = get(data, 'work1.childImageSharp.sizes')
  const work2 = get(data, 'work2.childImageSharp.sizes')
  const back1 = get(data, 'back1.childImageSharp.sizes')
  const back2 = get(data, 'back2.childImageSharp.sizes')
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />
      <Hero>
        <div className="row">
          <div className="col-md-6 my-auto">
            <h1>&lt;h1&gt;chrisgreen.dev&lt;/h1&gt;</h1>
            <p>console.log($wittyDescription);</p>
          </div>
          <div className="col-md-6">
            <img src="/img/chris.png" className="hero-img" />
          </div>
        </div>
      </Hero>
      {/* {posts.map(({ post }, i) => (
        <Post
          data={post}
          options={{
            isIndex: true,
          }}
          key={i}
        />
      ))} */}
      <section className="text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6" style={{ 'text-align': 'left' }}>
              <h1>hi.</h1>
              <p>
                I'm Chris Green. I've been developing websites since I was 8
                years old, poring over an HTML3 book, trying to figure out how
                to show the world my spinning gif's and bitchin' &lt;blink&gt;
                tags.
              </p>
              <p>
                Since then, I've fallen in love with modern web design,
                including HTML5, CSS3, Node.js and a bunch of other
                technologies. And I'd love to design your website for you.
              </p>
            </div>
            <div className="col-md-6">
              <img src="/img/undraw_designer_kcp7.png" />
              {/* <a
                href="https://twitter.com/its_chris_green"
                className="twitter-follow-button"
                data-show-count="false"
              >
                Follow @its_chris_green
              </a> */}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-heading">PROGRAMMING WITH</h2>
              <hr className="border-white" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-lg-4 col-6">
              <Icon title="HTML" name="html5" />
              <h3>HTML</h3>
            </div>
            <div className="col-lg-4 col-6">
              <Icon title="JavaScript" name="js" />
              <h3>Javascript</h3>
            </div>
            <div className="col-lg-4 col-6">
              <Icon title="React.js" name="react" />
              <h3>React.js</h3>
            </div>
            <div className="col-lg-4 col-6">
              <Icon title="Node.js" name="node" />
              <h3>Node.js</h3>
            </div>
            <div className="col-lg-4 col-6 ">
              <Icon title="PHP" name="php" />
              <h3>PHP</h3>
            </div>
            <div className="col-lg-4 col-6 ">
              <div
                data-icon="("
                style={{ 'font-size': '42px', 'margin-bottom': '13px' }}
                className="icon"
                title="Azure"
              />
              <h3>Azure</h3>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="features" className="text-center jumboimage">
        <Img sizes={back1} className="cover-image" />
        <div className="container">
          <div className="row cover-over">
            <div className="col-md-12 text-left">
              <h2 className="section-heading">Features</h2>
              <p>
                I'm a front-end engineer in Japan 🗼
                <br />
                Used to be a designer of furniture and architecture.
                <br />
              </p>
              <li>2013 ~ 2017: J-CAST News</li>
              <li>2017 ~ : Recruit Lifestyle</li>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section
        className="bg-primary text-white text-center color-inverse"
        id="concept"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-heading">WORKS</h2>
              <hr className="border-white" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 slide-left" data-emergence="hidden">
              <Img sizes={work1} />
              <p>Yomu</p>
            </div>
            <div className="col-md-6 slide-right" data-emergence="hidden">
              <Img sizes={work2} />
              <p>Detector</p>
            </div>
          </div>
        </div>
      </section> */}

      <section id="repos">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 text-left">
              <h2 className="section-heading">Repositories</h2>
              <p>
                <a href="https://github.com/chrisgreen89/">Link</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
    profile: file(name: { eq: "profile" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    work1: file(name: { eq: "work1" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    work2: file(name: { eq: "work2" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    work3: file(name: { eq: "work3" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    back1: file(name: { eq: "back1" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    back2: file(name: { eq: "back2" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`

// remark: allMarkdownRemark(
//   sort: { fields: [frontmatter___date], order: DESC }
// ) {
//   posts: edges {
//     post: node {
//       html
//       frontmatter {
//         layout
//         title
//         path
//         category
//         tags
//         description
//         date(formatString: "YYYY/MM/DD")
//         image {
//           childImageSharp {
//             fixed(width: 500) {
//               ...GatsbyImageSharpFixed_withWebp
//             }
//           }
//         }
//       }
//     }
//   }
