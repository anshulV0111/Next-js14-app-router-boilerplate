import './HeaderStyle.scss';
import { memo } from 'react';
import LanguageChanger from '@/shared/LanguangeChanger';
import { getAuthToken } from '@/helpers/cookie.helpers';
import BellIcon from '@/shared/Icons/layout1/Icons/iconComponents/Bell';
// import ProfileSelect from './ProfileSelect';
// import ApplicationLogo from '../UI-kit/BrandLogo';
// import AuthButtonLogin from './AuthButtonLogin';
// import AuthButtonRegister from './AuthButtonRegister';
import SearchWidget from './SearchWidget/SearchWidget';
import CustomButton from '../UI-kit/CustomButton/CustomButton';
// import CurrencySelect from './CurrencySelect';

async function Header() {
  const token = await getAuthToken();
  const isAuthenticated = !!token?.value;

  return (
    <>
      <header>
        <div className="nav-container">
          <nav className="nav-wrap">
            {/* <ApplicationLogo redirectLink="/layout2" /> */}

            {!isAuthenticated ? (
              <>
                <div className="auth-btn-box">
                  <SearchWidget />
                  <LanguageChanger />

                  {/* <AuthButtonLogin label="Login" type="login" />
                  <AuthButtonRegister label="Register" type="signup" /> */}
                </div>
              </>
            ) : (
              <>
                <div className="navigation-box">
                  {/* <CurrencySelect /> */}
                  <SearchWidget />
                  <CustomButton
                    defaultButtonStyle="base-btn default-btn only-icon"
                    icon={<BellIcon />}
                  />
                  {/* <LanguageWidget /> */}
                  {/* <ProfileSelect token={token?.value} /> */}
                </div>
              </>
            )}

            {/* <div>
            <CurrencySelect />
          </div> */}
          </nav>
        </div>
      </header>
    </>
  );
}

export default memo(Header);
