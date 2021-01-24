function InputText(props) {
    return(
      <input type='text' onChange={(e) => {
        console.log('input text value:', e.target.value)
        const value = e.target.value.trim();
        if(value){
        props.getValue(e.target.value, props.index)
        }
      }} />
    )
   }
   
   export default InputText;