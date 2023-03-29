import React, { useState } from 'react'
import '../components/SuccesStories/SucessStories.scss'
import { HashLink as Link } from 'react-router-hash-link'
import { useSurfContext } from '../context'
import ShareButtons from '../components/ShareMediaButtons'

const SuccessPage = () => {
  const { successStories } = useSurfContext();
  const [share, setShare] = useState(false);
  return (
    <div className='app__success-container'>
      <div className='app__success-container__title'>
        <h2>Success <span>Stories</span></h2>
      </div>
      <div className='app__success-container__content'>
        {successStories.map(item => (
          <div className="success-stories__container__content__item" key={item.id} id={item.nombre}>
            <div className="success-stories_img">
              <img src={item.url} alt="success-stories" />
            </div>
            <div className='success-stories_date-location'>
              <h3>{item.date}</h3>
              <h3>{item.location}</h3>
            </div>
            <div className="success-stories__container__content__item__title">
              <h3>{item.nombre}</h3>
              <p>{item.description}</p>
            </div>
            <div className='sucess-stories_buttonLink'>
              <Link className='link' to='/'>Back</Link>
              <img alt='share' src={require('../assets/share-button.png')} onClick={() => setShare(!share)} />
              {share && (
                <ShareButtons item={item} setShare={setShare} url={`${window.location.href}/#${item.nombre}`} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SuccessPage;
