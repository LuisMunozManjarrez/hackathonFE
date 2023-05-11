import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import newMessageLogo from '../assets/img/new-message.png'
import '@cision/atlas-components'
import {Link} from 'react-router-dom';

const Card = ({title,message,description,style,path}) => {
  return (<>

      <Box
        sx={{
          boxShadow: 3,
          width: '250',
          height: '300',
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
        <div className={`w-16 h-16 p-5 rounded-full bottom-[50px] right-12 mr-10 relative ${style}`}>
          <img className='w-full h-full object-cover' src={newMessageLogo} alt="" />
        </div>
        <div className="flex flex-col justify-start align-baseline text-left gap-5">
          <div>
            <h2 className="text-3xl">{title}</h2>
          <div className="h-1 w-1/2 bg-orange-500 rounded-full"></div>
          </div>
          <div className='w-10/12 max-w-xs'><p>{description}</p></div>
          
          <Link to={path}>
            <Button variant="outlined" sx={{width:'100', heigth:'50'}}>
              {message}
            </Button>
          </Link>
        </div>

      </Box>
    <div className='bg-white w-[350] h-80'>
      
    </div>


  </>

  )
}

export default Card