/* eslint-disable react/button-has-type */

import React from 'react';
import './ViewProduct.scss';

import Image from 'next/image';
import { getSingleProduct } from '@/actions/product.actions';

async function ViewProduct({ params }) {
  const { slug } = params;
  const data = await getSingleProduct(slug[0]);

  const {
    title, price, description, images,
  } = data;
  return (
    <section className="pt-[450px] md:pt-32 pb-[400px] md:pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        {/* image and text wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <Image
              width={400}
              height={400}
              className="max-w-[200px] lg:max-w-xs"
              src={images[0]}
              alt=""
            />
          </div>

          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-2xl text-red-500 font-medium mb-6">
              $
              {price}
            </div>
            <p className="mb-8">{description}</p>
            {/* <button className="bg-primary py-4 px-8 text-white">Add to cart</button> */}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center m-5">
          {/* image */}
          {images.length
            && images.map((img) => (
              <div
                key={img}
                className="flex flex-1 justify-center items-center mb-8 lg:mb-0"
              >
                <Image
                  className="max-w-[200px] lg:max-w-xs"
                  src={img}
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default ViewProduct;
