import React from "react"

import ArticleLayout from "../layouts/ArticleLayout"
// import Quote from "../components/Quote"
import ArticleTitle from "../components/ArticleTitle"
import ArticleSubtitle from "../components/ArticleSubtitle"
// import PopupStatistic from "../components/PopupStatistic"

export default ({ data }) => {
  const {
    WP: { article },
  } = data
  return (
    <ArticleLayout>
      <main className="container px-20 py-20">
        <ArticleTitle>{article.articles.metadata.title}</ArticleTitle>
        <ArticleSubtitle>{article.articles.metadata.subtitle}</ArticleSubtitle>
        <div className="my-4">
          <span className="text-black uppercase font-sans font-semibold text-xs">
            {article.articles.metadata.datepublished}
          </span>
          <span className="text-world font-serif italic text-xs"> by </span>
          <span className="uppercase font-sans font-semibold text-xs text-bittersweet">
            {article.articles.metadata.author}
          </span>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: article.content,
          }}
        >
          {/* <p className="font-serif text-sm">
            We created a digital + physical + service product for improving
            hypertension control across populations. This is how clinicians use
            Simple:
          </p>
          <ol className="font-serif text-sm">
            <li>
              Record patient blood pressures and medications over time to
              improve treatment.
            </li>
            <li>Make sure patients keep getting their BP checked regularly.</li>
          </ol>
          <Quote author="N Chandrashekhar Ramanujam" bio="CEO, Gojhuk">
            The strategy was to do this well at the individual healthcare
            facility level and then to scale it up to districts, states, all of
            India and other countries.
          </Quote>
          <p className="font-serif text-sm">
            We started the project with a design sprint, where we ideated,
            arrived at a concept, and prototyped and validated it with real
            clinicians in a week. Our team then designed an engineered a
            functional prototype Android app in the next 45 days. We took that
            prototype to the rural Punjab and tested it with real users. In just
            5 months, Simple had launched in 20 clinics and was recording real
            patient data in live clinical environments. Simple is now being used
            at healthcare facilties in urban clinics to primary healthcare
            centres in remote villages in India. Our work is already making a
            positive impact at the population level.
          </p>
          <div>
            <span className="text-black font-light font-sans text-5xl">
              $1 M
            </span>
            <span className="font-sans font-semibold text-xs text-world tracking-wide">
              Revenue in the first year of starting operations
            </span>
          </div>
          <div>
            <span className="text-black font-light font-sans text-5xl">
              $1 M
            </span>
            <span className="font-sans font-semibold text-xs text-world tracking-wide">
              Patients in the eighty months
            </span>
          </div>
          <div>
            <span className="text-black font-light font-sans text-5xl">
              $1 M
            </span>
            <span className="font-sans font-semibold text-xs text-world tracking-wide">
              To go from the first prototype to launch
            </span>
          </div>
          <p className="font-serif text-sm">
            Simple competes with and is quicker than the existing pen and paper
            system, even for first time smartphone users. Previously, clinicians
            spent a couple of minutes just to find each patient’s treatment card
            from a stack of hundreds, but now users only had to scan a QR code
            to look up their record.
          </p>
          <div>
            <PopupStatistic title="Paper Card System" statistic="4 min" />
            <PopupStatistic title="Simple" statistic="24 sec" />
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <p className="font-serif text-sm">
            Nurses and doctors are using Simple everyday to save lives and are
            proud of their contributions to this large mission. They can now
            spend more time actually treating and counselling patients, rather
            than recording data.
          </p> */}
        </div>
      </main>
    </ArticleLayout>
  )
}

export const query = graphql`
  query($id: ID!) {
    WP {
      article(id: $id) {
        id
        title
        content
        articles {
          metadata {
            author
            datepublished
            subtitle
            title
          }
        }
      }
    }
  }
`
