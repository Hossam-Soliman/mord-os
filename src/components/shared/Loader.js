import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { getIsLoaderOpen } from "../../store/app/AppSelectors";

const Loader = () => {
  const show = useSelector((state) => getIsLoaderOpen({ state }));

  return (
    <Fragment>
      <div className={`loader-wrapper ${show ? "" : "loderhide"}`}>
        <div className='loader bg-white'>
          <div className='whirly-loader'> </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Loader;
