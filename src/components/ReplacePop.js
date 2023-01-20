import React, { useState } from 'react'

export default function ReplacePop(props) {
  const [text1,setText1] = useState('')
  const setRep = (event) =>{
    setText1(event.target.value)
  }
  
  const [text2,setText2] = useState('')
  const setRep2 = (event) =>{
    setText2(event.target.value)
  }

  const [repl,setRepl] = useState(false)
  let val1,val2;
  let newText;
  const replace = (event) =>{
    setRepl(!repl)
    //let newText;
    if(text1 !== '' && text2 !== '' && props.text !== ''){
      newText = props.text.valueOf()
      let reg = new RegExp(text1)
      newText  = newText.replace(reg,text2)
      console.log(newText)
      props.setValues(newText)
    }
  }
  console.log(newText)
  return (
<>
<button type="button" className="btn btn-primary mx-2 my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Replace
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Replace Words</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
          <label className="form-label">To be replaced</label>
          <input type="text" className="form-control" onChange={setRep}/>
          <div id="text" className="form-text"></div>
          </div>

          <div className="mb-3">
          <label htmlFor="Text" className="form-label">Replica</label>
          <input type="text" className="form-control" onChange={setRep2}/>
          <div id="text2" className="form-text"></div>
          </div>
          <button type="btn btn-primary" className="btn btn-primary mx-2" onClick={replace}>Replace</button>
          <button type="btn btn-primary" className="btn btn-primary mx-2">Replace All</button>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

</>
  )
}
