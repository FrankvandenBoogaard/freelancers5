import { useField, Field, useFormikContext } from 'formik';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

//Deze gebruiken in een formulier voor invoeren datum:
{/* <MyDateInput
  name='klantUpdateDate'
  timeFormat='HH:mm'
  showTimeSelect
  timeCaption='time'
  dateFormat='dd-MM-yyyy HH:mm'
  autoComplete='off'
/>; */}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function MyDateInput({ label, ...props }) {
  const { setFieldValue } = useFormikContext();
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
              <DatePicker
                id={field.name}
                className={classNames(
                  meta.touched && !!meta.error
                    ? 'pr-10 border-red-300 text-red-900 focus:outline-none focus:ring-red-500 focus:border-red-500 '
                    : 'border border-gray-300 focus:ring-orange-500 focus:border-orange-500',
                  'mt-1 block w-full sm:text-sm rounded-md shadow-sm py-2 px-3'
                )}
                {...field}
                {...props}
                aria-invalid='true'
                aria-describedby={field.name}
                selected={(field.value && new Date(field.value)) || null}
                onChange={(value) => setFieldValue(field.name, value)}
              />
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
