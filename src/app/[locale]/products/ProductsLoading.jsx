import React from 'react';
import { SKELETON_CARD_COUNT_PRODUCT } from '@/constants';
import { getScreenSize } from '@/helpers/custom.helpers';
import CustomSkeleton from '../commons/UI-kit/CustomLoader';

export default function ProductsLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-0 mt-4">
      <CustomSkeleton type="card" count={SKELETON_CARD_COUNT_PRODUCT?.[getScreenSize()]} />
      <CustomSkeleton type="card" count={SKELETON_CARD_COUNT_PRODUCT?.[getScreenSize()]} />
      <CustomSkeleton type="card" count={SKELETON_CARD_COUNT_PRODUCT?.[getScreenSize()]} />
      <CustomSkeleton type="card" count={SKELETON_CARD_COUNT_PRODUCT?.[getScreenSize()]} />
    </div>
  );
}
