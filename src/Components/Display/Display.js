import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
const Display = (props) => {
  return (
    <div className='col-md-3 mt-5 col-sm-6 col-12'>
      <div className="card" style={{ width: '18rem' }}>
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.text}</p>
          <div className="d-flex justify-content-end">
            <Button onClick={()=>props.delete(props.id)}  className="btn-pos" variant="contained"  >
              <DeleteIcon></DeleteIcon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;