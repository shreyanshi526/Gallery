import React from 'react'
import img from './assets/img.png'
const arr = [
    {
      "img" : img
    },
    {
      "img" : img
    },
    {
      "img" : img
    }
  ]

 const Gallery = () => {
    return (
        <>
            {arr.map((item) => (
                <img src={item.img} />
            ))}
        </>
    )
}

export default Gallery