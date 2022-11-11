import React,{useEffect,useState} from 'react'
import axios from '../../axios';
import {imageUrl,API_KEY} from '../../constance/constance'
import YouTube from 'react-youtube'
import './RowPost.css'
function RowPost(props) {
  const [state,setState] = useState([])
  const [urlId,setId] =useState('')

  useEffect(()=>{
     axios.get(props.url).then((response)=>{
            console.log(response.data)
            setState(response.data.results)
     })
    

  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setId(response.data.results[0])
      }else{
        console.timeLog('Array Empty')
      }
    })
   
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          { state.map((obj)=>{

            return(
              <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster' } alt='posters' src={`${imageUrl+obj.backdrop_path }`}></img>
            )
               


          }) }
           
            
        </div>
        { urlId && <YouTube opts={opts} videoId={urlId.key}/>  }
      
    </div>
  )
}

export default RowPost
