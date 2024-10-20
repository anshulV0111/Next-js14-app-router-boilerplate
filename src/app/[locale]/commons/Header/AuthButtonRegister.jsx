'use client';

import { useRouter } from 'next/navigation';
import CustomButton from '../UI-kit/CustomButton/CustomButton';

export default function AuthButtonRegister({ primaryButtonStyle, label }) {
  const { push } = useRouter();
  return (
    <CustomButton
      type="primary"
      primaryButtonStyle={primaryButtonStyle}
      label={label}
      onClick={() => { push('/layout2/register'); }}
      // onClick={() => { document.getElementById(MODAL_ID.AUTH).style.display = 'block'; }}
    />
  );
}
