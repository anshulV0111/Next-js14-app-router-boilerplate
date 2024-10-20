'use client';

import './CustomFormStyle.scss';
import React, { Fragment, useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import ZodErrors from '../ZodErrors';
import ErrorList from '../ErrorList';
import ApiErrors from '../ApiErrors';
import CustomButton from '../CustomButton/CustomButton';
import { CustomInputField } from '../CustomInput/CustomInput';

export default function FormPage({
  validation,
  leftFormFields,
  rightFormFields,
  staticFormFields,
  submitLabel,
  customColClasses,
  customComponent,
  isSubmitLoading,
  isSubmit = true,
  isCancel = false,
  isEdit = false,
  enableEdit,
  formTitle,
  colOptions,
  responsiveFormFields,
  action,
  INITIAL_STATE,
  cancelLabel,
  isCancelLoading,
  formClass,
  // rowCustomClass,
  showFieldWiseErrors = false,
  formButtonWrapClass,
  customSubmitButtonClass,
  customCancelButtonClass,
  modal = false,
}) {
  const [formState, formAction] = useFormState(action, INITIAL_STATE);
  const router = useRouter();

  useEffect(() => {
    if (modal && formState?.message === 'Successfull') {
      router.back();
    }
  }, [formState?.message]);

  return (
    <form action={formAction}>
      {formTitle && <div className="mb-4 card-title">{formTitle}</div>}

      {/* Single column forms */}
      <div className={`column-form ${formClass}`}>
        <div className="column-box">
          {staticFormFields?.map(
            (field) => !field?.isHide && (
            <div
              className={`input-box ${field?.divClass || ''}`}
              key={field.name}
            >
              <CustomInputField
                {...field}
                error={formState?.zodErrors?.[field?.name]}
              />
              {showFieldWiseErrors ? (
                <ZodErrors error={formState?.zodErrors?.[field?.name]} />
              ) : (
                <></>
              )}
            </div>
            ),
          )}
        </div>
      </div>

      {/* Two column forms */}
      <div className={`column-form ${formClass}`}>
        <div className={`column-box ${customColClasses}`}>
          {leftFormFields?.map(
            (field) => !field?.isHide && (
            <div
              className={`input-box ${field?.divClass || ''}`}
              key={field.name}
            >
              <CustomInputField
                {...field}
                error={formState?.zodErrors?.[field?.name]}
              />
              {showFieldWiseErrors ? (
                <ZodErrors error={formState?.zodErrors?.[field?.name]} />
              ) : (
                <></>
              )}
            </div>
            ),
          )}
        </div>

        <div className={`column-box ${customColClasses}`}>
          {rightFormFields?.map(
            (field) => !field?.isHide && (
            <div
              className={`input-box ${field?.divClass || ''}`}
              key={field.name}
            >
              <CustomInputField
                {...field}
                error={formState?.zodErrors?.[field?.name]}
              />
              {showFieldWiseErrors ? (
                <ZodErrors error={formState?.zodErrors?.[field?.name]} />
              ) : (
                <></>
              )}
            </div>
            ),
          )}
        </div>
      </div>

      {/* Responsive/customizable column forms */}
      <div className={`column-form ${formClass}`}>
        {responsiveFormFields?.map(
          (field) => !(
            field?.isHide
              || !(field?.dependsOn // Condition mainly used in bonus
                ? validation?.values[field?.dependsOn]
                : true)
              || (field?.isHidable && field.isHidable(validation.values))
          ) && (
          <Fragment key={field.name}>
            {field?.isNewRow && <div className="row" />}
            <div
              id={`field-${field.name}`}
              {...(field?.fieldColOptions || colOptions)}
              className="input-box"
            >
              <CustomInputField
                {...field}
                defaultValue={formState?.data?.[field.name]}
                error={formState?.zodErrors?.[field?.name]}
              />
              {showFieldWiseErrors ? (
                <ZodErrors error={formState?.zodErrors?.[field?.name]} />
              ) : (
                <></>
              )}
            </div>
          </Fragment>
          ),
        )}
      </div>

      <div className="column-form">{customComponent}</div>

      <div className={`column-form ${formClass}`}>
        <div>
          {!showFieldWiseErrors ? (
            <ErrorList errors={formState?.zodErrors} />
          ) : (
            <></>
          )}
        </div>
        <div>
          {formState?.apiErrors ? (
            <ApiErrors errors={formState?.apiErrors} />
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className={formButtonWrapClass || ''}>
        {isCancel && (
          <CustomButton
            defaultButtonStyle={customCancelButtonClass || ''}
            disabled={isCancelLoading}
          >
            {cancelLabel}
          </CustomButton>
        )}

        {isSubmit && (
          <CustomButton
            submitButtonStyle={customSubmitButtonClass || ''}
            type="submit"
            label={submitLabel}
            disabled={isSubmitLoading}
          />
        )}
      </div>

      <div className={formButtonWrapClass || ''}>
        {isEdit && (
          <CustomButton
            className=""
            disabled={isSubmitLoading}
            onClick={() => enableEdit(false)}
            type="primary"
          >
            Edit
          </CustomButton>
        )}
      </div>
    </form>
  );
}
