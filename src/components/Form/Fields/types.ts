import { FormikProps, FormikValues } from 'formik/dist/types';

export interface FieldProps {
  theme?: string;
  field: string;
  type?: string;
  formik: FormikProps<FormikValues>;
  label?: string;
  first?: boolean;
  numberProps?: {};
  options?: string[];
}
