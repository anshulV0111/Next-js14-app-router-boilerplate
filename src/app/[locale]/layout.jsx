import { Inter } from 'next/font/google';
import './globals.css';
import TranslationsProvider from '@/shared/TranslationProvider';
import { dir } from 'i18next';
import i18nConfig from '@/i18nConfig';
import StoreProvider from './StoreProvider';
import ThemeProvider from './ThemeProvider';
import initTranslations from '../i18n';
import './GlobalStyle.scss';
import Sidebar from './commons/Sidebar';
import Header from './commons/Header';
import { Footer } from './commons/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BP',
  description: 'Created and Owned by GS Core',
  icons: {
    icon: '/favicon.ico',
  },
};

const i18nNamespaces = ['home'];

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  const { t } = await initTranslations(locale, ['home']);

  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
        <ThemeProvider>
          <StoreProvider>
            <TranslationsProvider
              namespaces={i18nNamespaces}
              locale={locale}
              resources={resources}
            >
              <Sidebar />
              <Header />
              <div className="page-wrapper">
                <main className="main-wrapper">
                  {children}
                </main>
              </div>
              <Footer t={t} />
            </TranslationsProvider>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
