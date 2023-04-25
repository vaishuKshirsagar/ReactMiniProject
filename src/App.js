import React from 'react';

function App(){
    let currDate = new Date(2020, 5, 2 );
    currDate= currDate.getHours();
    let greeting = "";
    const cssStyle = {};

    if (currDate > 1 && currDate < 12){
        greeting = "Good morning";
        cssStyle.color = "#00b894";
    }
    else if(currDate > 12 && currDate < 20){
        greeting = "Good afternoon";
        cssStyle.color = "orange";
    }
    else {
        greeting = "Good night";
        cssStyle.color = "blue";
    }
     
    return(
        <>
        <div>
            <h1>
                Hello mam, <span style={cssStyle}>{greeting}</span>
            </h1>
        </div>
        </>
    )
}

export default App;