import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea
} from '@chakra-ui/react';
import React, { ChangeEvent, FormEvent } from 'react';
import { FieldProps } from './types';

function TextAreaField({ field, formik, label, first = false }: FieldProps) {
  const onBlur = (e: FormEvent<HTMLTextAreaElement>) => {
    formik.handleBlur(e);
    formik.setTouched({ ...formik.touched, [field]: false });
  };
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    formik.handleChange(e);
    formik.setTouched({ ...formik.touched, [field]: true });
  };
  return (
    <FormControl
      id={field}
      isInvalid={!!formik.errors[field] && formik.touched[field] === false}
    >
      <FormLabel htmlFor={field} alignSelf='start'>
        {label}
      </FormLabel>
      <Textarea
        autoFocus={first}
        value={formik.values[field]}
        onBlur={onBlur}
        onChange={onChange}
        placeholder='Write your review here...'
        size='sm'
      />
      <FormErrorMessage style={{ color: 'white' }}>
        {formik.errors[field]}
      </FormErrorMessage>
    </FormControl>
  );
}

export default TextAreaField;
