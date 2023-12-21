import { FaSpinner } from "react-icons/Fa";

import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <>
      <FaSpinner className={classes.loader} />
    </>
  );
};

export default Loader;
