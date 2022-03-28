import { useRef,useState} from 'react';

import classes from './PhoneItemForm.module.css';
import Input from '../../UI/Input';
const PhoneItemForm=props=>{
 const[amountIsValid,setAmountIsValid]=useState(true);
   const amountInputRef=useRef();

  const submitHandler=event=>{
    event.preventDefault();

    const enteredAmount=amountInputRef.current.value;
    const enteredAmountNumber=+enteredAmount;

    if(enteredAmount.trim().length===0||enteredAmountNumber<1||enteredAmountNumber>5){
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
  <form className={classes.form} onSubmit={submitHandler}>
    <div className={classes.input}>
      <Input 
      ref={amountInputRef}
      input={{
        id:'amount',
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
      }}/>
      <button>+</button>
      {!amountIsValid&&<p>Please enter a valid amount</p>}
      </div>
  </form>
  );
};

export default PhoneItemForm;