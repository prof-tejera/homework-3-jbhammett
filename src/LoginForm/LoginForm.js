import "./LoginForm.css";
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

const LoginForm = () => {

  return <>
    
    <Input inputPlaceholder="Username" />
    
    <Input inputPlaceholder="Password" />

    <Input inputType="checkbox" inputName="Remember me" />

    <Button active="True" text="Submit"/>
  </>
};

export default LoginForm;
