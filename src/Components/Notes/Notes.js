import React, { useState } from 'react';
import './Notes.css'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Display from '../Display/Display';
const Notes = () => {
    const [notes, setNotes] = useState({
        title: "",
        msg: ""
    })
    const [show, setShow] = useState([]);
    const eventInput = (e) => {
        const note = { ...notes };
        note[e.target.name] = e.target.value;
        setNotes(note);
        console.log(notes);
    }
    const setClick = (e) => {
        const data = [...show, notes];
        setShow(data);
        setNotes({
            title: "",
            msg: ""
        })
        e.preventDefault();
    }
    const [expand, setExpand] = useState(false);
    const showMe = () => {
        setExpand(true)
    }
    const deleteTxt = (id) => {
        const texts = show.filter((e, index) => {
            return id !== index;
        })
        setShow(texts);
    }
    const againClicked=()=>{
        setExpand(false)

    }
    return (<>
        <div className='main d-flex ms-3 justify-content-center'>
            <div className='mt-3 second' onDoubleClick={againClicked}>
                <form className='m-3' onSubmit={notes.title && notes.msg ? setClick : 'none'}>
                    {expand && <input onChange={eventInput} value={notes.title} required name='title' type="text" placeholder='Title' />}<br /><br />
                    <textarea onChange={eventInput} onClick={showMe} value={notes.msg} required name="msg" id="" placeholder='Write a post!'>
                    </textarea>
                    {
                        expand &&
                        <div className="d-flex justify-content-end">
                            <Button type='submit' className="btn-pos" variant="outlined" color='secondary' >
                                <AddIcon className='icon' />
                            </Button>
                        </div>
                    }
                </form>
            </div>
        </div>
        <div className="row m-4">
            {
                show.map((e, index) => {
                    return [
                        <Display title={e.title}
                            text={e.msg}
                            key={index}
                            id={index}
                            delete={deleteTxt}
                        />
                    ]
                })
            }
        </div>
    </>
    );
};

export default Notes;