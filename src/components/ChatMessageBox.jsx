import React,{useEffect,useRef,useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './ChatMessageBox.css'
import bot from '../assets/img/bot.png'
import {ChatMessageModel} from '../Model/ChatMessageModel'
import '@cision/atlas-components'
import Typewriter from 'typewriter-effect';
import DragDropFiles from './DragDropFiles'
import docIcon from '../assets/img/google-docs.png'



const Data =[
  'Between April 9th, 2023 and May 9th, 2023, a total of 34 companies have filed a prospectus'
  ,'Certainly. Two companies have indicated their intention to list on the Canadian Securities Exchange, also known as the CSE.',
  'They are: 1. AI Centrix - Their non-offering prospectus, published on April 26, 2023, states that they are preparing for a listing on the Canadian Securities Exchange. 2. Austin Gold Corp - They have received a preliminary receipt from the BC Securities Commission, which suggests they plan to list on the CSE'];

const ChatMessageBox = () => {


  const [chatMessages, setChatMessages] = useState([]);
  const scrollBottomRef = useRef(null);
  const [addDocument,setAddDocument] = useState(false);
  const [fileName,setFileName] = useState('');
  const [user, setUser] = useState('User');
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);
  const webSocket = useRef(null);


  useEffect(() =>{
    scrollToBottom();

  },[chatMessages])

  const scrollToBottom = () => {
    scrollBottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

const handleBack = child =>{
  console.log(child[0].name);
  setFileName(child[0].name);

}

  const reciveMessage = () =>{
    let date = new Date();

    let newMessage =  new ChatMessageModel('bot',Data[count],date);

      console.log('Send!');
      let dateCreated = new Date();
      setChatMessages(oldMessages => [...oldMessages, newMessage]);
      setMessage('');
      setCount(count + 1)
  

  }


  const sendMessage = async () => {

    console.log(message)
    let date = new Date();
    let text = message;
    if(addDocument){
      text=fileName;
    }
    console.log(!message && !addDocument);

      let newMessage =  new ChatMessageModel('user',text,date);
      let dateCreated = new Date();
      setChatMessages(oldMessages => [...oldMessages, newMessage]);
      setMessage('');
      await delay(1000);
      reciveMessage();
      setAddDocument(false);
};

  return (<>

    <div className="chatBox w-full min-h-[100vh] overflow-hidden p-5 bg-slate-200">
      <Box
        sx={{
          boxShadow: 3,
          width: 'auto',
          height: '75vh',
          overflowY:'scroll',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 2,
          m: 1,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
        
      >
        <Box
        sx={{
          boxShadow: 3,
          width: '75',
          height: '100',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 3,
          m: 5,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        <p className='text-left'>Identifying potential customers, aka prospects. he goal of prospecting is to develop a database of likely customers and then systematically communicate with them in the hopes of converting them from potential customer to current customer.</p>

      </Box>

      <div className="flex flex-col" ref={scrollBottomRef}>
        {chatMessages.map(item =>{

          if(item.user !== 'user'){
            return(    <div class="message left">
            <img class="logo" src={bot} alt=""/>
            <Typewriter
              options={{
                delay: 30,
                cursor:''
              }}

              onInit={(typewriter) => {
                typewriter.typeString(item.message)
                  .pauseFor(3500)
                  .start();
              }}
            />
            </div>)
          }

          return(<div class="message right">
          <img class="logo" src="https://randomuser.me/api/portraits/women/17.jpg" alt=""/>
          <p>{item.message}</p>
        </div>)
        })}

      </div>
      <div ref={scrollBottomRef} />
      </Box>
      <div className="flex gap-2 p-5 bg-slate-500">
        <div className="inputIcons flex-grow">
          {addDocument ?   <DragDropFiles handleBack={handleBack}/>: <input type="text" className="w-full h-12 p-2" placeholder="Type Message" value={message} onChange={e => setMessage(e.target.value)}/>}
         
        </div>
        <button class="button-5 bg-blue-600" role="button" onClick={() =>setAddDocument(!addDocument)}>{!addDocument ? 'Add Document':'Text'}</button>
        <button class="button-5 bg-orange-600" role="button" onClick={() =>sendMessage()} disabled={!message && !addDocument} >Send Message</button>
      </div>
       
    </div>
  </>
  )
}

export default ChatMessageBox