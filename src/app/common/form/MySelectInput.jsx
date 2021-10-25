import { useField, Field } from 'formik';
import { ExclamationCircleIcon } from '@heroicons/react/solid';


//Deze moet je toevoegen bij een nieuw Form:
// klantLocatie: Yup.string()
//       .required('Een locatie is verplicht')
//       .notOneOf(['- maak een keuze -']),

const categoryData = [
  {
    key: '- maak een keuze -',
    text: '- maak een keuze -',
    value: '- maak een keuze -',
  },
  { key: 'drinks', text: 'Drinks', value: 'drinks' },
  { key: 'culture', text: 'Culture', value: 'culture' },
  { key: 'film', text: 'Film', value: 'film' },
  { key: 'food', text: 'Food', value: 'food' },
  { key: 'music', text: 'Music', value: 'music' },
  { key: 'travel', text: 'Travel', value: 'travel' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MySelectInput({ label, ...props }) {
  const [field] = useField(props);

  return (
    <div className='col-span-6'>
      <Field name={field.name}>
        {({ field, meta }) => (
          <div>
            <label
              htmlFor={field.name}
              className='block text-sm font-medium text-gray-700'
            >
              {label}
            </label>
            <div className='mt-1 relative rounded-md shadow-sm'>
              <select
                id={field.name}
                className={classNames(
                  meta.touched && !!meta.error
                    ? 'pr-10 border-red-300 text-red-900 focus:outline-none focus:ring-red-500 focus:border-red-500 '
                    : 'border border-gray-300 focus:ring-orange-500 focus:border-orange-500',
                  'mt-1 block w-full sm:text-sm rounded-md shadow-sm py-2 px-3'
                )}
                type='text'
                {...field}
                {...props}
                aria-invalid='true'
                aria-describedby={field.name}
              >
                {categoryData.map((option) => (
                  <option key={option.key} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
              {meta.touched && meta.error ? (
                <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                  <ExclamationCircleIcon
                    className='h-5 w-5 text-red-500'
                    aria-hidden='true'
                  />
                </div>
              ) : null}
            </div>
            {meta.touched && meta.error ? (
              <p className='mt-2 text-sm text-red-600' id={field.name}>
                {meta.error}
              </p>
            ) : null}
          </div>
        )}
      </Field>
    </div>
  );
}
