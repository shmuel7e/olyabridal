import React from "react";
import { Input, Modal } from "@material-ui/core";


const PopUp = ({ isOpen, handleClose }) => {

    const onSubmit =(e) =>{
        e.preventDefault();
        handleClose();
    }   

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
      >
        <div className="popup">
            <div>צור קשר:</div>
          <form action="mailto:shmuel7e@gmail.com"  method="post" encType="text/plain" >
            <div className="input">
              <Input type="text" name="name" placeholder="שם" fullWidth/>
            </div>
            <div className="input">
              <Input type="text" name="email" placeholder="מייל" fullWidth/>
            </div>
            <div className="input">
              <Input type="text" name="phone" placeholder="טלפון" fullWidth/>
            </div>
            <div className="date">
              <Input type="date" name="date" placeholder="תאריך" fullWidth />
            </div>
            <input  type="submit" value="Send"></input>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default PopUp;
