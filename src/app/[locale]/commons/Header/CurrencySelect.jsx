'use client';

import useCurrencySelect from '@/hooks/header/useCurrencySelect';
import WalletIcon from '@/shared/Icons/layout1/Icons/iconComponents/HeaderWalletIcon';
import CustomSelect from '../UI-kit/CustomSelect/CustomSelect';

export default function CurrencySelect() {
  const {
    selectedCurrency,
    currencies,
    isCurrencyOpen,
    toggleCurrencyMenu,
    onSelectCurrency,
    onShowMenuLabel,
    setIsCurrencyOpen,
  } = useCurrencySelect();

  return (
    <CustomSelect
      isOpen={isCurrencyOpen}
      setIsOpen={setIsCurrencyOpen}
      onToggle={toggleCurrencyMenu}
      onMenuClick={onSelectCurrency}
      label={
        currencies.length && selectedCurrency !== null
          ? `${selectedCurrency.code} ${currencies.find((c) => c.code === selectedCurrency.code)
            ?.label
          }`
          : 'wallet'
      }
      menuList={currencies}
      menuKey="code"
      onMenuLabel={onShowMenuLabel}
      containerStyle="dropdown profile-dropdown"
      selectStyle="dropdown-btn profile-dropdown-btn"
      menuContainerStyle="dropdown-menu profile-dropdown-menu"
      listItemBoxStyle="list-item-box"
      menuButtonStyle="list-item"
      icon={(
        <div className="p-[0.875rem] max-sm:p-[0.2rem] bg-arcCustomButton rounded-md walletButton">
          <WalletIcon className="max-sm:w-4" />
        </div>
      )}
    />
  );
}
