import { useRef, useState } from 'react'
import './ImageCarousel.css'


function ImageCarousel() {

  let ref = useRef();

  const [state, setState] = useState({
    isDragging: false,
    clientX: 0,
    scrollX: 0

  })

  const img = [
    {
      url: '../../../public/images/img1.png'
    }, 
    {
      url: '../../../public/images/img2.png'
    }, 
    {
      url: '../../../public/images/img3.png'
    }, 
    {
      url: '../../../public/images/img3.png'
    }, 
    {
      url: '../../../public/images/img3.png'
    }, 
    {
      url: '../../../public/images/img4.png'
    }
  ]

  const images = img.map((img, i) => {
    // console.log(img.url)
    return(
      <div 
        key={i} 
        className='imageCarousel__img' 
        // style={{backgroundImage: `url(${img.url})`}}
      
      >

      </div>
    )
  })


  const handleMouseDown = (e) => {

    if(ref && ref.current && !ref.current.contains(e.target)){
      return
    }
    e.preventDefault()
    setState({
      ...state,
      isDragging: true,
      clientX: e.clientX 

    })
  }

  const handleMouseUp = (e) => {

    if(ref && ref.current && !ref.current.contains(e.target)){
      return
    }
    e.preventDefault()
    setState({
      ...state,
      isDragging: false,
    })
  }

  const handleMouseMove = (e) => {

    if(ref && ref.current && !ref.current.contains(e.target)){
      return
    }
    e.preventDefault()
    
    const {clientX, scrollX, isDragging} = state;

    if(isDragging) {
      ref.current.scrollLeft = scrollX - (e.clientX - clientX)
      setState({
        ...state, 
        scrollX: scrollX - (e.clientX - clientX),
        clientX: e.clientX
      })
    }
  }

  return (
    <div className='imageCarousel'>
      <div 
        className='imageCarousel__items' 
        ref={ref}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {images}
      </div>
    </div>
  )
} 

export default ImageCarousel;