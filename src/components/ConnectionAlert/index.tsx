import React, { useEffect, useState } from "react";
import "./styles.css";

interface IConnectionAlertProps {
  connectionState: boolean;
}

const ConnectionAlert: React.FC<IConnectionAlertProps> = ({ connectionState }) => {
  const [hideSuccess , setHideSuccess] = useState<boolean>(false);  
  useEffect(() => {
    if(connectionState) {
      const timeOut = setTimeout(() => {
        setHideSuccess(true);
      }, 2000);

      return () => clearTimeout(timeOut);
    } else {
      setHideSuccess(false);
    }
  },[connectionState]);

  const renderAlertBox = () => {
    let alertClassName = "offline";
    let alertText = "Connection lost, Please try later!";;
    if(connectionState) {
      alertClassName = "online";
      alertText = "Internet connection established";
    }

    return hideSuccess ? <></> : <div className={`connection_alert ${alertClassName}`}>{alertText}</div> ;
  }

  return renderAlertBox();
}

export default ConnectionAlert;