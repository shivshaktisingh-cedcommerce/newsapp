import React ,{useState} from 'react'
import "./Component2.css"
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
var count = 0;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -80%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    borderRadius:'10px'
  };
export default function Component2() {
    const[topic , setTopic]=useState('')
    const[content , setContent]=useState('')
    const[flagmodal,setFlagmodal]=useState(false)
    const[notes,setNotes]=useState([{id:Math.random() , topic:"just1" , content:"just checking" , date:new Date().getDate()+ "/" +new Date().getMonth() + "/" +new Date().getFullYear()},{id:Math.random() , topic:"just2" , content:"just checking" , date:new Date().getDate()+ "/" +new Date().getMonth() + "/" +new Date().getFullYear()},{id:Math.random() , topic:"just3" , content:"just checking" , date:new Date().getDate()+ "/" +new Date().getMonth() + "/" +new Date().getFullYear()},{id:Math.random() , topic:"just4" , content:"just checking" , date:new Date().getDate()+ "/" +new Date().getMonth() + "/" +new Date().getFullYear()},{id:Math.random() , topic:"just5" , content:"just checking" , date:new Date().getDate()+ "/" +new Date().getMonth() + "/" +new Date().getFullYear()},{id:Math.random() , topic:"just6" , content:"just checking" , date:new Date().getDate()+ "/" +new Date().getMonth() + "/" +new Date().getFullYear()}])
    const[topicmessage,setTopicmessage]=useState('')
    const[contentmessage,setContentmessage]=useState('')
    const[buttonvalue , setButtonvalue]=useState('SAVE')
    const[editindex, setEditindex]=useState()
    const[searchinput,setSearchinput]=useState('')
    const save_new_notes_fun=(event)=>{
      
     if(topic===""){
         setTopicmessage("Please enter your topic")
     }
     else if(content===""){
        setContentmessage("Please enter your Content")
     }
     else{
         if(buttonvalue==='SAVE'){
            setNotes([...notes ,{id:Math.random() , topic:topic , content:content , date:new Date().getDate()+ "/" +new Date().getMonth() + "/" +new Date().getFullYear()}])
            setFlagmodal(false)
         }
         else if(buttonvalue==='EDIT'){
             notes.map((d)=>{      
                 if(d.id===editindex){            
                     d.topic=topic;
                     d.content=content
                 }
             })
             setNotes([...notes])
             setFlagmodal(false)
         
         }
         setTopic('')
         setContent('')
         setTopicmessage('')
         setContentmessage('')
     }
     
    }

    const span_edit_fun=(d)=>{
       
        setTopic(d.topic)
        setContent(d.content)
        setEditindex(d.id)
        setButtonvalue('EDIT')
        setFlagmodal(true)
    }

    const span_delete_fun=(d)=>{
        notes.splice(d , 1)
        setNotes([...notes])

    }

    const add_new_note_fun=()=>{
        setFlagmodal(true)
        setButtonvalue('SAVE')
        setTopic('')
         setContent('')
    }
    const visionfun=()=>{
        if(count%2===0){
          document.getElementById("component2_main_div_id").style.filter="saturate(50%)";
        }
        if(count%2!==0){
          document.getElementById("component2_main_div_id").style.filter="saturate(100%)";
        }
        count++;
      }

      const search_fun=(event)=>{
          setSearchinput(event.target.value)

      }


      const scrollup_fun=()=>{
          document.body.scrollTop=0;
          document.documentElement.scrollTop=0;

      }
  
  return (
    <div id="component2_main_div_id">
        <div id="navbar_div_id">
            <div id="navbar_div1">note</div>
            <div id="navbar_div2"><button id="eye_btn_id" onClick={visionfun}><VisibilityOffOutlinedIcon/></button></div>
        </div>
        <div id="add_new_note_div_id">
            <button id="add_new_note_btn_id" onClick={add_new_note_fun}><AddBoxOutlinedIcon id="add_icon_id" />Add new Note</button>
            <div id="search_div_id"><input type="text" id="search_text_box_id" value={searchinput} onChange={search_fun}/><SearchOutlinedIcon id="search_icon_id"/></div>
        </div>
        <div id="render_all_previous_notes_div_id">
            {searchinput===''?notes.map((d , index)=>{
                return(
                    <div id="repeitive_div_id">
                        <p id="repetitive_p1_id"><span id="notes_topic_span">{d.topic}</span><span id="span_date_id">{d.date}</span><span id="edit_icon_id" onClick={()=>span_edit_fun(d)}><EditTwoToneIcon/></span><span id="delete_icon_id" onClick={()=>span_delete_fun(index)}><DeleteOutlineTwoToneIcon/></span></p>
                        <p id="repetitive_p2_id">{d.content}</p>
                    </div>
                )
            }):notes.map((d , index)=>{
              
                    if( d.topic.includes(searchinput)){
                        return(
                            <div id="repeitive_div_id">
                               <p id="repetitive_p1_id"><span id="notes_topic_span">{d.topic}</span><span id="span_date_id">{d.date}</span><span id="edit_icon_id" onClick={()=>span_edit_fun(d)}><EditTwoToneIcon/></span><span id="delete_icon_id" onClick={()=>span_delete_fun(index)}><DeleteOutlineTwoToneIcon/></span></p>
                               <p id="repetitive_p2_id">{d.content}</p>
                            </div>
                            
                            )
                    }

              
                })}
        </div>
       
        <Modal
        open={flagmodal}
        onClose={()=>setFlagmodal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="box_id">
            <p id="topic_message_p_id">{topicmessage} {topicmessage.length!==0?<button className="topic_close_btn" onClick={()=>setTopicmessage('')}>X</button>:""}</p>
        <input type="text" id="topic_field_id" placeholder="Topic" value={topic} onChange={(event)=>setTopic(event.target.value)}/>
           <p id="topic_message_p_id">{contentmessage}{contentmessage.length!==0?<button className="topic_close_btn" onClick={()=>setContentmessage('')}>X</button>:""}</p>
        <textarea
          Rows={5}
          placeholder="Your content here"
          style={{ width: 400 }}
          id="textarea_id"
          value={content}
          onChange={(event)=>setContent(event.target.value)}
         />
         <Button variant="outlined" onClick={save_new_notes_fun}>{buttonvalue}</Button>
        </Box>
      </Modal>
      <button id="navigation_btn_id" onClick={scrollup_fun}><NavigationOutlinedIcon id="navigation_icon_id"/></button>
     

    </div>
  )
}
