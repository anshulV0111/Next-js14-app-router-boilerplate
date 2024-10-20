'use client';

/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-key */
import Image from 'next/image';
import './CustomGameCardStyle.scss';
import React from 'react';
import PlayIcon from '@/shared/Icons/layout1/Icons/iconComponents/Play';
import HeartStrokeIcon from '@/shared/Icons/layout1/Icons/iconComponents/Heart-Stroke';
import CustomButton from '../CustomButton/CustomButton';

function CustomGameCard({ gameImages }) {
  return (
    <>
      {gameImages.map((gameImg) => (
        <div className="game-card">
          <div className="game-card-body">
            <div className="game-img">
              <Image
                width={10000}
                height={10000}
                src={gameImg.src}
                alt={gameImg.alt}
                key={gameImg}
              />
            </div>
          </div>

          <div className="game-card-overlay">
            <CustomButton defaultButtonStyle="base-btn default-btn only-icon favorite-btn">
              <HeartStrokeIcon />
            </CustomButton>

            <button type="button" className="play-btn">
              <PlayIcon />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default CustomGameCard;
