import React from "react";
import PropTypes from "prop-types";
import DashboardCard from "./DashboardCard";

DoubleCard.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  predictValue: PropTypes.string,
  realValue: PropTypes.string,
  color: PropTypes.string,
};

function DoubleCard(props) {
  const { predictValue, realValue, ...baseProps } = props;
  return (
    <DashboardCard {...baseProps}>
      <div className="db--card--value">
        <span
          className="db--card--badge"
          style={{ right: "0", background: props.color }}
        >
          DĐ
        </span>
        <span style={{ marginRight: "15px" }}>{predictValue}</span>
      </div>
      <div className="db--card--value">
        <span
          className="db--card--badge"
          style={{ left: "0", background: props.color }}
        >
          TT
        </span>
        <span style={{ marginLeft: "15px" }}>{realValue}</span>
      </div>
    </DashboardCard>
  );
}

export default DoubleCard;
