'use client';

/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './CustomModalStyle.scss';
import CloseXIcon from '@/shared/Icons/layout1/Icons/iconComponents/Close-X';
import { useRouter } from 'next/navigation';

export default function CustomModal({
  modalId,
  modalHeader,
  children,
  customDialog,
  customModalContainer,
  customModalWrap,
  customHeading,
  loginTag,
}) {
  const router = useRouter();

  const onDismiss = () => {
    router.back();
  };
  return (
    <dialog
      id={modalId}
      tabIndex="-1"
      style={{ display: 'block' }}
      className={customDialog || 'dialog-wrapper'}
      onClose={onDismiss}
    >
      <div className="dialog-backdrop" />

      <div className={customModalContainer || 'dialog-content'}>
        <div className={customModalWrap || 'dialog-wrap'}>
          <div className={customHeading || 'dialog-header'}>
            <h3 className={loginTag || 'dialog-title'}>{modalHeader}</h3>

            <button
              type="button"
              onClick={onDismiss}
              className="dialog-close-btn"
              data-modal-toggle="crud-modal"
            >
              <CloseXIcon />
            </button>
          </div>

          <div className="dialog-body">
            {children}
          </div>
        </div>
      </div>
    </dialog>
  );
}
