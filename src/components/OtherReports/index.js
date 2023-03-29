import React, { useState, useEffect, useRef } from "react";
import "./OtherReports.scss";
import { FiSearch } from "react-icons/fi";
import { Suggestions } from "../Suggestions";
import useClickOutsideRef from "../../hooks/useClickOutsideRef";
import ShareButtons from "../ShareMediaButtons";
import { useSurfContext } from '../../context'

const OtherReports = () => {
  const { reports, changeReports } = useSurfContext();
  const [suggestions, setSuggestions] = useState([]);
  const [filterReports, setFilterReports] = useState(reports);
  const [input, setInput] = useState("");
  const [share, setShare] = useState(false);
  const searchContainer = useRef(null);
  useClickOutsideRef(searchContainer, setSuggestions);
  const handleChange = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  useEffect(() => {
    setFilterReports(reports)
  }, [changeReports])

  useEffect(() => {
    if (input.length < 3) {
      setSuggestions([]);
      return;
    }
    const filterArr = reports.filter((item) =>
      item.title.toLowerCase().includes(input)
    );
    setSuggestions(filterArr);
  }, [input]);

  const handleSearch = () => {
    if (!input) return setFilterReports(reports);
    const filterArr = reports.filter((item) =>
      item.title.toLowerCase().includes(input)
    );
    setSuggestions([]);
    setFilterReports(filterArr);
  };

  const onClean = () => {
    setInput('')
    setSuggestions([]);
    setFilterReports(reports);
  };

  const handlerDownload = (item) => {
    const link = document.createElement("a");
    link.rel = "noopener noreferrer"
    link.target = "_blank"
    link.href = item.url
    link.download = item.downloadName;
    link.click();
  }

  return (
    <div className="other-reports-section">
      <div className="other-reports-title">
        <h2>
          All reports
        </h2>
      </div>
      <div className="other-reports-searcher" ref={searchContainer}>
        <input
          type="text"
          placeholder="Buscar por títulos"
          value={input}
          onChange={handleChange}
        />
        <FiSearch
          size={40}
          color="adadad"
          style={{ paddingLeft: "10px", cursor: "pointer" }}
          onClick={handleSearch}
        />
        {suggestions?.length > 0 && (
          <Suggestions
            suggestions={suggestions}
            setSuggestions={setSuggestions}
            setFilterReports={setFilterReports}
          />
        )}
        <button className="clean-search" onClick={onClean}>
          Limpiar
        </button>
      </div>
      {filterReports?.length === 0 && (
        <div style={{ minHeight: "60vh" }}>
          <h3 className="other-reports-no-result">
            No se encontraron resultados
          </h3>
        </div>
      )}
      {filterReports?.map((item, idx) => (
        <div className="app__slider-container-reports" key={idx}>
          <div className="app__highlighted-reports-slider">
            <div className="app__highlighted-reports-slider-frame">
              <iframe
                src={item.pdfUrl}
                width={`${item.horizontal ? "412" : "295"}`}
                height={`${item.horizontal ? "248" : "412"}`}
                allow="autoplay"
                title={`frame1`}
                loading="lazy"
                border={0}
              ></iframe>
            </div>
            <div className="app__highlighted-reports-slider-paragraphs">
              <p>{item.date}</p>
              {item.category && <h4>{item.category}</h4>}
              <h3>{item.title}</h3>
              <p>{item.paragraph}</p>
              <div className='buttons-share'>
                <img src={require('../../assets/download-button.png')} alt='download' onClick={() => handlerDownload(item)} />
                <img src={require('../../assets/share-button.png')} alt='share' onClick={() => setShare(!share)} />
                {share && (
                  <ShareButtons item={item} setShare={setShare} />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherReports;
