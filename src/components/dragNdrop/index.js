import React, { useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  const focusedStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };

  const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: "auto",
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };
  

const Dragndrop=()=>{

    const[fileImage, setFilesImage]=useState([])

    const{acceptedFiles,getRootProps,getInputProps, isFocused, isDragAccept, isDragReject,open}=useDropzone({
        // accept:'image/*',
        noClick:true,noKeyboard:true,
    onDrop:acceptedFiles=>{
        setFilesImage(acceptedFiles.map(file=>Object.assign(file,{
            preview:URL.createObjectURL(file)
        })));
    }});

    const thumbs=fileImage.map(file=>(
        <div style={thumb} key={file.name} >
            <div style={thumbInner} >
                <img src={file.preview} style={img} />
            </div>
        </div>
    ))

    useEffect(()=>{
        // Make sure to revoke the data uris to avoid memmory leaks
        fileImage.forEach(file=>URL.revokeObjectURL(file.preview));
    },[fileImage]);

    const files = acceptedFiles.map(file=>(
        <li key={file.size} >
            {file.path}-{file.size} bytes
        </li>
    ))

    const style =useMemo(()=>({
        ...baseStyle,
        ...(isFocused ? focusedStyle:{}),
        ...(isDragAccept ? acceptStyle:{}),
        ...(isDragReject ? rejectStyle:{})
    }),[isFocused,isDragAccept,isDragReject])

    return(
        <section>
            <div {...getRootProps({style})} >
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
                <button type="button" onClick={open}>
                Open File Dialog
                </button>
            </div>
            <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
            </aside>
            <aside style={thumbsContainer}>
                {/* <h4>Files</h4> */}
                {thumbs}
            </aside>
        </section>
    )
}

export default Dragndrop;