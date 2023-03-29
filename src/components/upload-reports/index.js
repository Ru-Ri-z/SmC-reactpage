import React, { useState } from 'react';
import { useSurfContext } from '../../context'
import { app } from '../../fb';
import './upload-reports.scss'

export default function UploadReports() {
  const [showNewPdf, setNewPdf] = useState(false)
  const [showPdf, setShowPdf] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { reports, changeReports, setChangeReports } = useSurfContext()

  const submitReportHandler = async (e) => {
    e.preventDefault()
    let nombreReport = e.target.name.value;
    let descriptionArchivo = e.target.description.value;
    let category = e.target.category.value;
    let id = e.target.id.value;
    let date = new Date().toLocaleDateString('en-us', { year: "numeric", month: "short" });
    let featured = e.target.featured.value ? e.target.featured.value : false
    if (!nombreReport || !descriptionArchivo || !id || !category) {
      alert('Complete todos los campos')
      return
    }
    let coleccionRef = app.firestore().collection('reports');
    try {
      await coleccionRef.doc(nombreReport).set({
        title: nombreReport, paragraph: descriptionArchivo,
        category: category, id: id, pdfUrl: pdfUrl, imageUrl: imageUrl, featured: featured, date: date
      })
      alert('Se agrego correctamente')
      setChangeReports(!changeReports);
      window.location.reload(false)
    } catch (err) {
      console.log(err)
    }
  }
  const pdfUploadHandler = async (e) => {
    let pdf = e.target.files[0];
    if (!pdf) {
      alert('No se pudo cargar el archivo, intente nuevamente en unos minutos')
      return
    }
    let storageRef = app.storage().ref();
    let archivoPath = storageRef.child(pdf.name);
    try {
      await archivoPath.put(pdf)
      try {
        let enlaceUrl = archivoPath.getDownloadURL();
        enlaceUrl.then((url) => setPdfUrl(url))
      } catch (err) {
        console.log(err)
      }
      alert('Se cargo correctamente');
    } catch (err) {
      console.log(err)
    }
  }

  const imageReportHandler = async (e) => {
    let image = e.target.files[0];
    if (!image) {
      alert('No se pudo cargar el archivo, intente nuevamente en unos minutos')
      return
    }
    let storageRef = app.storage().ref();
    let archivoPath = storageRef.child(image.name);
    try {
      await archivoPath.put(image)
      try {
        let enlaceUrl = archivoPath.getDownloadURL();
        enlaceUrl.then((url) => setImageUrl(url))
      } catch (err) {
        console.log(err)
      }
      alert('Se cargo correctamente');
    } catch (err) {
      console.log(err)
    }
  }
  const deleteReport = async (name) => {
    let coleccionRef = app.firestore().collection('reports');
    try {
      await coleccionRef.doc(name).delete();
      setChangeReports(!changeReports);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className='app__show-team'>
        <h3>Reports Section</h3>
        <ul>
          <li>
            <h2>
              New Report
            </h2>
            <button onClick={() => setNewPdf(!showNewPdf)}>{showNewPdf ? 'Ocultar' : 'Mostrar'}</button>
          </li>
          <li>
            <h2>
              Reports' List
            </h2>
            <button onClick={() => setShowPdf(!showPdf)}>{showPdf ? 'Ocultar' : 'Mostrar'}</button>
          </li>
        </ul>
      </div>
      {
        showNewPdf &&
        <div className='app__our-team-form'>
          <h2>New Report</h2>
          <form onSubmit={submitReportHandler}>
            <input type='text' placeholder='Title' name='name' className='input-name' />
            <input type='text' placeholder='Category' name='category' className='input-name' />
            <textarea type='text' placeholder='Paragraph' name='description' className='input-description' />
            <div className='app__container-team'>
              <input text='number' placeholder='ID' name='id' className='input-id' />
              <select name='featured' id='featured-select' >
                <option value=''>Please choose an option</option>
                <option value={true}>Is featured</option>
                <option value={false}>Isn't featured</option>
              </select>
            </div>
            <div className='container-labels'>
              <label>
                Pdf:
                <input type='file' name='file' className='input-file' onChange={pdfUploadHandler} />
              </label>
              <label>
                Profile Image Pdf:
                <input type='file' name='file' className='input-file' onChange={imageReportHandler} />
              </label>
            </div>
            <button className='button-submit' disabled={pdfUrl ? false : true} style={{ backgroundColor: !pdfUrl && 'grey' }}>Upload</button>
          </form>
        </div>
      }
      {
        showPdf &&
        <div className="app__team-slider-container">
          {reports?.map((item, idx) => (
            <div className="app__team-slider-card" key={idx}>
              <button className='app__team-slider-delete' onClick={() => deleteReport(item.title)}>X</button>
              <div className="app__team-slider-card-img">
                <iframe
                  src={item.pdfUrl}
                  allow='autoplay'
                  title={item.title}
                  loading='lazy'
                  border={0}
                  width='295'
                  height='412'
                ></iframe>
              </div>
              <div className="app__team-slider-card-data">
                <h3 className={`app__team-slider-card-data-title`}>
                  {item.title}
                </h3>
                <p
                  className={`app__team-slider-card-data-desc show-slider-desc`}
                >
                  {item.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      }
    </>
  )
}
