import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { getNews } from './actions';

import './App.css';
// {
//   "id": 1,
//   "month":"January",
//  "data":"65"
// },
// {
//   "id": 2,
//   "month":"February",
//   "data":"59"
// },
// {
//   "id": 3,
//   "month":"March",
//   "data":"80"
// },
// {
//   "id": 4,
//  "month":"April",
//  "data":"81"
// },
// {
//   "id": 5,
//   "month":"May",
//  "data":"56"

// }
function App({ values }) {
  // const [chartValues, setChartValues] = useState({
  //   label: [],
  //   data: [],
  // });
  // values && values.map(() => {});
  const state = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  useEffect(() => {
    console.log('useeffect');
    getNews();
  }, []);
  console.log('values', values);
  return (
    <div className="App">
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: 'Average Rainfall per month',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  );
}
const mapDispatchToProps = {
  getNews: getNews,
};
const mapStateToProps = (state) => {
  return { values: state.values };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

//https://medium.com/@lavitr01051977/make-your-first-call-to-api-using-redux-saga-15aa995df5b6
//https://www.educative.io/edpresso/how-to-use-chartjs-to-create-charts-in-react
