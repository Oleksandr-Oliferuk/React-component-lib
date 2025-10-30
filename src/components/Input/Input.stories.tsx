import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Text = () => (
  <Input label="Text" type="text" placeholder="Enter text" value="" onChange={() => {}} clearable />
);

export const Password = () => (
  <Input
    label="Password"
    type="password"
    placeholder="Enter password"
    value=""
    onChange={() => {}}
    clearable
  />
);
