/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-key */
import React from 'react';
import './BonusBannerSectionStyle.scss';
import CustomButton from '../CustomButton/CustomButton';

function BonusBannerSection() {
  return (
    <section className="bonus-banner-section">
      <div className="bonus-banner-wrap">
        <div className="bonus-banner-row">
          <div className="bonus-banner-column">
            <div className="bonus-banner-card">
              <div className="text-box">
                <h6 className="title-text">Unlock a 50SC + 50 Free Spins!</h6>
                <p className="subtitle-text">
                  Spin the Reels & Hit the Jackpot!
                </p>
                <CustomButton type="secondary" label="Claim Your Offer!" />
              </div>
              <div className="img-box">
                {/* <Image
                  width={10000}
                  height={10000}
                  src={contentImg1}
                  alt="Content Image"
                /> */}
              </div>
            </div>
          </div>

          <div className="bonus-banner-column">
            <div className="bonus-banner-card">
              <div className="text-box">
                <h6 className="title-text">Get a 10 $ Welcome Bonus!</h6>
                <p className="subtitle-text">
                  Double Your First Deposit & Spin to Win Big!
                </p>
                <CustomButton type="secondary" label="Claim Your Bonus Now!" />
              </div>
              <div className="img-box">
                {/* <Image
                  width={10000}
                  height={10000}
                  src={contentImg2}
                  alt="Content Image"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BonusBannerSection;
