import React from 'react'
import ProcessGraphic from './ProcessGraphic/ProcessGraphic'

export default function Content() {
  const styles = {
    component: {
      width: "80%",
      height: "80%",
      
      display: "flex",
      justifyContent: "center"
    }
  }
  return (
    <div style={styles.component}>
      <ProcessGraphic/>
    </div>
  )
}
