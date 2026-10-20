import React from 'react';
import './ProcessDetailView.css';

interface ProcessDetailViewProps {
  onBack?: () => void;
  onEdit?: () => void;
}

const ProcessDetailView: React.FC<ProcessDetailViewProps> = ({ onBack, onEdit }) => {
  return (
    <main className="process-detail-container">
      <h1 className="process-detail-title">Process detail view</h1>

      {/* Top Action Buttons */}
      <div className="top-actions">
        <button type="button" className="btn-primary" onClick={onBack}>BACK</button>
        <button type="button" className="btn-primary" onClick={onEdit}>EDIT</button>
      </div>

      {/* Main Details Section */}
      <div className="process-detail-content">
        <div className="detail-field">
          <span className="field-label">Company name</span>
        </div>

        <div className="detail-field">
          <span className="field-label">Role</span>
        </div>

        <div className="detail-field">
          <span className="field-label">Status</span>
        </div>

        <div className="detail-field">
          <span className="field-label">Location</span>
        </div>

        <div className="detail-field">
          <span className="field-label">Application link</span>
        </div>

        <div className="detail-field">
          <span className="field-label">Date applied</span>
        </div>
        
        <div className="detail-field">
          <span className="field-label">Resume</span>
        </div>

        <div className="detail-field">
          <span className="field-label">Description</span>
          <div className="description-box" />
        </div>

        {/* Bottom Action Buttons */}
        <div className="bottom-actions">
          <button type="button" className="btn-primary" onClick={onBack}>CANCEL</button>
          <button type="button" className="btn-primary">SAVE</button>
        </div>
      </div>
    </main>
  );
};

export default ProcessDetailView;