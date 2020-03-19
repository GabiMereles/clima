import React from 'react';

var Clima = ({resultado}) => {

// Se extraen los valores
    var {name, main} = resultado;

    if(!name) return null;

    //Grados kelvin
    var kelvin= 273.15;

    return ( 
        
        <div className= "car-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    {parseFloat(main.temp - kelvin).toFixed(1)} <span>&#x2103;</span>
                </p>
                <p>Temperatura Máxima:
                    {parseFloat(main.temp_max - kelvin).toFixed(1)} <span>&#x2103;</span>
                </p>
                <p>Temperatura Minima:
                    {parseFloat(main.temp_min - kelvin).toFixed(1)} <span>&#x2103;</span>
                </p>
                <p>Humedad:
                    {main.humidity} <span>&#x25;</span>
                </p>
            </div>
        </div>
     );
}
export default Clima;