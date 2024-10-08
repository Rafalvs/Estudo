import React from 'react';

export default function Talker() {

    function Button(props) {
        return (
          <div>
            <br /> 
              <button id="dont" onClick={props.onClick}>
                Don't Click!
              </button>
          </div>
        );
    }

    function handleClick() {

        let alerta = '';

        for (let i = 0; i < 100; i++)
        {
        alerta += 'pipipipópópó ';
        }

        alert(alerta);
	}

  return <Button onClick={handleClick}/>;
}