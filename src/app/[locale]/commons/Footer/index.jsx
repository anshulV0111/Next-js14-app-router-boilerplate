import './FooterStyle.scss';
import Link from 'next/link';
import Image from 'next/image';
// import ApplicationLogo from '../UI-kit/BrandLogo';

export function Footer({ t }) {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-wrap">
          <div className="footer-content-box">
            <div className="about-text-box">
              {/* <ApplicationLogo redirectLink="/layout2" /> */}
              <p className="about-text">
                {t('footerDescription')}
              </p>
            </div>

            <div className="link-text-wrap">
              <div className="link-text-box">
                <h6 className="title-text">{t('platform')}</h6>

                <div className="link-text-container">
                  <Link href="/layout2" className="link-text">
                    {t('casino')}
                  </Link>
                  <Link href="/layout2" className="link-text">
                    {t('sportsbook')}
                  </Link>
                  <Link href="/layout2" className="link-text">
                    {t('contactus')}
                  </Link>
                  <Link href="/layout2" className="link-text">
                    {t('faq')}
                  </Link>
                </div>
              </div>

              <div className="link-text-box">
                <h6 className="title-text">{t('aboutus')}</h6>

                <div className="link-text-container">
                  <Link href="/layout2" className="link-text">
                    {t('aboutus')}
                  </Link>
                  <Link href="/layout2" className="link-text">
                    {t('acceptPrivacyPolicy')}
                  </Link>
                  <Link href="/layout2" className="link-text">
                    {t('acceptTerms')}
                  </Link>
                  <Link href="/layout2" className="link-text">
                    {t('howToPlay')}
                  </Link>
                </div>
              </div>

              <div className="link-text-box">
                <h6 className="title-text">{t('contact')}</h6>

                <div className="link-text-container">
                  <div className="contact-text-box">
                    <span className="label-text">{t('support')}</span>
                    <Link href="/layout2" className="link-text">
                      {t('supportEmail')}
                    </Link>
                  </div>

                  <div className="contact-text-box">
                    <span className="label-text">{t('partner')}</span>
                    <Link href="/layout2" className="link-text">
                      {t('partnerEmail')}
                    </Link>
                  </div>

                  <div className="contact-text-box">
                    <span className="label-text">{t('legal')}</span>
                    <Link href="/layout2" className="link-text">
                      {t('legalEmail')}
                    </Link>
                  </div>
                </div>

                <div className="social-link-box">
                  <Link href="/layout2" className="social-link-text">
                    <Image
                      width={10000}
                      height={10000}
                      src="/assets/layout2/images/svg-images/social-twitter.svg"
                      alt="Brand Logo"
                    />
                  </Link>

                  <Link href="/layout2" className="social-link-text">
                    <Image
                      width={10000}
                      height={10000}
                      src="/assets/layout2/images/svg-images/social-instagram.svg"
                      alt="Brand Logo"
                    />
                  </Link>

                  <Link href="/layout2" className="social-link-text">
                    <Image
                      width={10000}
                      height={10000}
                      src="/assets/layout2/images/svg-images/social-discord.svg"
                      alt="Brand Logo"
                    />
                  </Link>

                  <Link href="/layout2" className="social-link-text">
                    <Image
                      width={10000}
                      height={10000}
                      src="/assets/layout2/images/svg-images/social-telegram.svg"
                      alt="Brand Logo"
                    />
                  </Link>

                  <Link href="/layout2" className="social-link-text">
                    <Image
                      width={10000}
                      height={10000}
                      src="/assets/layout2/images/svg-images/social-youtube.svg"
                      alt="Brand Logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-text-box">
            <p className="copyright-text">{t('footerRightsReserved')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
