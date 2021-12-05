//Home page
import client from '../configs/contentfulClient'
import LoadingPage from '../components/LoadingPage'
import { useRouter } from 'next/router'
//Hooks
import useScrollToTop from '../hooks/useScrollTop'

const Home = ({ hero }) => {
  // useScrollToTop()

  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  if (!hero) {
    return <LoadingPage />
  }

  const { fields } = hero[0]

  return (
    <div className="homepage page-container">
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
      <hr />
      <section>
        <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem,
          eveniet.
        </h2>

        <article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          porro tempora! Autem temporibus adipisci dicta nulla, iure illum,
          libero hic quis, nesciunt consequatur ipsam! Veritatis cum dolores
          assumenda fuga molestias, quam itaque fugiat aperiam quidem, vitae,
          vel nobis ipsum atque reprehenderit? Soluta placeat ullam officia
          veritatis neque, accusantium, recusandae dolorum odio ratione maiores
          laboriosam architecto, voluptate voluptatem perferendis nihil eveniet
          blanditiis cum assumenda exercitationem ipsa! Quasi aliquam
          reprehenderit at voluptatibus eum provident, dolore dolores iusto
          doloremque nobis rem non officia repellat explicabo accusantium
          debitis autem laboriosam similique vel! Cum, corporis laborum facilis
          modi omnis placeat sunt aliquam? Magnam aut voluptate fugit modi
          officia, est, laboriosam neque dolores voluptates quas repellat
          tempora commodi eveniet. Aliquam eum odio rerum hic ab, dolore placeat
          maxime deserunt animi dicta sit fuga eveniet tempore, laboriosam
          doloremque minus iusto molestias ad labore. Eaque voluptate
          reprehenderit aliquam voluptatum qui! Officiis numquam voluptatibus at
          mollitia quaerat quis sed incidunt laboriosam placeat, molestiae,
          nesciunt quas non rerum? At ea tempore eligendi omnis eum vitae
          explicabo magnam facere quaerat tempora neque dolorum quasi alias in
          blanditiis, nobis saepe. Numquam, quo. Veritatis nemo molestiae
          reprehenderit atque eos blanditiis minima laborum vitae eius
          doloremque iste recusandae quas unde rem possimus in aliquam, veniam
          adipisci eligendi laboriosam, sit exercitationem. Optio laborum
          reiciendis fuga perferendis, debitis error esse recusandae temporibus
          ad quis fugiat maiores tenetur, voluptas ut! Minus, modi repellendus.
          Est non explicabo facilis quaerat consequatur cupiditate velit
          perspiciatis quos praesentium voluptates architecto inventore
          voluptatibus, voluptatem commodi, maxime necessitatibus repellendus
          vero. Ipsa eaque a deserunt adipisci at eum architecto voluptas fugit
          iste placeat, molestias quia libero perspiciatis obcaecati nostrum
          animi error aperiam accusantium sed. Sunt magnam pariatur, cupiditate
          exercitationem provident nulla non asperiores ut tempora, doloremque
          praesentium! In aliquam doloribus, fugit deserunt saepe fugiat
          delectus ullam mollitia similique, velit iure quibusdam maxime
          blanditiis possimus. Corrupti hic explicabo facere at dolore soluta
          necessitatibus, voluptates similique dolorem fugit pariatur maiores
          deleniti earum? Dolore optio modi repudiandae magni distinctio
          aspernatur dicta ullam delectus enim quasi odit reiciendis unde quas
          omnis quibusdam nulla velit, consequatur nemo. Neque cupiditate
          praesentium exercitationem quisquam officiis, consectetur distinctio
          necessitatibus doloribus ab reiciendis, ex vitae cumque, quasi magni
          non provident accusantium quos alias beatae. Deleniti, neque.
          Recusandae quae eveniet itaque quos rerum, quod at quasi quia suscipit
          non saepe dignissimos temporibus exercitationem excepturi ipsum alias
          distinctio possimus dolorum? Eos tempore dolorum similique a
          distinctio nisi placeat vel quam amet ipsam quidem recusandae quaerat
          minima libero ab voluptate quae, quo consequuntur tempora odio. Quis
          quos nisi a ab amet facilis, repellendus consequuntur corporis
          sapiente. Temporibus eius consequatur praesentium. Adipisci repellat
          nobis eligendi et praesentium excepturi sint iusto dolorem cumque
          tempore recusandae nulla officiis obcaecati cupiditate, amet neque
          voluptatum. Consequuntur, doloribus iusto culpa facilis tenetur
          praesentium reprehenderit tempora error. Reprehenderit dignissimos
          nostrum voluptatibus libero nam, vel tempore itaque harum, qui
          molestias ullam, illum inventore facere debitis. Aperiam dolorem
          architecto aspernatur perspiciatis qui quia earum dicta vero. Commodi,
          animi aperiam. Laudantium libero ullam reiciendis, quas reprehenderit,
          quaerat repellat tempore suscipit quo soluta iure temporibus. Nostrum
          velit, at nisi repellendus delectus recusandae ut vitae quae
          necessitatibus error consectetur iure et sint tempore numquam modi
          odio! Quia, corporis distinctio commodi temporibus deserunt, deleniti
          asperiores aperiam adipisci atque impedit repellat? Veniam, sunt enim.
          Voluptatem nulla cumque iure pariatur, harum quisquam laboriosam atque
          delectus corrupti temporibus. Officia impedit recusandae aliquam modi
          inventore sit. Aut fugit recusandae quo eaque consectetur ipsum rem
          quas vel iure quis esse incidunt, at vitae eius dolorem magnam dicta
          unde alias quos aperiam pariatur rerum minima. Eligendi itaque
          expedita assumenda sint aliquam necessitatibus laborum eius minima
          quaerat placeat commodi blanditiis doloribus omnis facilis modi
          aperiam tempora velit, cum ut! Eius nobis ea earum deleniti illum
          dolorem, neque, doloremque aperiam tenetur nesciunt vero. Rerum quos
          nisi in molestias sunt fugit, itaque provident a earum obcaecati quam
          reiciendis? Distinctio, quam! Aperiam repellat, debitis ducimus
          voluptates, eveniet iusto quo nobis veritatis quos commodi vero
          quaerat iste possimus velit labore quam a cumque. Autem impedit qui,
          omnis ipsa praesentium neque cumque voluptatibus, expedita beatae
          fugit quas vero quo aliquid. Asperiores animi soluta natus sit? Ipsum,
          sapiente commodi! Dolorem maxime cum molestiae reiciendis ad eveniet
          quod deserunt, praesentium distinctio modi optio excepturi dicta
          blanditiis aliquid minima ut. Ut dignissimos blanditiis vel deserunt a
          eligendi architecto impedit sapiente temporibus ducimus modi
          reprehenderit eveniet amet possimus, explicabo commodi maxime numquam.
          Quibusdam vero debitis architecto est facilis aliquam numquam, illum
          fugiat voluptas beatae eos odit aut repudiandae quae eaque assumenda
          id ut odio, ipsam nostrum maxime omnis? Molestias odio, asperiores
          quis aut dicta quisquam maiores nostrum neque mollitia ea, eum amet
          aliquam earum architecto, ad vero ex facere voluptas consequatur
          corporis delectus. Iure dolore eius provident sapiente laborum
          quibusdam est velit perferendis libero ipsum quam, assumenda explicabo
          dicta! Amet minima ea dolorem ratione vero quisquam obcaecati saepe
          eligendi iusto quod libero doloremque assumenda, iure nisi incidunt
          optio quos itaque neque facere eaque atque quae nobis aliquam
          expedita. Perferendis earum laborum reprehenderit minus, optio
          repellat? Numquam deserunt cum eius, enim vero earum odit ratione quam
          commodi similique, quas porro assumenda laudantium praesentium
          temporibus quaerat dolores consequatur omnis cupiditate placeat
          corrupti optio nisi quis maxime. Ratione quod voluptatum molestiae
          veniam saepe deserunt fugiat error corporis obcaecati consequatur,
          ipsa possimus dolor doloremque in porro totam, expedita consectetur
          culpa ab facere ex beatae tenetur. Ratione ad aliquid sapiente sed
          veritatis ipsam repellendus dolores perspiciatis, molestias, natus
          accusamus sint aut. Iusto voluptatibus minus, ut aut molestias vero
          inventore rem!
        </article>
      </section>
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
