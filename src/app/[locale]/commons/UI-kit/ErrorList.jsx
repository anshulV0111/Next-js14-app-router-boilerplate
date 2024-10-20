'use client';

import AnimateErrorList from './AnimateErrorList';

export default function ErrorList({ errors }) {
  if (!errors) return null;
  return (
    <AnimateErrorList>
      {/* <svg
        className="w-6 h-6 text-red-500 mr-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54
          0 2.502-1.667 1.869-3.22l-1.271-3.016a4.5 4.5 0 01-1.897
          1.13l-.451 .183c-.382.156-1.155.299-1.82.299s-1.438-.143-1
          .82-.299l-.451-.183a4.5 4.5 0 01-1.897-1.13l-1.271 3.016c-.633
          1.553-.327 3.22 1.869 3.22z"
        />
      </svg> */}
      <div className="text-red-500 font-light">
        There was an error with your submission:
        <ul className="list-disc ml-6">
          {
          errors ? Object.keys(errors).map((err) => (
            <li key={errors[err][0]}>{errors[err][0]}</li>
          )) : <></>
         }
        </ul>
      </div>
    </AnimateErrorList>
  );
}
