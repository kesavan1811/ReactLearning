import React, { useState } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'

function ClipBoard() {

    const[value,setValue]=useState("");
    const[copied,setCopied]=useState(false)

   const onChangehandle=(e)=>{
    setValue(e.target.value)
    setCopied(false)
   }

  return (
    <div>
    <input value={value}
      onChange={onChangehandle} />
    <br/>
    <br/>
    <CopyToClipboard text={value}
      onCopy={() => setCopied(true)}>
      <span>Copy to clipboard with span</span>
    </CopyToClipboard>
    <br/>
    <br/>
    <CopyToClipboard text={value}
      onCopy={() => setCopied(true)}>
      <button>Copy to clipboard with button</button>
    </CopyToClipboard>

    {copied ? <span style={{color: 'red'}}>Copied.</span> : null}
    <br/>
    <br/>
    <input type="text" />
  </div>
  )
}

export default ClipBoard