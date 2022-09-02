import React, { useEffect, useState } from "react";
import "./styles.css";

interface IConnectionAlertProps {
  connectionState: boolean;
}

const ConnectionAlert: React.FC<IConnectionAlertProps> = ({ connectionState }) => {
  const [hideSuccess , setHideSuccess] = useState<boolean>(connectionState);
  const [counter , setCounter] = useState<number>(0);
  useEffect(() => {
    if(connectionState) {
      if(counter> 0){
        const timeOut = setTimeout(() => {
          setHideSuccess(true);
        }, 2000);
  
        return () => clearTimeout(timeOut);
      }
      setCounter(prevValue => prevValue + 1);
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