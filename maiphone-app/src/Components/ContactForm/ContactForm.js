import React, { useState } from "react";

export default function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const styles={
        form: {
            border: "red solid 1px",
            width: "50vw",
            height: "70%"
        }
    }

  return (
        <form action="submit" style={styles.form}>

        </form>
    )
}
