function Modal(props) {
    function cancelHandler(){
        props.onCancel();
    };
    function confirmHandler(){
        props.onConfirm();
    };
    return (
        <div className='modal'>
            <p>Are You Sure</p>
            <button className='btn btn--alt'onClick={props.onCancel} on>Cancel</button>
            <button className='btn' onClick={props.onConfirm}>Confirm</button>
        </div>
    );

}

export default Modal;