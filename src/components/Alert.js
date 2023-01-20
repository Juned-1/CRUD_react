import React from 'react'

export default function Alert(props) {
    const capitalize = (word) =>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
        //slice all the charcter except one charcter at first
    }
    //rather than performing if else syntax we could perform common systax props.alert
    //if alert is not false or null then second part after && will excute
  return (
    <div style={{height:'50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
    </div>}
    </div>
  )
}
