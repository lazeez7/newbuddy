import styles from "./styles.module.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

const ProductModal = ({ state, setState }) => {
  return (
    <Modal
      open={state.open}
      onClose={() => setState({ open: false, data: null })}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
         
      </Box>
    </Modal>
  );
};

export default ProductModal;
