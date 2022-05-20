const toLabel = (str: string) =>
  str
    .split('_')
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(' ');

export interface ValidationInputType {
  type: string;
  params: (string | number)[];
}
export interface InputType {
  type: string;
  field: string;
  validationType?: string;
  fields?: any[];
  validations?: ValidationInputType[];
}

export default {
  generateTextType: (field: string, label = toLabel(field)) => ({
    field,
    label,
    type: 'text',
    validationType: 'string'
  }),
  generateNumberType: (field: string, label = toLabel(field)) => ({
    field,
    label,
    type: 'number'
  }),
  generateSelectNumberType: (field: string, label = toLabel(field)) => ({
    field,
    label,
    type: 'selectNumber'
  }),
  generateDatePickerType: (field: string, label = toLabel(field)) => ({
    field,
    label,
    type: 'datePicker'
  }),
  description: {
    type: 'textArea',
    field: 'description',
    label: 'Description',
    validationType: 'string',
    validations: [
      {
        type: 'min',
        params: [20, 'Description needs to be 6+ characters']
      }
    ]
  },
  starRating: {
    type: 'starRating',
    field: 'rating',
    label: 'Rating'
  },
  username: {
    type: 'text',
    field: 'username',
    label: 'Username',
    validationType: 'string',
    validations: [
      {
        type: 'required',
        params: ['Username is required']
      },
      {
        type: 'min',
        params: [6, 'Username needs to be 6+ characters']
      }
    ]
  },
  email: {
    type: 'text',
    field: 'email',
    label: 'Email',
    validationType: 'string',
    validations: [
      {
        type: 'required',
        params: ['Email is required']
      },
      {
        type: 'email',
        params: ['A valid email is required']
      }
    ]
  },
  password: {
    type: 'password',
    field: 'password',
    label: 'Password',
    validationType: 'string',
    validations: [
      {
        type: 'required',
        params: ['Password is required']
      },
      {
        type: 'min',
        params: [8, 'Password needs to be 6+ characters']
      }
    ]
  },
  confirmPassword: {
    type: 'confirmPassword',
    field: 'passwordMatch',
    validationType: 'object',
    fields: [
      {
        type: 'password',
        field: 'password',
        label: 'Password',
        validationType: 'string',
        validations: [
          {
            type: 'required',
            params: ['Password is required']
          },
          {
            type: 'min',
            params: [8, 'Password needs to be 6+ characters']
          }
        ]
      },
      {
        type: 'password',
        field: 'confirmPassword',
        label: 'Confirm password'
      }
    ]
  },
  name: {
    type: 'text',
    field: 'name',
    label: 'Name',
    validationType: 'string',
    validations: [
      {
        type: 'required',
        params: ['Name is required']
      }
    ]
  },
  role: {
    type: 'select',
    field: 'role',
    label: 'Role',
    options: ['Regular', 'Admin']
  }
};
