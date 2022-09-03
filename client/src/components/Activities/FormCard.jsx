import React from "react";
import styles from "../../styles/Activities/FormCard.module.css";

export default function FormCard(props) {
  const { id, name, flag, state, setState } = props;

  const handleClick = () => {
    setState({
      ...state,
      countries: state.countries.filter((c) => c !== id),
    });
  };

  return (
    <>
      <div className={styles.remove_button}>
        <button onClick={handleClick}>❌</button>
      </div>
      <div className={styles.card}>
        <img src={flag} alt={`${name}'s flag`} className={styles.flag} />
        <div className={styles.name}>{name}</div>
      </div>
    </>
  );
}
