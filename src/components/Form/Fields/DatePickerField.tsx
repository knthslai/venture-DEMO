import { FormControl, FormLabel } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FieldProps } from './types';

function DatePickerField({ field, formik, label }: FieldProps) {
  const [startDate, setStartDate] = useState(
    formik.values[field] ? new Date(formik.values[field]) : new Date()
  );

  const onChange = (e: number) => {
    formik.setFieldValue(field, e);
    formik.setTouched({ ...formik.touched, [field]: true });
  };
  useEffect(() => {
    formik.setFieldValue(field, Date.now());
  }, []);
  return (
    <FormControl
      id={field}
      isInvalid={!!formik.errors[field] && formik.touched[field] === false}
    >
      <FormLabel htmlFor={field} alignSelf='start'>
        {label}
      </FormLabel>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => {
          // @ts-ignore
          setStartDate(date);
          onChange(date.valueOf());
        }}
      />
    </FormControl>
  );
}

export default DatePickerField;
