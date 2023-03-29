
import React, { useEffect, useState } from 'react'
import './upload-stories.scss'
import { app } from '../../fb'
import { useSurfContext } from '../../context'

export default function UploadStories() {

  const [showNewStories, setNewStories] = useState(false)
  const [showStories, setShowStories] = useState(false);
  const [archivoUrl, setArchivoUrl] = useState('');
  const { successStories, changeStories, setChangeStories } = useSurfContext()

  const imageMemberHandler = async (e) => {
    let archivo = e.target.files[0];
    if (!archivo) {
      alert('No se pudo cargar el archivo, intente nuevamente en unos minutos')
      return
    }
    let storageRef = app.storage().ref()
    let archivoPath = storageRef.child(archivo.name)
    try {
      await archivoPath.put(archivo)
      try {
        let enlaceUrl = await archivoPath.getDownloadURL();
        setArchivoUrl(enlaceUrl);
      } catch (err) {
        console.log(err)
      }
      alert('Se cargo correctamente')
    } catch (err) {
      console.log(err)
    }
  }

  const submitMemberHandler = async (e) => {
    e.preventDefault()
    let nombreArchivo = e.target.name.value;
    let descriptionArchivo = e.target.description.value
    let date = new Date().toLocaleDateString('en-us', { year: "numeric", month: "short" });
    let id = e.target.id.value
    if (!nombreArchivo || !descriptionArchivo || !id) {
      alert('Complete todos los campos')
      return
    }
    let coleccionRef = app.firestore().collection('success-stories');
    try {
      await coleccionRef.doc(nombreArchivo).set({ nombre: nombreArchivo, description: descriptionArchivo, date: date, id: id, url: archivoUrl })
      setChangeStories(!changeStories)
      alert('Se agrego correctamente')
      window.location.reload(false)
    } catch (err) {
      console.log(err)
    }
  }

  const deleteMember = async (name) => {
    let coleccionRef = app.firestore().collection('success-stories');
    try {
      await coleccionRef.doc(name).delete();
      setChangeStories(!changeStories)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <div className='app__show-team'>
        <h3>Success Stories</h3>
        <ul>
          <li>
            <h2>
              New Storie
            </h2>
            <button onClick={() => setNewStories(!showNewStories)}>{showNewStories ? 'Ocultar' : 'Mostrar'}</button>
          </li>
          <li>
            <h2>
              Stories List
            </h2>
            <button onClick={() => setShowStories(!showStories)}>{showStories ? 'Ocultar' : 'Mostrar'}</button>
          </li>
        </ul>
      </div>
      {showNewStories &&
        <div className='app__our-team-form'>
          <h2>New Storie</h2>
          <form onSubmit={submitMemberHandler}>
            <input type='text' placeholder='Title' name='name' className='input-name' />
            <textarea type='text' placeholder='Description' name='description' className='input-description' />
            <div className='app__container-team'>
              <input text='number' placeholder='ID' name='id' className='input-id' />
              <label>
                Profile picture:
                <input type='file' name='file' className='input-file' onChange={imageMemberHandler} />
              </label>
            </div>
            <button className='button-submit' disabled={archivoUrl ? false : true} style={{ backgroundColor: !archivoUrl && 'grey' }}>Upload</button>
          </form>
        </div>
      }
      {showStories &&
        <div className="success-stories__container__content">
          {successStories.map(item => (
            <div className="success-stories__container__content__item" key={item.id}>
              <button className='app__team-slider-delete' onClick={() => deleteMember(item.nombre)}>X</button>
              <div className="success-stories_img">
                <img src={item.url} alt={item.nombre} />
              </div>
              <h3 className="success-stories_date">{item.date}</h3>
              <div className="success-stories__container__content__item__title">
                <h3>{item.nombre}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      }
    </>
  )
}
