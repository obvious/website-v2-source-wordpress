import React from "react"
// import { Link } from "gatsby"

import Layout from "../layouts/index"
import ArticleCard from "../components/ArticleCard"
import StackedImage from "../components/StackedImage"
import Colophon from "../components/Colophon"

export default () => (
  <Layout>
    <div className="py-20 flex">
      <div className="flex-col flex inline-flex w-2/5">
        <div className="w-48">
          <StackedImage className="" image="../images/image.png" />
        </div>
        <h3 className="text-white font-sans font-medium leading-tight text-2xl">
          User Research & the Next Billion Stories
        </h3>
        <p className="font-serif text-gray-300 mt-4 leading-snug">
          A fresh approach to context and location of those just coming online.
          Here we chronicle the learnings, insights and processes that we’ve
          learnt along the way
        </p>
        <Colophon
          curationBy="Padmini Ray Murray"
          illustrationBy="Chippy Robin"
        />
      </div>
      <div className="w-3/5 pl-16">
        <ArticleCard
          title="A day in the life of a Simple engineer"
          excerpt="When I joined Obvious, Simple — an open-source app for clinicians to track patients with high blood pressure — was in beta, and since then has been at the heart of my work. I’ve been working on the app for more than a year now, and it has been quite a..."
          date="January 8, 2019"
          author="Sanchita Agarwal"
        />
        <ArticleCard
          title="A day in the life of a Simple engineer"
          excerpt="When I joined Obvious, Simple — an open-source app for clinicians to track patients with high blood pressure — was in beta, and since then has been at the heart of my work. I’ve been working on the app for more than a year now, and it has been quite a..."
          date="January 8, 2019"
          author="Sanchita Agarwal"
        />
        <ArticleCard
          title="A day in the life of a Simple engineer"
          excerpt="When I joined Obvious, Simple — an open-source app for clinicians to track patients with high blood pressure — was in beta, and since then has been at the heart of my work. I’ve been working on the app for more than a year now, and it has been quite a..."
          date="January 8, 2019"
          author="Sanchita Agarwal"
        />
      </div>
    </div>
  </Layout>
)
