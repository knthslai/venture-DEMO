import { isEmpty } from 'lodash';
import * as yup from 'yup';

/** Adding just additional methods here */

yup.addMethod(yup.string, 'URL', function (...args) {
  return this.url(...args);
});

const stringValidator = function (message) {
  return this.test('is-string-boolean', message, function (value) {
    if (isEmpty(value)) {
      return true;
    }
  });
};

yup.addMethod(yup.string, 'stringBoolean', stringValidator);
yup.addMethod(yup.string, 'StringBoolean', stringValidator);

function intoYup(schema, config) {
  const { field, validationType, fields } = config;
  if (validationType === 'object') {
    fields.reduce(intoYup, schema);
  } else if (field === 'confirmPassword') {
    schema.confirmPassword = yup
      .string()
      .required('Please confirm your password')
      .oneOf([yup.ref('password'), null], 'Passwords must match');
  } else {
    if (!validationType || !yup[validationType]) {
      return schema;
    }
    schema[field] = recursiveYup(config);
  }

  return schema;
}
function recursiveYup(config) {
  const { validationType, validations = [] } = config;
  let validator = yup[validationType]();
  validations.forEach((validation) => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }
    validator = validator[type](...params);
  });
  return validator;
}

const createSchema = (
  metadata,
  additionalValidations = [],
  forceRemove = []
) => {
  const yepSchema = metadata.reduce(intoYup, {});
  const mergedSchema = {
    ...yepSchema,
    ...additionalValidations
  };

  forceRemove.forEach((field) => {
    delete mergedSchema[field];
  });

  const validateSchema = yup.object().shape(mergedSchema);

  return validateSchema;
};
export default createSchema;
