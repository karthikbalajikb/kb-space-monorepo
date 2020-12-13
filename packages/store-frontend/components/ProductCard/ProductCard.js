import Link from "next/link";
import { useState, useRef } from "react";

const ProductCard = ({
  coverImage,
  images,
  brand,
  title,
  price,
  slug,
  isTrending,
  isNewArrival,
  isOffer,
}) => {
  const initialProductImage = (image, index) => ({
    ...image,
    show: index === 0 ? true : false,
  });

  const [productImages, setProductImages] = useState(
    images.map(initialProductImage)
  );
  const productImageRef = useRef();
  productImageRef.current = productImages;
  const intervalRef = useRef();

  const animateProduct = () => {
    intervalRef.current = setInterval(() => {
      // find currently visible image index
      const currentIndex = productImageRef.current.findIndex(
        (image) => image.show
      );
      // if end of image: start from first else increment
      if (currentIndex + 1 === images.length) {
        setProductImages(productImageRef.current.map(initialProductImage));
      } else {
        setProductImages(
          productImageRef.current.map((image, index) => ({
            ...image,
            show: index === currentIndex + 1 ? true : false,
          }))
        );
      }
    }, 1000);
  };

  const clearAnimateInterval = () => {
    clearInterval(intervalRef.current);
    setProductImages(productImageRef.current.map(initialProductImage));
  };

  return (
    <div
      onMouseEnter={animateProduct}
      onMouseLeave={clearAnimateInterval}
      className="relative product-card__layout grid gap-4 w-96 mb-12 p-6 rounded-xlg bg-surface shadow-neu1"
    >
      {isTrending && (
        <div className="absolute shadow-neu3 rounded-lg m-4 p-1">
          <div className="rounded-lg bg-gradient-trending text-white py-0 px-4">
            Trending
          </div>
        </div>
      )}
      {isNewArrival && (
        <div className="absolute shadow-neu3 rounded-lg m-4 p-1">
          <div className="rounded-lg bg-gradient-new text-white py-0 px-4">
            New
          </div>
        </div>
      )}
      {isOffer && (
        <div className="absolute shadow-neu3 rounded-lg m-4 p-1">
          <div className="rounded-lg bg-gradient-offer text-white py-0 px-4">
            Offer
          </div>
        </div>
      )}
      {productImages.map((image) => {
        const url = `${
          image.url.startsWith("/")
            ? process.env.NEXT_PUBLIC_STRAPI_API_URL
            : ""
        }${image.url}`;
        return (
          <img
            src={url}
            className={`${
              image.show ? "block" : "hidden"
            } h-full m-auto w-88 rounded-lg`}
          />
        );
      })}
      <div className="bg-product-card-info rounded-lg p-3 pl-8 text-product-card-info-text shadow-neu2">
        <p className="text-2xl font-semibold">{brand}</p>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline text-base font-light">{title}</a>
        </Link>
        <div className="flex items-center">
          <p className="text-lg font-medium pt-4">₹ {price}</p>
          <p className="text-sm line-through font-light pt-4 pl-3 text-gray-600">₹ {Number(price) + 100}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
