//import {  useNavigate } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowsDimensions";
import "./Suggestions.scss";
export const Suggestions = ({
  suggestions,
  setSuggestions,
  setFilterReports,
}) => {
  const onClickLinkHandler = (item) => {
    setSuggestions([]);
    setFilterReports([item]);
  };
  const { width } = useWindowDimensions();
  return (
    <div className="search-option">
      <ul>
        {suggestions.map((item, index) => (
          <div onClick={() => onClickLinkHandler(item)} key={index}>
            <li key={index}>{item.title.slice(0, width > 768 ? 80 : 40)}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};
