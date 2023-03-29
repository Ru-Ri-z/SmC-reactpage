import React from "react";
import OtherReports from "../components/OtherReports";
import RecentPublications from "../components/RecentPublications";
import useWindowDimensions from "../hooks/useWindowsDimensions";
const OtherReportsPage = () => {
  const { width } = useWindowDimensions();
  return (
    <div>
      {width > 1024 && <RecentPublications />}
      <OtherReports />
    </div>
  );
};

export default OtherReportsPage;
