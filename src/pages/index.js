import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Title = styled.h1`
  margin-top: 0;
  padding: 0 1rem;
  color: #808080;
  text-align: center;
  font-family: "Copse", serif;
`

const Accent = styled.strong`
  color: #58a8ff;
`

const IndexPage = () => (
  <Layout>
    <Seo title="Welcome" />
    <Title>
      <Accent>Trail</Accent> Making Test.
    </Title>
  </Layout>
)

export default IndexPage
