import "./RadioButtons.css";
import Button from 'components/Button/Button';
import Panel from 'components/Panel/Panel';

const RadioButtons = () => {
  return <>
  
    <Panel>
      <Button active="True" text="Apple" />
      <Button active="True" text="Pear" />
      <Button active="True" text="Orange"/>
    </Panel>
  </>
};

export default RadioButtons;
