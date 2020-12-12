import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import './side-menu.scss'

const SideMenuFooter = () => (
  <footer className="kbts-site-footer">
    <FollowMeText>Follow me on</FollowMeText>
    <div className="kbts-site-footer-social">
      <a
        style={{ color: '#153371' }}
        href="https://www.facebook.com/karthik.balaji.7121"
        target="_blank"
        rel="noopener"
      >
        <div className="kbts-site-footer-social-fb-icon" />
      </a>

      <a
        style={{ color: '#9C27B0' }}
        href="https://www.instagram.com/kb_gixxer/"
        target="_blank"
        rel="noopener"
      >
        <div className="kbts-site-footer-social-insta-icon" />
      </a>
      <a
        style={{ color: '#2196F3' }}
        href="https://twitter.com/karthikbalaji99"
        target="_blank"
        rel="noopener"
      >
        <div className="kbts-site-footer-social-twitter-icon" />
      </a>
      <a
        style={{ color: '#015079' }}
        href="https://www.linkedin.com/in/karthikbalaji9294"
        target="_blank"
        rel="noopener"
      >
        <div className="kbts-site-footer-social-linkedin-icon" />
      </a>
      <a
        style={{ color: '#87969a' }}
        href="https://github.com/karthikbalajikb"
        target="_blank"
        rel="noopener"
      >
        <div className="kbts-site-footer-social-github-icon" />
      </a>
    </div>
  </footer>
)

export default SideMenuFooter

const FollowMeText = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: center;
`
