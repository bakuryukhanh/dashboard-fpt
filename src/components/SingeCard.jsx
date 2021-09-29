import React from "react";
import PropTypes from "prop-types";
import DashboardCard from "./DashboardCard";

SingleCard.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  value: PropTypes.string,
};

function SingleCard(props) {
  const { value, ...baseprops } = props;
  return (
    <DashboardCard {...baseprops}>
      <div className="db--card--value">{value}</div>
    </DashboardCard>
  );
}

export default SingleCard;
