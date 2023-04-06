import './ImageCarousel.css'


function ImageCarousel() {

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
    console.log(img.url)
    return(
      <div 
        key={i} 
        className='imageCarousel__img' 
        // style={{backgroundImage: `url(${img.url})`}}
      
      >

      </div>
    )
  })


  return (
    <div className='imageCarousel'>
      <div className='imageCarousel__items'>
        {images}
      </div>

    </div>
  )
} 

export default ImageCarousel;