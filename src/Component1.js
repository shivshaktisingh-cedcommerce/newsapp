// import React ,{ useEffect , useState} from 'react'
// import "./Component1.css"
// import Skeleton from '@mui/material/Skeleton';
// var count=0;

// export default function Component1() {
//     const[post,setPost]=useState()
//     const[topic,setTopic]=useState("india")
//     const[topic1,setTopic1]=useState()
//     const getData = () => {
//         // fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=de713b26887d4c68a61209262645aa51`)
//         fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2022-08-01&sortBy=publishedAt&apiKey=fc718cf5cf334530a49870c4cb830b82`)
//         .then((res)=>res.json())
//         .then(json=>{setPost(json)})
//     }
//     useEffect(()=>{
     
//         fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2022-08-01&sortBy=publishedAt&apiKey=fc718cf5cf334530a49870c4cb830b82`)
//         .then((res)=>res.json())
//         .then(json=>{setPost(json)})
//         console.log(post)

//     },[post])
//     window.onscroll=()=>{
//       triggeredfun();
//     }
//     const triggeredfun=()=>{
//       if(document.body.scrollTop>200 ||document.documentElement.scrollTop>150){
//         document.getElementById('top_move_btn_id').style.display="block";
//       }
//       else{
//         document.getElementById('top_move_btn_id').style.display="none";

//       }

//     }

//     const topfun=()=>{
//       document.body.scrollTop=0;
//       document.documentElement.scrollTop=0;

//     }

//     const newstopic_predefined=(event)=>{
//       setTopic(event.target.innerText)
//       document.getElementById('find_btn_id').click()

//     }

//     const set_topic_value=(event)=>{
//       setTopic1(event.target.value)
//       if(topic1.length>1){
//         setTopic(topic1)
//       }

//     }

//     const visionfun=()=>{
//       if(count%2===0){
//         document.getElementById("component1_main_div").style.filter="saturate(50%)";
        
//       }
//       if(count%2!==0){
//         document.getElementById("component1_main_div").style.filter="saturate(150%)";
        
//       }
//       count++;
      
//     }

//   return (
//     <div id="component1_main_div">
     
//       <div id="navbar_div_id">
        
//         <div className="logo_id"><button id="logo_button_id">NEWS</button></div>
//         <div className="logo_id" onClick={newstopic_predefined}>India</div>
//         <div className="logo_id" onClick={newstopic_predefined}>World</div>
//         <div className="logo_id" onClick={newstopic_predefined}>Business</div>
//         <div className="logo_id" onClick={newstopic_predefined}>Tech</div>
//         <div className="logo_id" onClick={newstopic_predefined}>Movies</div>
//         <div className="logo_id" onClick={newstopic_predefined}>Sports</div>
//         <div className="logo_id" onClick={newstopic_predefined}>Science</div>
     
//       </div>
//       <div id="navbar2_div_id">
//         <div id="tagline_div_id">“The news you need, not the fluff.”</div>
//         <div>
//       <input type="search" id="searchbox_id" onChange={set_topic_value} value={topic1} autoFocus/>
//        <button onClick={getData} id="find_btn_id">Find</button>
//        <i class="fa-solid fa-eye eye_icon" onClick={visionfun}></i>
//        </div>
//        <div> <button onClick={topfun} id="top_move_btn_id"><i class="fa-solid fa-arrow-up"></i></button></div>

//       </div>
    
//         <div className='sample'>
//        {post===undefined?"":post.articles.map((d)=>{
//          if(d.urlToImage!==null){
//           return (<div id="repetitive_div_id">
//           <div id="image_div_id">
//           <img src={d.urlToImage} alt="Image Not Found" id="image_id"/>
//           </div>
//           <div id="all_content_div_id">
//              <p id="p_title_id">{d.title}</p>
//              <p id="p_description_id">{d.description}</p>
//              <p id="new_page_url_id"><a href={d.url} target="blank">Click to read more</a></p>
//              <p id="author_publishedat_id"><span id="author_span_id">Author:<span style={{color:"blue"}}>{d.author}</span></span><span id="published_span_id">Published At:<span style={{color:"blue"}}>{d.publishedAt}</span></span></p>
//           </div>
//           </div>
//         )

//          }
        
//        })}</div>
//     </div>
//   )
// }
