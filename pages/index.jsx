import Head from 'next/head'
import Image from 'next/image'
import { getNews } from '../services/index'
import { NewsItem, Navbar } from '../components';


export default function Home({ news }) {
  return (
    <div>
      <Head>
        <title>News app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className="grid lg:grid-cols-3 xs:grid-cols-none sm:grid-cols-2 p-5">
        {news.map((item) => <NewsItem id={item.id} title={item.title} key={item.title} image_id={item.image.id} tags={item.tags} />)}
      </div>
    </div>
  )
}


export async function getStaticProps() {
  const news = (await getNews()) || []
  return {
      props: { news }
  }
}