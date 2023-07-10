import React, { useState, useEffect } from 'react';

function Form({ addMember, editingMember, updateMember, cancelEditing }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    if (editingMember) {
      setName(editingMember.name);
      setEmail(editingMember.email);
      setRole(editingMember.role);
    }
  }, [editingMember]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingMember) {
      const updatedMember = {
        ...editingMember,
        name,
        email,
        role
      };
      updateMember(updatedMember);
    } else {
      const newMember = {
        id: Math.random(),
        name,
        email,
        role
      };
      addMember(newMember);
    }
    setName('');
    setEmail('');
    setRole('');
  };

  const handleCancel = (e) => {
    e.preventDefault();
    cancelEditing();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      /><br />
      {editingMember ? (
        <>
          <button type="submit">Update Member</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <button type="submit">Add Member</button>
      )}
    </form>
  );
}

export default Form;
