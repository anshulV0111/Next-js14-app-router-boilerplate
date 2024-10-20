/* eslint-disable import/prefer-default-export */
export function CustomInputField({
  id,
  fieldType,
  name,
  placeholder,
  label,
  isDisabled,
  inputType = 'text',
  isRequired = false,
  icon,
  IconComponent,
  className,
  optionsList,
  minDate,
  maxDate,
  defaultValue,
  error,
  ...rest
}) {
  switch (fieldType) {
    case 'textField': {
      return (
        <div className="relative">
          <label htmlFor={name} className="custom-form-label">
            {label}
            {' '}
            <span className="text-red-600">{isRequired && '*'}</span>
          </label>
          <div className="">
            {icon && <IconComponent />}
          </div>
          <input
            id={id}
            name={name}
            type={inputType}
            disabled={isDisabled}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className={
              `${className} dark:border-${
                error?.length ? 'red' : 'gray'
              }-600 border border-${error?.length ? 'red' : 'gray'}-300 `
              || `bg-gray-50 border border-${
                error?.length ? 'red' : 'gray'
              }-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-4 h-12
               dark:bg-gray-700 dark:border-${
                 error?.length ? 'red' : 'gray'
               }-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
            }
            {...rest}
          />
        </div>
      );
    }

    case 'textFieldWithAdornment': {
      return (
        <div className="relative">
          {/* <label htmlFor={name} className="custom-form-label">
            {label} <span className="text-red-600">{isRequired && "*"}</span>
          </label> */}
          <div className="">
            {icon && <IconComponent />}
          </div>
          <input
            id={id}
            name={name}
            type={inputType}
            disabled={isDisabled}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className={
              `${className} dark:border-${
                error?.length ? 'red' : 'gray'
              }-600 border border-${error?.length ? 'red' : 'gray'}-300 `
              || `bg-gray-50 border border-${
                error?.length ? 'red' : 'gray'
              }-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-4 h-12
               dark:bg-gray-700 dark:border-${
                 error?.length ? 'red' : 'gray'
               }-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
            }
            {...rest}
          />
        </div>
      );
    }

    case 'date': {
      const formattedDefaultValue = defaultValue
        ? new Date(defaultValue).toISOString().split('T')[0]
        : '';
      return (
        <div className="relative">
          <label htmlFor={name} className="custom-form-label">
            {label}
            {' '}
            <span className="text-red-600">{isRequired && '*'}</span>
          </label>
          <div className="">
            {icon && (
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            )}
          </div>
          <input
            id={id}
            name={name}
            type={inputType}
            disabled={isDisabled}
            placeholder={placeholder}
            className={`${className} border border-${
              error?.length ? 'red' : 'gray'
            }-300 dark:border-${error?.length ? 'red' : 'gray'}-600`}
            format="dd/mm/yyyy"
            min={minDate}
            max={maxDate}
            defaultValue={formattedDefaultValue}
            {...rest}
          />
        </div>
      );
    }

    case 'radioGroup': {
      return (
        <div className="relative radio-group-box">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="custom-form-label">
            {label}
            {' '}
            <span className="text-red-600">{isRequired && '*'}</span>
          </label>
          <div className="radio-input-wrap">
            {optionsList?.map(({ key, value }) => (
              <div className="radio-input-box" key={key}>
                <input
                  name={name}
                  value={key}
                  type={inputType}
                  disabled={isDisabled}
                  className={className}
                  id={key}
                  {...rest}
                />
                <label
                  for={key}
                  className="radio-form-label"
                >
                  {value}
                </label>
              </div>
            ))}
          </div>
        </div>
      );
    }

    default: {
      return (
        <div className="relative">
          <label htmlFor={name} className="custom-form-label">
            {label}
            {' '}
            <span className="text-red-600">{isRequired && '*'}</span>
          </label>
          <input
            id={id}
            type={inputType}
            disabled={isDisabled}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className={
              `${className} dark:border-${
                error?.length ? 'red' : 'gray'
              }-600 border border-${error?.length ? 'red' : 'gray'}-300`
              || `bg-gray-50 border border-${
                error?.length ? 'red' : 'gray'
              }-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-4 h-12
               dark:bg-gray-700 dark:border-${
                 error?.length ? 'red' : 'gray'
               }-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
            }
            name={name}
            {...rest}
          />
        </div>
      );
    }
  }
}
