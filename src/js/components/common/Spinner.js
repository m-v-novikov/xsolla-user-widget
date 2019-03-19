import React from 'react';

export default function Spinner(){
  return (
    <div className="lds-spinner">
      {
        "spinner_divs".split("").map((item, i) => { // <= str.length - 12
          return (<div key={item + i}/>);
        })
      }
    </div>
  );
}
