import React from "react";
import PropTypes from "prop-types";

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.node,
};

function DashboardCard(props) {
  return (
    <div className="db--card">
      <div className="db--card--top" style={{ background: props.color }}>
        <h4>{props.title}</h4>
        <p>{props.subTitle}</p>
      </div>
      <div className="db--card--bot">{props.children}</div>
    </div>
  );
}

export default DashboardCard;
