import React, { useState } from 'react';
import Form from './components/Form';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'Ahmet yılmaz', email: 'ahmet@ahmet.com', role: 'frontend engineer' },
    { id: 2, name: 'mehmet yıldız', email: 'mehmet@mehmet.com', role: 'backend engineer' }
  ]);
  const [editingMember, setEditingMember] = useState(null);

  const addMember = (member) => {
    setTeamMembers([...teamMembers, member]);
  };

  const startEditing = (member) => {
    setEditingMember(member);
  };

  const updateMember = (updatedMember) => {
    setTeamMembers((prevMembers) =>
      prevMembers.map((member) => (member.id === updatedMember.id ? updatedMember : member))
    );
    setEditingMember(null);
  };

  const cancelEditing = () => {
    setEditingMember(null);
  };

  const deleteMember = (memberId) => {
    setTeamMembers((prevMembers) => prevMembers.filter((member) => member.id !== memberId));
  };

  return (
    <div>
      <h1>Team Members</h1>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>
            {member.name} - {member.email} - {member.role}
            <button onClick={() => startEditing(member)}>Edit</button>
            <button onClick={() => deleteMember(member.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Form
        addMember={addMember}
        editingMember={editingMember}
        updateMember={updateMember}
        cancelEditing={cancelEditing}
      />
    </div>
  );
}

export default App;
