import { Text } from '@chakra-ui/react';
import { FormikProps, FormikValues } from 'formik';
import React from 'react';
import { InputType } from '../inputTypes';
import DatePickerField from './DatePickerField';
import InputField from './InputField';
import NumberField from './NumberField';
import SelectField from './SelectField';
import StarField from './StarRating';
import TextAreaField from './TextAreaField';

const Fields = ({
  theme,
  config,
  formik,
  inner = false
}: {
  theme?: string;
  config: InputType[];
  formik: FormikProps<FormikValues>;
  inner?: boolean;
}) => (
  <>
    {config.map((c, idx) => {
      const first = inner ? false : idx === 0;
      switch (c.type) {
        case 'text':
        case 'password':
          return (
            <InputField
              theme={theme}
              first={first}
              key={c.field+idx}
              {...c}
              formik={formik}
            />
          );
        case 'number':
          return <NumberField key={c.field+idx} {...c} formik={formik} />;
        case 'datePicker':
          return <DatePickerField key={c.field+idx} {...c} formik={formik} />;
        case 'select':
          return (
            <SelectField first={first} key={c.field+idx} {...c} formik={formik} />
          );
        case 'starRating':
          return <StarField key={c.field+idx} {...c} formik={formik} />;
        case 'textArea':
          return (
            <TextAreaField first={first} key={c.field+idx} {...c} formik={formik} />
          );
        case 'confirmPassword':
          return c.fields && <Fields config={c.fields} formik={formik} inner />;
        default:
          return <Text key={c.field+idx}>Unsupported field</Text>;
      }
    })}
  </>
);

export default Fields;
