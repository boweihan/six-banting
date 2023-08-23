import "./Toggle.css";

type ToggleProps = {
  toggled: boolean;
  onToggle: () => void;
};

const Toggle = ({ toggled, onToggle }: ToggleProps) => {
  return (
    <button onClick={onToggle} className="toggle-button">
      {toggled ? "360°" : "3D"}
    </button>
  );
};

export default Toggle;
