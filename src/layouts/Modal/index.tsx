import React, { ReactNode } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalOverly, ModalDialog, ModalBody, ModalHeader, ModalClose}  from "./styles";

interface IModalProps {
  children: ReactNode;
  title: string;
  isOpen:boolean;
  setIsOpen:(isOpen:boolean)=>void;
}

const Modal: React.FC<IModalProps> = ({ children, title , isOpen , setIsOpen}) => {
  // const [closeModal, setCloseModal] = useState<boolean>(false);

  return isOpen ? <ModalOverly>
  <ModalDialog>
    <ModalHeader><h3>{title}</h3></ModalHeader>
    <ModalBody>
      <ModalClose onClick={() => setIsOpen(false)}>
        <FontAwesomeIcon icon={faClose} color="#444" fontSize="22px"/>
      </ModalClose>
      {children}
    </ModalBody>
  </ModalDialog>
</ModalOverly> : <></>
}

export default Modal;