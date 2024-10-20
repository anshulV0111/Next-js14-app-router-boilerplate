/* eslint-disable react/no-unstable-nested-components */

'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import CustomSelect from '@/app/[locale]/commons/UI-kit/CustomSelect/CustomSelect';
import EnglishIcon from '../Icons/layout1/Icons/iconComponents/EnglishIcon';
import ItalianIcon from '../Icons/layout1/Icons/iconComponents/italy';
import FranceIcon from '../Icons/layout1/Icons/iconComponents/france';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: 'en', label: 'English', icon: <EnglishIcon className="max-md:mr-[0] mr-2 rounded-full" /> },
    { value: 'it', label: 'Italian', icon: <ItalianIcon className="max-md:mr-[0] mr-2 rounded-full" /> },
    { value: 'fr', label: 'French', icon: <FranceIcon className="max-md:mr-[0] mr-2 rounded-full" /> },
  ];

  const selectedLanguage = options.find((item) => item.value === currentLocale);

  const handleChange = (item) => {
    const newLocale = item.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale
      && !i18nConfig.prefixDefault
    ) {
      router.push(`/${newLocale}${currentPathname}`);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
      );
    }

    router.refresh();
  };

  return (
    <CustomSelect
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onToggle={() => setIsOpen(!isOpen)}
      onMenuClick={handleChange}
      icon={selectedLanguage?.icon}
      label={selectedLanguage?.label}
      menuList={options}
      menuKey="value"
      onMenuLabel={(item) => (
        <span className="flex items-center space-x-2">
          {item.icon}
          {' '}
          {item.label}
        </span>
      )}
      containerStyle="w-max"
      selectStyle="flex justify-center items-center gap-1 border-slate-600 shadow-sm"
      menuContainerStyle="origin-top-right absolute right-54 mt-2 w-fit rounded-md shadow-lg bg-arcCustomBackground ring-1 ring-black ring-opacity-5 focus:outline-none"
    />
  );
}
