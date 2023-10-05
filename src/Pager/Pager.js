import "./Pager.css";
import Button from 'components/Button/Button';
import Panel from 'components/Panel/Panel';

const Pager = () => {
  return <>
    <Panel>

      <Button active="True" text="<" />
      <Button active="True" text="1" />
      <Button active="True" text="2"/>
      <Button active="True" text="3"/>
      <Button active="True" text="4"/>
      <Button active="True" text="5"/>
      <Button active="True" text="6"/>
      <Button active="True" text="7"/>
      <Button active="True" text="8"/>
      <Button active="True" text="9"/>
      <Button active="True" text="10"/>
      <Button active="True" text=">"/>
    </Panel>
  </>
};

export default Pager;
