import React, {useState} from 'react';
import Error from './Error';

var  Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {


        var[error,guardarError]=useState(false);

    // extraer ciudad y pais
        var {ciudad, pais} = busqueda;

    //funcion que coloca los elementos en el state

    var handleCharge = e=> {

        // actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });

    }

    // Cuando el usuario da submit al form

        var handleSubmit = e=>{

            e.preventDefault();

            //validar
            if(ciudad.trim() === '' || pais.trim() === ''){
                guardarError(true);
                return;
            }
            guardarError(false);
            guardarConsultar(true);
        }


    return ( 

        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error mensaje="Ambos campos son obligatorio"/>:null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleCharge}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select 
                        name="pais"
                        id="pais"
                        value={pais}
                        onChange={handleCharge}
                >
                <option value="">--Seleone un pais--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Pais: </label>
            </div>
            
            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect-waves-light btn-large btn-block green accent-4"

                />
            </div>


        </form>


     );
}

 
export default Formulario;