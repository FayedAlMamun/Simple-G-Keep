import React, { useState } from 'react';
import './Notes.css'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Display from '../Display/Display';
import { useFormik } from 'formik';
const Notes = () => {
    const [show, setShow] = useState(JSON.parse(window.localStorage.getItem('data')));
    show && window.localStorage.setItem('data',JSON.stringify(show))
    const formik = useFormik({
        initialValues: {
            title: '',
            msg: ''
        },
        onSubmit: (values, { resetForm }) => {
            const data = [...show, values];
            setShow(data);
            resetForm({ values: "" })
        },
        validate: values => {
            let errors = {}
            if (!values.title) errors.title = "Name can ot be Empty!"
            if (!values.msg) errors.msg = "Please write something!"
            return errors
        }
    })
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
    const againClicked = () => {
        setExpand(false)

    }
    return (<>
        <div className='main d-flex ms-3 justify-content-center'>
            <div className='mt-3 second' onDoubleClick={againClicked}>
                <form className='m-3' onSubmit={formik.handleSubmit}>
                    {/* onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.title} replaced by getFieldProps */}
                    {expand && <input {...formik.getFieldProps('title')} name='title' type="text" placeholder='Title' />}<br /><br />
                    {formik.errors.title && formik.touched.title ? <div className="error">{formik.errors.title}</div> : null}
                    <textarea {...formik.getFieldProps('msg')} onClick={showMe} name="msg" id="" placeholder='Write a post!'>
                    </textarea>
                    {formik.errors.msg && formik.touched.msg ? <div className="error">{formik.errors.msg}</div> : null}
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
            { window.localStorage.getItem('data') &&
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