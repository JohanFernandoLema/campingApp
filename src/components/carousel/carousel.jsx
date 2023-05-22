import './carousel.scss'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import imagesArray from '../../../public/Assets/imagesCarousel'
const Carousel = () => {
  const [width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])
  return (
    <>
      <div className="wrapper">
        <h1>Our Gallery </h1>
        <motion.div ref={carousel} className="carousel">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            class="innerCarousel"
          >
            {imagesArray.map((image, index) => {
              return (
                <motion.div className="item" key={index}>
                  <img src={image} alt="image" />
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
export default Carousel
