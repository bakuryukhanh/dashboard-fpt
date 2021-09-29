import React from "react";
import { Table } from "antd";
import { data } from "../data";
import SingleCard from "./SingeCard";
import DoubleCard from "./DoubleCard";
import ChartWrapper from "./ChartWrapper";
import { Doughnut } from "react-chartjs-2";
import MapWrapper from "./MapWrapper";
import datalabels from "chartjs-plugin-datalabels";

const POPOptions = {
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  xaxis: {
    categories: ["Vung 1", "Vung 2", "Vung 3", "Vung 4", "Vung 5", "Vung 6"],
    title: { text: "Vung" },
  },
  yaxis: {
    title: { text: "So luong thiet bi" },
  },

  colors: ["#FF9F00", "#CE5454"],
};

const POPSeries = [
  { name: "Warning", data: [123, 80, 50, 30] },
  { name: "Critical", data: [103, 30, 20, 20] },
];

const accuracyChartOptions = {
  chart: {
    id: "accuracy",
    type: "line",
  },
  xaxis: {
    categories: ["5", "10", "15", "20", "25", "30"],
    title: { text: "Ngày" },
  },
  yaxis: {
    title: { text: "Tỉ lệ" },
  },
  colors: ["#55BDBF", "#798A78"],
  stroke: {
    width: [3, 3],
    curve: "straight",
    dashArray: [0, 0],
  },
};

const accuracyChartSeries = [
  {
    name: "Dự đoán",
    data: [30, 50, 80, 90, 86, 99],
  },
  {
    name: "Thực tê",
    data: [33, 55, 81, 83, 81, 95],
  },
];

const deviceChartOptions = {
  chart: {
    id: "accuracy",
    type: "line",
  },
  xaxis: {
    categories: ["5", "10", "15", "20", "25", "30"],
    title: { text: "Ngày" },
  },
  yaxis: {
    title: { text: "So luong thiet bi" },
  },
  colors: ["#54A2D2", "#B83C3C"],
  stroke: {
    width: [3, 3],
    curve: "straight",
    dashArray: [0, 3],
  },
};

const deviceChartSeries = [
  {
    name: "Dự đoán",
    data: [230, 150, 180, 290, 86, 99],
  },
  {
    name: "Thực tê",
    data: [233, 155, 181, 283, 81, 95],
  },
];

const TOp20Options = {
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  xaxis: {
    categories: [
      "HNIB26110HW57",
      "HNIB26110HW58",
      "HNIB26110HW59",
      "HNIB26110HW60",
      "HNIB26110HW52",
      "HNIB26110HW51",
    ],
    labels: {
      rotate: -35,
      style: {
        fontSize: "8px",
      },
    },
  },
  yaxis: {
    title: { text: "So luong thiet bi" },
  },

  colors: ["#FF9F00", "#CE5454"],
};

const TOp20Series = [
  { name: "Warning", data: [123, 80, 50, 30] },
  { name: "Critical", data: [103, 30, 20, 20] },
];

const donutChartData = {
  labels: ["OK", "Warning", "Critical"],
  datasets: [
    {
      label: "Trạng thái thực tê",
      data: [300, 50, 100],
      backgroundColor: ["#369314", "#FF9F00", "#CE5454"],
    },
    { weight: 0.4 },
    {
      label: "Trạng thái dự đoan",
      data: [300, 50, 100],
      backgroundColor: ["#369314", "#FF9F00", "#CE5454"],
    },
  ],
};

const dougnutChartOptions = {
  responsive: true,
  plugins: {
    datalabels: {
      color: "white",
    },
    tooltip: {
      callbacks: {
        label: function (item) {
          return (
            item.dataset.label +
            "-" +
            item.label +
            ": " +
            item.formattedValue +
            " Thiết bị"
          );
        },
      },
    },
  },
};

const columnShape = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Tên POP",
    dataIndex: "POP",
    key: "POP",
  },
  {
    title: "Tên thiết bị",
    dataIndex: "device",
    key: "device",
  },
  {
    title: "Nhiệt độ",
    dataIndex: "temp",
    key: "temp",
  },
  {
    title: "Khu vưc",
    dataIndex: "area",
    key: "area",
  },
  {
    title: "Chi nhanh",
    dataIndex: "branch",
    key: "branch",
  },
];

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="top">Dashboard</div>
      <div className="body">
        <div className="chart">
          <div className="card-container">
            <SingleCard
              title="Dộ chính xác"
              subTitle="Dự đoán/Thực tế"
              value="99%"
              color="#04325D"
            />
            <DoubleCard
              title="OK"
              subTitle="Nhiệt độ <= 55 "
              predictValue="1234"
              realValue="1234"
              color="#369314"
            />
            <DoubleCard
              title="Warning"
              subTitle="Nhiệt độ 55-62 "
              predictValue="123"
              realValue="123"
              color="#FF9F00"
            />
            <DoubleCard
              title="Critical"
              subTitle="Nhiệt độ > 62 "
              predictValue="123"
              realValue="123"
              color="#CE5454"
            />
          </div>
          <div className="chart-container">
            <ChartWrapper
              title="Biến thiên độ chính xác của dự án"
              options={accuracyChartOptions}
              series={accuracyChartSeries}
            />
            <ChartWrapper
              title="Số lượng thiết bị cảnh báo nhiệt độ"
              options={deviceChartOptions}
              series={deviceChartSeries}
            />
            <ChartWrapper
              title="Số lượng POP có cảnh bao"
              options={POPOptions}
              series={POPSeries}
              type="bar"
            />
            <ChartWrapper
              title="Top 20 POP có số lượng cảnh báo cao"
              options={TOp20Options}
              series={TOp20Series}
              type="bar"
            />
            <div className="chart--wrapper" style={{ aspectRatio: "1/1.2" }}>
              <h4 className="chart--title">Trạng thái thiết bi</h4>
              <Doughnut
                data={donutChartData}
                options={dougnutChartOptions}
                plugins={[datalabels]}
              />
            </div>
            <div className="chart--wrapper">
              <h4 className="chart--title">Danh sách thiết bị</h4>
              <Table dataSource={data} columns={columnShape} />
            </div>
          </div>
        </div>
        <MapWrapper />
      </div>
    </div>
  );
}

export default Dashboard;
