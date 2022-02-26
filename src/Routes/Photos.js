import React, {useContext} from 'react'
import {getClass} from '../utils/getClass'
import { Context } from '../Context'
import Image from '../Components/Image'


function Photos() {

    const { allPhotos} = useContext(Context)
    const imageElement = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))
  return (
    <main className='photos'>
        {imageElement}
    </main>
  )
}

export default Photos