import React from 'react'
import { Navbar } from '../../components'
import { getNews, getNewsDetails } from '../../services'
import Blocks from 'editorjs-blocks-react-renderer';

const NewsDetail = ({ data }) => {
    return (
        <>
            <Navbar />
            <div className='container mx-auto bg-white mt-5 rounded-lg shadow-xl p-5'>
                <span className="bg-sky-100 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.categories[0].category_id.name}</span>
                <h2 className='text-4xl text-center mt-5'>{data.title}</h2>
                <img
                    src={"http://localhost:8055/assets/" + data.image.id}
                    className="align-middle mx-auto mt-5"
                />
                <div className='mt-5'>
                    <Blocks data={data.body} />
                </div>
            </div>
        </>
    )
}

export async function getStaticProps({ params }) {
    const data = await getNewsDetails(params.id);
    return {
        props: {
            data: data,
        },
    };
}

export async function getStaticPaths() {
    const news = await getNews();

    return {
        paths: news.map((item) => {
            let id = item.id
            return { params: { id } }
        }),
        fallback: "blocking",
    };
}

export default NewsDetail