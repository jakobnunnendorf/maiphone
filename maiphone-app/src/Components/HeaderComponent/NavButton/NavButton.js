import React from 'react';

const styles = {
  btn: {
    background: "none",
    color: "inherit",
    border: "none",
    padding: 0,
    font: "inherit",
    cursor: "pointer",
    outline: "inherit"
  }
}

export default function NavButton(props) {
  return (
    <button style={styles.btn} onClick={props.setActive(props.site)}>{props.site}</button>
  )
}
