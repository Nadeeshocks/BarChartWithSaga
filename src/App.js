import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { getNews } from './actions';

import './App.css';

function App({ values, getNews }) {
  const month = [];
  const data = [];
  values &&
    values.map((val) => {
      month.push(val.month);
      data.push(val.data);
    });
  const state = {
    labels: month,
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: data,
      },
    ],
  };
  useEffect(() => {
    getNews();
  }, []);
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
  return { values: state.news };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

//https://medium.com/@lavitr01051977/make-your-first-call-to-api-using-redux-saga-15aa995df5b6
//https://www.educative.io/edpresso/how-to-use-chartjs-to-create-charts-in-react
