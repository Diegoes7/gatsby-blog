import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"


const ThirdPage = () => (
  <Layout>
    <h1>Hello From Third Page</h1>
    <h2>Story starts here.................</h2>
    <div style={{ maxWidth: `200px`, marginBottom: `0.90rem` }}>
      <Image />
    </div>
  </Layout>
)

export default ThirdPage
