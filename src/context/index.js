import React, { useEffect, createContext, useState, useContext } from 'react'
import { app } from '../fb'

const SurfContext = createContext();

export const useSurfContext = () => useContext(SurfContext)

export const SurfContextProvider = ({ children }) => {
  const [ourTeam, setOurTeam] = useState([])
  const [changeTeam, setChangeTeam] = useState(false)
  const [reports, setReports] = useState([])
  const [changeReports, setChangeReports] = useState(false)
  const [featuredReport, setFeaturedReport] = useState(null)
  const [newReport, setNewReport] = useState(null)
  const [successStories, setSuccessStories] = useState([])
  const [changeStories, setChangeStories] = useState(false)

  async function fecthTeam() {
    try {
      const docuList = await app.firestore().collection('team-members').get();
      setOurTeam(docuList.docs.map((doc) => doc.data()));
    } catch (err) {
      console.log(err)
    }
  }

  const fetchReports = async () => {
    try {
      const docuList = await app.firestore().collection('reports').get();
      let list = docuList.docs.map((doc) => doc.data())
      setReports(list);
      setFeaturedReport(list.find((doc) => doc.featured === 'true'))
      setNewReport(list[list.length - 1])
    } catch (err) {
      console.log(err)
    }
  }

  async function fecthStories() {
    try {
      const docuList = await app.firestore().collection('success-stories').get();
      setSuccessStories(docuList.docs.map((doc) => doc.data()));
    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    fecthTeam()
  }, [changeTeam])

  useEffect(() => {
    fetchReports()
  }, [changeReports])

  useEffect(() => {
    fecthStories()
  }, [changeStories])

  return (
    <SurfContext.Provider value={{
      ourTeam,
      changeTeam,
      setChangeTeam,
      fecthTeam,
      reports,
      changeReports,
      setChangeReports,
      fetchReports,
      featuredReport,
      newReport,
      successStories,
      changeStories,
      setChangeStories
    }}>
      {children}
    </SurfContext.Provider>
  )
}
