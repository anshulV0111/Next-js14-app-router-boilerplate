'use client';

import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import PrevButtonIcon from '@/shared/Icons/layout1/Icons/iconComponents/PrevButtonIcon';
import NextButtonIcon from '@/shared/Icons/layout1/Icons/iconComponents/NextButtonIcon';

function CustomGameProviderSlider({ className = '' }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 2,
    align: 'start',
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sliderimage = '/assets/layout2/images/homePage/GameProviderImage.png';
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={`${className}`}>
      <div className="flex justify-between item mb-4 mt-8">
        <div className="flex items-center gap-2">
          {/* <GameProviderIcon /> */}
          <h2 className="text-xl font-semibold text-offWhite-1000">
            Providers
          </h2>
        </div>
        <div className="flex gap-4 items-center">
          {/* <SecondaryBtn className='px-3'>View all</SecondaryBtn> */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="embla__button embla__button--prev text-offWhite-500 bg-charcoalBlack-700 h-[37px] w-[37px] rounded-full flex items-center justify-center"
              onClick={scrollPrev}
            >
              Prev Button
              <PrevButtonIcon />
            </button>
            <button
              type="button"
              className="embla__button embla__button--next text-offWhite-500 bg-charcoalBlack-700 h-[37px] w-[37px] rounded-full flex items-center justify-center"
              onClick={scrollNext}
            >
              Next Button
              <NextButtonIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="embla m-auto">
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container -ml-3 flex touch-pan-y touch-pinch-zoom [&>.embla-slide]:pl-3 [&>.embla-slide]:min-w-0 [&>.embla-slide]:flex-[0_0_calc(100%_/_6.5)] max-xl:[&>.embla-slide]:flex-[0_0_calc(100%_/_5.5)] max-lg:[&>.embla-slide]:flex-[0_0_calc(100%_/_4.5)] max-md:[&>.embla-slide]:flex-[0_0_calc(100%_/_3.5)] max-sm:[&>.embla-slide]:flex-[0_0_calc(100%_/_2.5)]">
            {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map(
              (item, index) => (
                <div
                  className={`embla__slide embla-slide ${
                    index === selectedIndex ? 'is-selected' : ''
                  }`}
                  key={item}
                >
                  <div className="embla__slide__inner embla-slide-inner">
                    <div className="embla__slide__content bg-charcoalBlack-700 rounded-[10px]">
                      <Image
                        src={sliderimage}
                        className="rounded-sm"
                        alt="Provider Image"
                        width={10000}
                        height={10000}
                      />
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
      {/* <p className='text-sm font-medium text-offWhite-1000 flex items-start gap-1 mt-4'>
                <PlayingStatusIcon />
                128 Playing
            </p> */}
    </div>
  );
}

export default CustomGameProviderSlider;
