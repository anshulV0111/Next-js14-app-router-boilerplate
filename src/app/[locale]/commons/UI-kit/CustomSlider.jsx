'use client';

import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { NextButton, PrevButton, usePrevNextButtons } from '@/shared/EmblaCarousel/EmblaCarouselArrowButton';
import CustomButton from './CustomButton/CustomButton';
import categoryImg from '../../../../../public/assets/images/stock-images/joker-cap.png';

function CustomSlider({
  className = '',
  id,
  type,
  label,
  icon,
  sliderData,
  cardImageKey,
  renderComponent,
  cardClassName,
  disableSeeAll,
  generateCardRoute,
  EmblaImageContainer,
  sliderContainer,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 'auto',
    align: 'start',
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const onCardClick = (paramId) => {
    const path = generateCardRoute(paramId);
    router.push(path);
  };

  switch (type) {
    case 'card': {
      return (
        <section className="games-slider-section">
          <div className="games-slider-wrap">
            <div className="embla">
              <div className="slider-header">
                <h6 className="slider-heading-text">
                  <span className="icon-box">
                    <Image
                      width={10000}
                      height={10000}
                      src={categoryImg}
                      alt="Category Image"
                    />
                  </span>
                  <span className="text">{label}</span>
                </h6>

                <div className="embla__buttons">
                  {
                    !disableSeeAll
                      ? (
                        <CustomButton
                          onClick={() => { router.push(`/layout2/casino?category=${id}`); }}
                          defaultButtonStyle="base-btn default-btn see-all-btn"
                          label="See All"
                        />
                      ) : <></>
                  }
                  <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                  />
                  <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                  />
                </div>
              </div>
              {
  renderComponent
    ? (
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {sliderData?.map(
            (item) => (

              <React.Fragment
                key={item?.[cardImageKey]}
                onClick={generateCardRoute ? () => onCardClick(item.id) : () => {}}
              >
                { renderComponent(item) }
              </React.Fragment>
            ),
          )}

        </div>
      </div>
    )
    : (
      <div className={sliderContainer || 'embla m-auto'}>
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="providerImages embla__container flex touch-pan-y touch-pinch-zoom [&>.embla-slide]:pl-3 [&>.embla-slide]:min-w-0 [&>.embla-slide]:flex-[0_0_calc(100%_/_9)] max-2xl:[&>.embla-slide]:flex-[0_0_calc(100%_/_7)] max-xl:[&>.embla-slide]:flex-[0_0_calc(100%_/_6)] max-lg:[&>.embla-slide]:flex-[0_0_calc(100%_/_5)] max-md:[&>.embla-slide]:flex-[0_0_calc(100%_/_4)] max-sm:[&>.embla-slide]:flex-[0_0_calc(100%_/_3)]">
            {sliderData?.map(
              (item, index) => (
                <div
                  className={`embla__slide embla-slide  ${
                    index === selectedIndex ? 'is-selected' : ''
                  }`}
                  key={item?.[cardImageKey]}
                >
                  <div className={EmblaImageContainer || 'embla__slide__inner embla-slide-inner'}>
                    <div
                      className="embla__slide__content cursor-pointer"
                      onClick={generateCardRoute ? () => onCardClick(item.id) : () => {}}
                    >
                      <div className="transition-opacity duration-500 ease-in transform scale-100 translate-x-0 translate-y-0 hover:scale-110 hover:translate-y-1">
                        <Image
                          src={item?.[cardImageKey]}
                          width={10000}
                          height={10000}
                          className={`${cardClassName || ''}`}
                          alt="Slider Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    )
}

            </div>
          </div>
        </section>
      );
    }

    default: {
      return (
        <div className={`${className}`}>
          <div className="embla m-auto">
            <div className="embla__viewport overflow-hidden" ref={emblaRef}>
              <div className="embla__container -ml-3 flex touch-pan-y touch-pinch-zoom [&>.embla-slide]:pl-3 [&>.embla-slide]:min-w-0 [&>.embla-slide]:flex-[0_0_calc(100%_/_6.5)] max-xl:[&>.embla-slide]:flex-[0_0_calc(100%_/_5.5)] max-lg:[&>.embla-slide]:flex-[0_0_calc(100%_/_4.5)] max-md:[&>.embla-slide]:flex-[0_0_calc(100%_/_3.5)] max-sm:[&>.embla-slide]:flex-[0_0_calc(100%_/_2.5)]">
                {sliderData.map(
                  (item) => (
                    <div className="flex items-center gap-2" key={item?.id}>
                      {icon}
                      {label}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CustomSlider;
