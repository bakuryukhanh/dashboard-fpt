import { Button, DatePicker } from "antd";
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import vnTopo from "../assets/vn-map.json";

const markers = [
  {
    radius: 10,
    color: "green",
    cordinate: [108.47403, 15.57364],
    value: 123,
  },
  {
    radius: 20,
    color: "red",
    cordinate: [108.20623, 16.047079],
    value: 123,
  },
  {
    radius: 15,
    color: "orange",
    cordinate: [105.804817, 21.028511],
    value: 123,
  },
  {
    radius: 17,
    color: "red",
    cordinate: [106.660172, 10.762622],
    value: 123,
  },
];

function MapWrapper() {
  return (
    <div className="map">
      <div className="filter--container">
        <DatePicker
          placeholder="Chọn thời gian"
          style={{ width: "150px", marginRight: "30px" }}
        />
        <Button type="primary">Bộ lọc</Button>
      </div>
      <div className="map--container">
        <ComposableMap
          projectionConfig={{ scale: 2300 }}
          width={400}
          height={1000}
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "100%",
          }}
        >
          <ZoomableGroup center={[105, 15]}>
            <Geographies geography={vnTopo}>
              {({ geographies }) => {
                return geographies.map(
                  (geography, i) =>
                    geography.id !== "ATA" && (
                      <Geography
                        key={i}
                        geography={geography}
                        style={{
                          default: {
                            fill: "var(--grey)",
                            stroke: "#212529",
                            strokeWidth: 0.75,
                            outline: "none",
                          },
                          hover: {
                            fill: "#e6dfd9",
                            stroke: "#212529",
                            strokeWidth: 0.75,
                            outline: "none",
                          },
                        }}
                      />
                    )
                );
              }}
            </Geographies>
            {markers.map((marker, idx) => {
              return (
                <Marker coordinates={marker.cordinate} key={idx}>
                  <circle
                    r={marker.radius}
                    fill={marker.color}
                    stroke="white"
                    strokeWidth="1"
                  />
                  <text
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    stroke="white"
                    strokeWidth="0.6"
                    style={{
                      fontSize: "8px",
                    }}
                  >
                    {marker.value}
                  </text>
                </Marker>
              );
            })}
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </div>
  );
}

export default MapWrapper;
