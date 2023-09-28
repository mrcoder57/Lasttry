
import {useState,useEffect} from 'react';
import axios from 'axios';
const Translate=()=>{
    const[option,setOption]=useState([]);
    const[to,setTo]=useState("en");
    const[from,setFrom]=useState("en");
    const[input,setInput]=useState("");
    const[output,setOutput]=useState("");

useEffect(()=>{
    axios.get('https://libretranslate.de/languages',
    {headers:{'accept':'application/json'}}
    ).then(res=>{
        console.log(res.data);
        setOption(res.data);
    })
    
},[])

const translate=()=>{
    const params=new URLSearchParams();
params.append('q',input);
params.append('source',from);
params.append('target',to);
params.append('api_key','xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
    axios.post('https://libretranslate.de/translate', params ,
    {headers:{'accept':'application/json','Content-type':'application/x-www-form-urlencoded'}}).then(res=>{console.log(res.data)
    setOutput(res.data.translatedText)
    })
}

    return(
        <>
        <div className="Application">
            <div className='p-2 m-2 flex flex-col md:flex-row'>
                <p className='md:w-1/2 text-xl font-sans font-semibold md:pr-4 '>From {from}: &nbsp;{' '}</p>
                <select className=' p-1 h-12 w-[120px] text-[17.5px] md:w-1/2' onChange={e=>setFrom(e.target.value)}>
                    {option.map(opt=><option value={opt.code}>
                       {opt.name}
                    </option>)}
                   
                </select>
                &nbsp; &nbsp; &nbsp;
                <p className='md:w-1/2 font-sans font-semibold text-xl md:pr-4'>{"  "} To {to}:</p>
                <select className=' p-1 h-12 md:w-1/2' onChange={e=>setTo(e.target.value)}>
                {option.map(opt=><option value={opt.code}>
                       {opt.name}
                    </option>)}
                </select>
            </div>
            <div className='pl-6 grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div  >
                <textarea className='border border-blue-500 rounded-md w-[60%] h-full flex flex-wrap p-2 m-4 text-xl font-semibold' cols="50" rows="10" onInput={(e)=>setInput(e.target.value)}></textarea>
            </div>
            <div>
                <textarea className='border bg-gray-300 border-blue-500 rounded-md w-[60%] h-full flex flex-wrap p-2 m-4 text-xl font-bold'  cols="50" rows="10" value={output}></textarea>
            </div>
            </div>
            <div className='p-2 m-2'>
                <button className="flex flex-wrap bg-orange-500 p-2 m-2 rounded-md text-white font-extrabold" onClick={e=>translate()}>Translate</button>
            </div>
        </div>
        </>
    );
}
export default Translate;