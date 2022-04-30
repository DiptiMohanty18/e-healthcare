import React,{useState,useEffect,Component} from "react";

import { Line,Bar } from "react-chartjs-2";
import { Doughnut } from 'react-chartjs-2';
import { Chart, LineController, ArcElement,LineElement,PointElement, LinearScale, Title,CategoryScale, BarElement } from 'chart.js';

Chart.register(LineController, LineElement,BarElement, PointElement, LinearScale, Title, CategoryScale,ArcElement);

export class Reports extends Component {

  constructor(props) {
      super(props);
      this.state = { users: [],orders:[],meds:[] }

      
  }

  refreshList() {
      fetch("http://localhost:63831/api/Users/getusers")
          .then(response => response.json())
          .then(data => {
              this.setState({ users: data });
          });
          fetch("http://localhost:63831/api/Orders/orders")
          .then(response => response.json())
          .then(data => {
              this.setState({ orders: data });
          });
          fetch("http://localhost:63831/api/Products/getAllMedicine")
            .then(response => response.json())
            .then(data => {
                this.setState({ meds: data });
            });
  }

  componentDidMount() {
      this.refreshList();
  }

 
  
  
  
  render() {
      const { users } = this.state;
      const { orders } = this.state;
      const { meds } = this.state;
      var data = {
        labels: users.map(x=>x.firstName),
        datasets: [
          {
            labels: 'Active Users',
            data: [users.map.length],
            backgroundColor: [
              'rgba(255, 99, 132)',
            ]
          },
        ],
      };
      var order = {
        labels: orders.map(x=>x.placedOn),
        datasets: [
          {
            labels: 'Active Users',
            data: orders.map(x=>x.amount),
            backgroundColor: [
              'rgba(255, 99, 132)',
            ]
          },
        ],
      };
      var medicine = {
        labels: meds.map(x=>x.name),
        datasets: [
          {
            labels: 'Active Users',
            data: meds.map(x=>x.quantity),
            backgroundColor: [
              'rgba(255, 99, 132)',
              'rgba(54, 162, 235)',
              'rgba(255, 206, 86)',
              'rgba(75, 192, 192)',
              'rgba(153, 102, 255)',
              'rgba(255, 159, 64)'
          ],
          },
        ],
      };
      var sales = 0;
      {orders.map(order=>
        sales = sales + order.amount
        )};
      
  return (
    <div className="Container">
      <div className="border shadow py-4">
       <h2 className="text-center mb-4">Reports</h2>
    <div className='py-4' style={{ width: "92%", margin: "auto" }}>
                    <div className="row row-cols-3 row-cols-md-4 g-4">
                        <div className="col">
                            <div className="card border shadow">
                             
                                <div className="card-body">
                                <h3>Active Users</h3>
                                <h1 style={{color:"orange"}}>{users.length}</h1>
                                 
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border shadow">
                                
                                <div className="card-body">
                                <h3>Orders Placed</h3>
                                <h1 style={{color:"blueviolet"}}>{orders.length}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border shadow">
                                
                                <div className="card-body">
                                <h3>Available Products</h3>
                                <h1 style={{color:"purple"}}>{meds.length}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border shadow">
                                
                                <div className="card-body">
                                <h3>Total Sales</h3>
                                <h1 style={{color:"green"}}>{sales}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border shadow">
                                
                                <div className="card-body">
                                <h3>Sales of Medicines</h3>
                                 <Line data={order} 
                                 height={150}/>
                                </div>
                            </div>
                        </div>
                      
                        
                        
                        
                        <div className="col-md-6">
                            <div className="card border shadow">
                             
                                <div className="card-body">
                                <h3>Stock Report</h3>
                                 <Bar data={medicine}
                                 height={150}
                                 />
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                      </div>
                </div>
                

  );
  }
}


