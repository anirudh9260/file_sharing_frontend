import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DeleteProjectModal(props) {

  const {project_name} = props
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCancel = () => setOpen(false);
  const handleDeleteProject = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={handleOpen} size="small" color='error'>Delete Project</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete {project_name}. Are you sure ?
          </Typography>
          <Button variant="contained" color="primary" onClick={handleCancel}>Cancel</Button>
          <Button variant="contained" color='error' onClick={handleDeleteProject}>OK</Button>
          
          
        </Box>
      </Modal>
    </div>
  );
}
DeleteProjectModal.propTypes = {
  project_name: PropTypes.string.isRequired,
}