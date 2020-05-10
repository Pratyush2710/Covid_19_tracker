import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';


import image from './images/Logo.png';
import Profile from './Profile';

class App extends React.Component {
    state = {
      data: {},
      country: '',
    }
  
    async componentDidMount() {
      const data = await fetchData();
  
      this.setState({ data });
    }
  
    handleCountryChange = async (country) => {
      const data = await fetchData(country);
  
      this.setState({ data, country: country });
    }
  
    render() {
      const { data, country } = this.state;
  
      return (
        <div className={styles.container}>
          <img className={styles.image} src={image} alt="COVID-19" />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
          <h4>Created by Pratyush Garg </h4>
          <footer className = {styles.footer}>
            <Profile />
          </footer>
        </div>
      );
    }
  }
  
  export default App;