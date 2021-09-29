import React from "react";
import PropTypes from "prop-types";
import ApexChart from "react-apexcharts";

ChartWrapper.propTypes = {
  title: PropTypes.string.isRequired,
};

function ChartWrapper(props) {
  const { title, ...chartProps } = props;
  return (
    <div className="chart--wrapper">
      <h4 className="chart--title">{title}</h4>
      <ApexChart {...chartProps} />
    </div>
  );
}

export default ChartWrapper;
