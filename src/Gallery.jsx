import React, { useEffect, useState } from 'react'
import img from './assets/img.png';
import { Flex } from 'antd'
import { Card } from 'antd';

const { Meta } = Card;

function HandleClick () {
    console.log("clicked")
}

function Image() {
  const [data, setData] = useState();

  React.useEffect(() => {
    try {
      fetch("https://api.unsplash.com/photos?client_id=dp2iEgOm5BfUzfPsH3Ue-nR_IZq1JSgzp5E2p4-nxBM").then((response) => {
        response.json().then((res) => {
          console.log(res);
          setData(res);
        })
      })
    }
    catch (error) {
      console.log(error)
    }
  }, [])
  return data;
}
const Gallery = () => {

  const Images = Image();
  return (
    <>

      {Images ?
        (Images.map((item) => {
          return <img
            key={item.id}
            src={item.urls.small}
            style={{
              width:"19vmax",
              height:"20vmax",
              padding:"2vmax",
              alignItems:"center"
            }}
          />
        })) : (<p>Loading....</p>)
      }
    </>
  )
}

export default Gallery