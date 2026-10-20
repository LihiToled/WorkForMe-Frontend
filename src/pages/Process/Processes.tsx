import React from 'react';
import './Processes.css';

interface ProcessesProps {
  onAddProcess?: () => void;
}

const Processes: React.FC<ProcessesProps> = ({ onAddProcess }) => {
  return (
    <main className="processes-container">
      <h1 className="processes-title">Processes</h1>
      
      <div className="processes-content">
        {/* Trigger navigation on click */}
        <button type="button" className="add-process-btn" onClick={onAddProcess}>
          + ADD PROCESS
        </button>

        <table className="processes-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>COMPANY</th>
              <th>ROLE</th>
              <th>STATUS</th>
              <th>RESUME</th>
              <th>CREATION DATE</th>
              <th>LAST UPDATED</th>
            </tr>
          </thead>
          <tbody>
            <tr className="empty-row">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Processes;