import { Container, FormControl, FormLabel } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { FieldProps } from './types';

function StarField({ field, formik, label }: FieldProps) {
  const [rating, setRating] = useState(formik.values[field]);

  const onChange = (e: number) => {
    setRating(e);
    formik.setFieldValue(field, e);
    formik.setTouched({ ...formik.touched, [field]: true });
  };
  return (
    <FormControl
      id={field}
      isInvalid={!!formik.errors[field] && formik.touched[field] === false}
    >
      <FormLabel htmlFor={field} alignSelf='center' mb='10'>
        {label}
      </FormLabel>
      <Container mt='2' textAlign='center'>
        <Rating onClick={onChange} ratingValue={rating} transition />
      </Container>
    </FormControl>
  );
}

export default StarField;
