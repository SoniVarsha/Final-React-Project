import React from "react";
import "./Dashboard.css"
import LatestHits from "./latesthits";
import Performance from "./Performance";
import Storage from "./storage";
import Notification from "./Notification"
import OrderList from "./orders";


function Dashboard() {
  const data = JSON.parse(localStorage.getItem('dashboardPage'))
  console.log(data)

  const { latestHits, performance, storage, notifications, orders } = data
  return (


    <>
      <div className="container-dash">
        <div>
          <p className="Welcome-dash">Welcome back, <b>Admin</b></p>
        </div>
        <div className="sectionContainer">
          <section className='chart mt-4'  ><LatestHits className='chart mt-4' data={latestHits} /></section>
          <section className='chart mt-4'><Performance data={performance} /></section>
          <section className='chart mt-4'><Storage data={storage} /></section>
          <section className='chart mt-4'><Notification data={notifications} /></section>
          <section className='orderlist'><OrderList data={orders} /></section>





        </div>
      </div>
    </>
  );
}

export default Dashboard;