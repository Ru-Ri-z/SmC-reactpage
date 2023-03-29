import React from 'react'
import './Upload.scss'
import UploadTeam from '../components/upload-team'
import UploadReports from '../components/upload-reports'
import UploadStories from '../components/upload-stories'

export default function Upload() {

  return (
    <div className='app__container-all' id='upload'>
      <UploadStories />
      <UploadTeam />
      <UploadReports />
    </div>
  )
}
