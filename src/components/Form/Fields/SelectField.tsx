import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import React from 'react';
import { FieldProps } from './types';

function SelectField({ field, type, formik, label, options = [] }: FieldProps) {
  return (
    <FormControl id={field}>
      <FormLabel htmlFor={field}>{label}</FormLabel>
      <Select
        placeholder='Select option'
        value={formik.values[field]}
        id={field}
        type={type}
        name={field}
        onChange={formik.handleChange}
        style={{ background: 'white' }}
      >
        {options.map((val: string) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectField;
