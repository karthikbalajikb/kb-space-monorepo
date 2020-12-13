import Head from "next/head";

// components
import Layout from "@/components/Layout/Layout";
import Container from "@/components/container";
import Carousel from "@/components/Carousel";
import Category from "@/components/Category";
import ProductCard from "@/components/ProductCard";

// apis
import { getAllPostsForHome } from "@/lib/api";

// constants
import { CMS_NAME } from "@/lib/constants";

export default function Index({ allPosts, preview }) {
  const categories = [{
    id: 'cate-100',
    name: 'Leggings',
    selected: false,
  },{
    id: 'cate-101',
    name: 'Tops',
    selected: false,
  },
  {
    id: 'cate-102',
    name: 'T-shirts',
    selected: false,
  },
  {
    id: 'cate-103',
    name: 'Lingerie',
    selected: false,
  },{
    id: 'cate-104',
    name: 'Bottoms',
    selected: true,
  },{
    id: 'cate-105',
    name: 'Shawl',
    selected: false,
  },{
    id: 'cate-106',
    name: 'Nighty',
    selected: false,
  },{
    id: 'cate-all',
    name: 'All',
    selected: false,
  }]
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <div className="mt-16" />
          <Carousel />
          <div className="mt-48" />
          <h5>Categories</h5>
          <div className="mt-8" />
          <Category categories={categories} />
          <div className="mt-16" />
          <div className="flex flex-wrap justify-between">
            {allPosts.map(product => (
              <ProductCard
                coverImage={`${
                    product.coverImage.url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
                  }${product.coverImage.url}`}
                images={product.images}
                brand={product.author.name}
                title={product.title}
                price="150"
                slug={product.slug}
                isTrending={product.isTrending}
                isNewArrival={product.isNewArrival}
                isOffer={product.isOffer}
              />
            ))}
            {/* <ProductCard
              coverImage="https://firebasestorage.googleapis.com/v0/b/kbtechspace-8907.appspot.com/o/product-images%2Ftartan-vintage-dress.png?alt=media&token=47fe450f-f583-4f24-93bc-d079248fb1f2"
              images={[]}
              brand="Puma"
              title="Printed T-Shirts"
              price="250"
              slug="demo"
            />
            <ProductCard
              coverImage="https://firebasestorage.googleapis.com/v0/b/kbtechspace-8907.appspot.com/o/product-images%2Ftartan-vintage-dress.png?alt=media&token=47fe450f-f583-4f24-93bc-d079248fb1f2"
              images={[]}
              brand="Puma"
              title="Printed T-Shirts"
              price="250"
              slug="demo"
            />
            <ProductCard
              coverImage="https://firebasestorage.googleapis.com/v0/b/kbtechspace-8907.appspot.com/o/product-images%2Ftartan-vintage-dress.png?alt=media&token=47fe450f-f583-4f24-93bc-d079248fb1f2"
              images={[]}
              brand="Puma"
              title="Printed T-Shirts"
              price="250"
              slug="demo"
            />
            <ProductCard
              coverImage="https://firebasestorage.googleapis.com/v0/b/kbtechspace-8907.appspot.com/o/product-images%2Ftartan-vintage-dress.png?alt=media&token=47fe450f-f583-4f24-93bc-d079248fb1f2"
              images={[]}
              brand="Puma"
              title="Printed T-Shirts"
              price="250"
              slug="demo"
            /> */}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts, preview },
  };
}
