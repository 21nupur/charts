import React, { Component } from 'react'
var style = {
    backgroundColor: "#000000",
    borderTop: "1px solid #E7E7E7",
    color:"white",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "10px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footers({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                nupurpandey@2019
                { children }
            </div>
        </div>
    )
}

export default Footers