import Card from "./Card";
import Overview from "./Overview";
import Pie_Chart from "./Pie_Chart";
import Project_Card from "./Project _Card";

function Dashboard(prop) {
  const Earnings = [
    { time: "Earnings (Monthly)", Earnings: 40000, color: "primary" },
    { time: "Earnings (Annual)", Earnings: 215000, color: "success" },
    { time: "Tasks)", Earnings: `${50}%`, color: "info" },
    { time: "Pending Requests)", Earnings: 18, color: "warning" },
  ];
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50" /> Generate Report
        </a>
      </div>
      <div className="row">
        {Earnings.map((data) => {
          return <Card data={data}></Card>;
        })}
      </div>
      <div className="row">
        <Overview></Overview>
        <Pie_Chart></Pie_Chart>
        <Project_Card></Project_Card>
      </div>
    </>
  );
}

export default Dashboard;
