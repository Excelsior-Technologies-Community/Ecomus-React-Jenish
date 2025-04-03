import React, { useState } from "react";
import { Button, Modal } from "@mui/material";

const Model = () => {
  const [openParent, setOpenParent] = useState(false);
  const [openChild, setOpenChild] = useState(false);

  return (
    <div>
      <Button variant="contained" onClick={() => setOpenParent(true)}>
        Open Parent Modal
      </Button>

      {/* Parent Modal */}
      <Modal open={openParent} onClose={() => setOpenParent(false)}>
        <div className="modal-box">
          <h2>Parent Modal</h2>
          <p>This is the first modal.</p>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setOpenChild(true)}
          >
            Open Child Modal
          </Button>
          <Button onClick={() => setOpenParent(false)}>Close</Button>

          {/* Child Modal */}
          <Modal open={openChild} onClose={() => setOpenChild(false)}>
            <div className="modal-box">
              <h3>Child Modal</h3>
              <p>This is a nested modal inside the parent.</p>
              <Button onClick={() => setOpenChild(false)}>Close Child</Button>
            </div>
          </Modal>
        </div>
      </Modal>
    </div>
  );
};

export default Model;
