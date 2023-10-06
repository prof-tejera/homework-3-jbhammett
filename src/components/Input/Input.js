const Input = (props) => {
  // return <input {...props} />;
  const { inputPlaceholder, inputType, inputName } = props;
const style = {
    margin: 10,
  }

  return <>
  
  <label for={inputName}>
    <input style={style} placeholder={inputPlaceholder} type={inputType} /> {inputName}
  </label>
  <br />

  </>
  ;
};

export default Input;
