import React from 'react';
import './NewProcess.css';

interface NewProcessProps {
  onBack?: () => void;
}

const NewProcess: React.FC<NewProcessProps> = ({ onBack }) => {
  return (
    <main className="new-process-container">
      {/* Back button returns to the table */}
      <button type="button" className="back-btn" onClick={onBack}>
        BACK
      </button>
      
      <h1 className="new-process-title">New Process</h1>

      <form className="new-process-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label className="form-label">Company name</label>
          <input type="text" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Role</label>
          <input type="text" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Status</label>
          <input type="text" className="form-input" />
        </div>
          
        <div className="form-group">
          <label className="form-label">Location</label>
          <input type="text" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Application link</label>
          <input type="url" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Resume</label>
          <input type="text" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea className="form-textarea" />
        </div>

        {/* Action buttons */}
        <div className="form-actions">
          <button type="button" className="btn-action" onClick={onBack}>
            CANCEL
          </button>
          <button type="submit" className="btn-action">
            CREATE
          </button>
        </div>
      </form>
    </main>
  );
};

export default NewProcess;