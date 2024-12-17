import React from 'react'
import laboPerfumes from "../assets/laboPerfumes.mp4"

function VideoSection() {
  return (
    <div className='max-w-screen h-auto my-6 relative products' >
        <video src={laboPerfumes} className='rounded-xl max-w-screen h-[20rem] md:h-[35rem] lg:h-[40rem] w-screen object-cover  ' loop autoPlay muted />
         

    </div>
  )
}

export default VideoSection