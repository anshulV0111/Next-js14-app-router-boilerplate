import React, { useCallback, useEffect, useState } from 'react';
import CustomButton from '@/app/[locale]/commons/UI-kit/CustomButton/CustomButton';

import './EmblaCarouselStyle.scss';
import ChevronRightIcon from '../Icons/layout1/Icons/iconComponents/Chevron-Right';
import ChevronLeftIcon from '../Icons/layout1/Icons/iconComponents/Chevron-Left';

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export function PrevButton(props) {
  const { children, ...restProps } = props;

  return (
    <CustomButton
      defaultButtonStyle="embla__button embla__button--prev base-btn default-btn only-icon"
      type="button"
      {...restProps}
    >
      <ChevronLeftIcon />
      {children}
    </CustomButton>
  );
}

export function NextButton(props) {
  const { children, ...restProps } = props;

  return (
    <CustomButton
      defaultButtonStyle="embla__button embla__button--next base-btn default-btn only-icon"
      type="button"
      {...restProps}
    >
      <ChevronRightIcon />
      {children}
    </CustomButton>
  );
}
