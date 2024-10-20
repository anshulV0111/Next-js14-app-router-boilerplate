import React from 'react';
import './LanguageWidgetStyle.scss';
import Image from 'next/image';
import CustomButton from '@/app/[locale]/commons/UI-kit/CustomButton/CustomButton';
import FlagImg from '../../../public/assets/images/stock-images/flag-england.png';

export default function LanguageWidget() {
  return (
    <>
      <CustomButton
        defaultButtonStyle="base-btn default-btn only-icon flag-btn"
        icon={(
          <div className="flag-img-box">
            <Image
              width={10000}
              height={10000}
              src={FlagImg}
              alt="Flag Image"
            />
          </div>
        )}
      />
    </>
  );
}
