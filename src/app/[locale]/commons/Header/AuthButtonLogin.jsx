/* eslint-disable max-len */

'use client';

import { useRouter } from 'next/navigation';
import CustomButton from '../UI-kit/CustomButton/CustomButton';

export default function AuthButtonLogin({ defaultButtonStyle, label }) {
  const { push } = useRouter();
  return (
    <CustomButton
      defaultButtonStyle={defaultButtonStyle}
      label={label}
      onClick={() => { push('/layout2/login'); }}
    />
  );
}
