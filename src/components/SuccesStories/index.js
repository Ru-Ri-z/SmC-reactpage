import React, { useState } from 'react'
import './SucessStories.scss'
import { HashLink as Link } from 'react-router-hash-link'
import { useSurfContext } from '../../context'
import ShareButtons from '../ShareMediaButtons'

const SuccessStories = () => {
  const { successStories } = useSurfContext();
  const [share, setShare] = useState(false);
  console.log(window.location.href)
  return (
    <div className="success-stories">
      <div className="success-stories__container__title">
        <h2>Success <span>Stories</span></h2>
      </div>
      <div className="success-stories__container__content">
        {successStories?.map(item => (
          <div className="success-stories__container__content__item" key={item.id} id={item.nombre}>
            <div className="success-stories_img">
              <img src={item.url} alt={item.nombre} />
            </div>
            <h3 className="success-stories_date">{item.date}</h3>
            <div className="success-stories__container__content__item__title">
              <h3>{item.nombre}</h3>
              <p>{item.description}</p>
            </div>
            <div className='sucess-stories_buttonLink'>
              <Link className='link' to='/success-stories'>+</Link>
              <img alt='share' src={require('../../assets/share-button.png')} onClick={() => setShare(!share)} />
              {share && (
                <ShareButtons item={item} setShare={setShare} url={`${window.location.href}/success-stories/#${item.nombre}`} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SuccessStories
