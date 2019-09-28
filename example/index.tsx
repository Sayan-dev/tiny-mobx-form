import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { Form, IFormSchema } from '../.';

const schema: IFormSchema[] = [
  {
    name: 'firstName',
    placeholder: 'John',
    label: 'First Name',
    validation: 'required|length:2,20',
    initialValue: '',
  },
  {
    name: 'lastName',
    placeholder: 'Appleseed',
    label: 'Last Name',
    validation: 'required|length:2,20',
    initialValue: '',
  },
  {
    name: 'email',
    placeholder: 'jon@gmail.com',
    label: 'Email',
    validation: 'required|email',
    initialValue: '',
  },
  {
    name: 'age',
    placeholder: '22',
    label: 'Age',
    validation: 'required|number|size:18,100',
    initialValue: '',
  },
];

const { fields } = new Form(schema);

const App = observer(() => {
  return (
    <div>
      <div>
        <label htmlFor="firstName">{fields.firstName.label}</label>
        <input
          type="text"
          name="firstName"
          value={fields.firstName.value}
          placeholder={fields.firstName.placeholder}
          onChange={e => fields.firstName.value = e.currentTarget.value}
        />
        {fields.firstName.isDirty && fields.firstName.hasErrors && fields.firstName.errors.join(', ')}
      </div>
      <div>
        <label htmlFor="lastName">{fields.lastName.label}</label>
        <input
          type="text"
          name="lastName"
          value={fields.lastName.value}
          placeholder={fields.lastName.placeholder}
          onChange={e => fields.lastName.value = e.currentTarget.value}
        />
        {fields.lastName.isDirty && fields.lastName.hasErrors && fields.lastName.errors.join(', ')}
      </div>
      <div>
        <label htmlFor="email">{fields.email.label}</label>
        <input
          type="text"
          name="email"
          value={fields.email.value}
          placeholder={fields.email.placeholder}
          onChange={e => fields.email.value = e.currentTarget.value}
        />
        {fields.email.isDirty && fields.email.hasErrors && fields.email.errors.join(', ')}
      </div>
      <div>
        <label htmlFor="age">{fields.age.label}</label>
        <input
          type="text"
          name="age"
          value={fields.age.value}
          placeholder={fields.age.placeholder}
          onChange={e => fields.age.value = e.currentTarget.value}
        />
        {fields.age.isDirty && fields.age.hasErrors && fields.age.errors.join(', ')}
      </div>
    </div>
  );
});

ReactDOM.render(<App />, document.getElementById('root'));
