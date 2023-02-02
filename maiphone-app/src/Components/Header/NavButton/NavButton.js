import React from 'react';

const styles = {
  inactive_btn: {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
    color: "inherit"
},
  active_btn: {
      color: "white",
      background: "none",
      border: "none",
      font: "inherit",
      cursor: "pointer",
      outline: "inherit",
  }
}

export default function NavButton(props) {
  return (
    <button style={props.site === props.activeSite ? styles.active_btn : styles.inactive_btn}>{props.site}</button>
    )
}
