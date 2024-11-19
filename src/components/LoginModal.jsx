import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const LoginModal = ({ show, onHide, project, overlayColor, handleCopyToClipboard }) => {
  return (
    <Modal show={show} onHide={onHide} centered dialogClassName="custom-modal" backdropClassName="custom-backdrop">
      <div className="custom-modal-content">
        <Modal.Header style={{ backgroundColor: overlayColor }} closeButton>
          <Modal.Title>Login Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {project?.username && (
            <div>
              <strong>User:</strong> {project.username}
              <FontAwesomeIcon
                icon={faCopy}
                onClick={() => handleCopyToClipboard(project.username)}
                title="Copy Username to Clipboard"
              />
              <br />
              <strong>Password:</strong> {project.password}
              <FontAwesomeIcon
                icon={faCopy}
                onClick={() => handleCopyToClipboard(project.password)}
                title="Copy Password to Clipboard"
              />
            </div>
          )}
          {project?.adminUsername && (
            <div>
              <strong>Admin:</strong> {project.adminUsername}
              <FontAwesomeIcon
                icon={faCopy}
                onClick={() => handleCopyToClipboard(project.adminUsername)}
                title="Copy Admin Username to Clipboard"
              />
              <br />
              <strong>Password:</strong> {project.adminPassword}
              <FontAwesomeIcon
                icon={faCopy}
                onClick={() => handleCopyToClipboard(project.adminPassword)}
                title="Copy Admin Password to Clipboard"
              />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onHide}>
            OK
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default LoginModal;
