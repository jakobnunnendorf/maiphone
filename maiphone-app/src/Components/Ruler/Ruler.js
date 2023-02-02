import React from 'react'
import './ruler.css'

export default function Ruler() {
    const styles={
        ruler: {
            border: "1px solid red",
            
            width: "3vw",
            height: "100vh",

            position: "fixed",
            top: 0,
            right: 0,
            zIndex: 99999999,

        }
    }
    const marks = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]
    const marksList = marks.map(mark => <div className='mark'><div className="offset">{`-${mark}vh`}</div></div>)
  return (
    <div style={styles.ruler}>
      {marksList}
    </div>
  )
}
