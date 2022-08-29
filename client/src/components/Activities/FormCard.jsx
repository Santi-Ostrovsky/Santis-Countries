import React from "react";

export default function FormCard(props) {
  const { id, name, flag, state, setState } = props;

  const handleClick = () => {
    setState({
      ...state,
      countries: state.countries.filter((c) => c !== id),
    });
  };

  return (
    <div>
      <button onClick={handleClick}>
        <div className="close">❌</div>
        <img className="flag" src={flag} alt={`${name}'s flag`} />
        <div className="name">{name}</div>
      </button>
    </div>
  );
}
