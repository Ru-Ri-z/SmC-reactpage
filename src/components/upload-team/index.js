import React, { useState } from 'react'
import './upload-team.scss'
import { app } from '../../fb'
import { useSurfContext } from '../../context'

export default function UploadTeam() {

  const [showNewMember, setNewMember] = useState(false)
  const [showOurTeam, setShowOurTeam] = useState(false);
  const [archivoUrl, setArchivoUrl] = useState('');
  const { ourTeam, changeTeam, setChangeTeam } = useSurfContext()

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
    let id = e.target.id.value
    if (!nombreArchivo || !descriptionArchivo || !id) {
      alert('Complete todos los campos')
      return
    }
    let coleccionRef = app.firestore().collection('team-members');
    try {
      await coleccionRef.doc(nombreArchivo).set({ nombre: nombreArchivo, description: descriptionArchivo, id: id, url: archivoUrl })
      setChangeTeam(!changeTeam)
      alert('Se agrego correctamente')
      window.location.reload(false)
    } catch (err) {
      console.log(err)
    }
  }

  const deleteMember = async (name) => {
    let coleccionRef = app.firestore().collection('team-members');
    try {
      await coleccionRef.doc(name).delete();
      setChangeTeam(!changeTeam)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <div className='app__show-team'>
        <h3>Our Team Section</h3>
        <ul>
          <li>
            <h2>
              New Member
            </h2>
            <button onClick={() => setNewMember(!showNewMember)}>{showNewMember ? 'Ocultar' : 'Mostrar'}</button>
          </li>
          <li>
            <h2>
              Member's List
            </h2>
            <button onClick={() => setShowOurTeam(!showOurTeam)}>{showOurTeam ? 'Ocultar' : 'Mostrar'}</button>
          </li>
        </ul>
      </div>
      {showNewMember &&
        <div className='app__our-team-form'>
          <h2>New Member</h2>
          <form onSubmit={submitMemberHandler}>
            <input type='text' placeholder='Name' name='name' className='input-name' />
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
      {showOurTeam &&
        <div className="app__team-slider-container">
          {ourTeam?.map((item, idx) => (
            <div className="app__team-slider-card" key={idx}>
              <button className='app__team-slider-delete' onClick={() => deleteMember(item.nombre)}>X</button>
              <div className="app__team-slider-card-img">
                <img src={item.url} alt={item.nombre} />
              </div>
              <div className="app__team-slider-card-data">
                <h3 className={`app__team-slider-card-data-title`}>
                  {item.nombre}
                </h3>
                <p
                  className={`app__team-slider-card-data-desc show-slider-desc`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      }
    </>
  )
}
