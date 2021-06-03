import {useState} from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {

    let [modalIsOpen, setModalIsOpen] = useState(false);

function deleteHandler(){
    setModalIsOpen(true);
// console.log('clicked');
// console.log(props.text);

}

    return (
    <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
            <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
        {modalIsOpen && <Modal/>}
        {modalIsOpen && <Backdrop/>}
        
        {/* <Backdrop/> */}
    </div>
    );
}

export default Todo;