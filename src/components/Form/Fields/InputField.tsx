import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import React, { FormEvent } from 'react';
import { FieldProps } from './types';

function InputField({ field, type, formik, label, first = false }: FieldProps) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const isPassword = type === 'password';
  const onBlur = (e: FormEvent<HTMLInputElement>) => {
    formik.handleBlur(e);
    formik.setTouched({ ...formik.touched, [field]: false });
  };
  const onChange = (e: FormEvent<HTMLInputElement>) => {
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
      {isPassword ? (
        <InputGroup size='md'>
          <Input
            autoFocus={first}
            autoComplete='true'
            value={formik.values[field]}
            id={field}
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
            name={field}
            onBlur={onBlur}
            onChange={onChange}
            style={{ background: 'white' }}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      ) : (
        <Input
          autoFocus={first}
          autoComplete='true'
          value={formik.values[field]}
          id={field}
          type={type}
          name={field}
          onBlur={onBlur}
          onChange={onChange}
          style={{ background: 'white' }}
          placeholder={`Enter your ${field}`}
        />
      )}
      <FormErrorMessage style={{ color: 'white' }}>
        {formik.errors[field]}
      </FormErrorMessage>
    </FormControl>
  );
}

export default InputField;
