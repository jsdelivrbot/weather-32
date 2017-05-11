import React,{ Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart'
 class WeatherList extends Component{
     renderWeather(cityData){
         const name=cityData.city.name
         const temps = cityData.list.map(weather => weather.main.temp)
         const pre = cityData.list.map(weather => weather.main.pressure)
         const hum = cityData.list.map(weather => weather.main.humidity)
         return (
             <tr key={name}>
                 <td>{name}</td>
                 <td><Chart data={temps} color="red" units="K"/></td>
                 <td><Chart data={pre} color="green" units="hPa"/></td>
                 <td><Chart data={hum} color="black" units="%"/></td>
             </tr>
         )
     }
    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Tep</th>
                        <th>Pre</th>
                        <th>Hum</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}
function mapStateToProps({weather}){
    return {weather} // {weather} == {weather:weather}
}

export default connect(mapStateToProps)(WeatherList)