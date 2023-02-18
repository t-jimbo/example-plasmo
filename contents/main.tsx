import type { PlasmoCSConfig } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: ["https://www.google.com/"]
};

const Button: React.FC = () => {
  return <button>button test</button>;
};

export default Button;
