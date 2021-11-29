//Home page
import client from '../configs/contentfulClient'
import LoadingPage from '../components/LoadingPage'

const Home = ({ hero }) => {
  console.log(hero)

  if (!hero) {
    return <LoadingPage />
  }

  const { fields } = hero[0]

  return (
    <div className="homepage">
      <div className="container">
        <h1>{fields.title}</h1>
        <h2>{fields.subtitle}</h2>
        <hr />
        <p>{fields.shortDescription}</p>
        <hr />
        <a href={fields.curriculumPdf.fields.file.url} target="_blank">
          Download pdf
        </a>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // TRAER LOS DATOS DE LA API DE CONTENTFUL
  const hero = await client.getEntries({
    content_type: 'portfolioHero',
  })

  return {
    props: {
      hero: hero.items,
    },
    revalidate: 10,
  }
}

export default Home
