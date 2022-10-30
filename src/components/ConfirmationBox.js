import React, { useEffect, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function ConfirmationBox({open, onConfirm, onCancel}) {

    const [isOpen, setIsOpen] = useState(false);

    const options = {
        title: 'Delete product',
        message: 'Are you sure to do this.',
        buttons: [
          {
            label: 'Yes',
            onClick: onConfirm
          },
          {
            label: 'No',
            onClick: onCancel
          }
        ]
      };

      useEffect(()=>{
        if(open){
            confirmAlert(options);
        }
      },[open])

  return null;
}

export default ConfirmationBox;