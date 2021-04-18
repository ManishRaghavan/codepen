import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

export const Editor = (props) => {

    const{displayName,language,value,onChange} = props
    const [open, setOpen] = React.useState(true)
    const handleChange =(editor,data,value) =>{
        onChange(value)
    } 

    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title">
                {displayName}
                <button
                 className="expand-collapse-btn"
                 onClick={() => setOpen(prevOpen => !prevOpen)}
                 ><FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                 </button>
                 
            </div>
            <ControlEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping:true,
                    lint:true,
                    mode:language,
                    lineNumbers:true,
                    theme:"material"
                }}
            />
        </div>
    )
}
