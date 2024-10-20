'use client';

import React, { useId, memo } from 'react';
import './BannerStyle.scss';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import {
  DotButton,
  useDotButton,
} from '@/shared/EmblaCarousel/EmblaCarouselDotButton';
import Image from 'next/image';
// import CustomButton from '../UI-kit/CustomButton/CustomButton';

function BannerSection() {
  const key = useId();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 3000 }),
    Fade(),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const BannerImg1 = '/assets/images/stock-images/banner-image1.jpg';
  const BannerImg2 = '/assets/images/stock-images/banner-image2.jpg';

  return (
    <section className="banner-section">
      <div className="banner-wrap">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <div className="banner-img-box">
                  <Image width={10000} height={10000} src={BannerImg1} alt="" />

                  {/* <div className="text-box">
                    <h1 className="title-text">
                      Experience
                      {' '}
                      <br />
                      {' '}
                      the Thrill
                    </h1>
                    <h2 className="subtitle-text">10$ Free Coins Await!</h2>
                  </div> */}
                </div>
              </div>

              <div className="embla__slide">
                <div className="banner-img-box">
                  <Image width={10000} height={10000} src={BannerImg2} alt="" />

                  {/* <div className="text-box">
                    <h1 className="title-text">
                      Experience
                      {' '}
                      <br />
                      {' '}
                      the Thrill
                    </h1>
                    <h2 className="subtitle-text">10$ Free Coins Await!</h2>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={key}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : '',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(BannerSection);
