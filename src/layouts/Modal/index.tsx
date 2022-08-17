import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";
import "./styles.css";

interface IModalProps {
  children: ReactNode;
  title: string;
  isOpen:boolean;
  setIsOpen:(isOpen:boolean)=>void;
}

const Modal: React.FC<IModalProps> = ({ children, title , isOpen , setIsOpen}) => {
  // const [closeModal, setCloseModal] = useState<boolean>(false);

  return isOpen ? <div className="modal_overly">
  <div className="modal_dialog">
    <div className="modal_header"><h3>{title}</h3></div>
    <div className="modal_body">
      <a className="close" onClick={() => setIsOpen(false)} href="javascript:void(0);"><FontAwesomeIcon icon={faClose} color="#444" fontSize="22px"/></a>
      {children}
    </div>
  </div>
</div> : <></>
}

export default Modal;