import React, { useState } from 'react';
import './Processes.css';

export interface ProcessItem {
  id: string;
  company: string;
  role: string;
  status: string;
  resume: string;
  creationDate: string;
  lastUpdated: string;
}


interface ProcessesProps {
  onAddProcess?: () => void;
  onSelectProcess?: () => void; 
}

const Processes: React.FC<ProcessesProps> = ({ onAddProcess, onSelectProcess }) => {
  const [processes] = useState<ProcessItem[]>([
    {
      id: '1',
      company: 'Google',
      role: 'Frontend Developer',
      status: 'Submitted',
      resume: 'Software_Engineer_CV.pdf',
      creationDate: '2026-10-20',
      lastUpdated: '2026-10-20',
    },
  ]);

  return (
    <main className="processes-container">
      <h1 className="processes-title">Processes</h1>
      
      <div className="processes-content">
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
            {processes.map((item) => (
              /* 2.click line*/
              <tr 
                key={item.id} 
                onClick={onSelectProcess} 
                style={{ cursor: 'pointer' }}
              >
                <td>{item.id}</td>
                <td>{item.company}</td>
                <td>{item.role}</td>
                <td>{item.status}</td>
                <td>{item.resume}</td>
                <td>{item.creationDate}</td>
                <td>{item.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Processes;