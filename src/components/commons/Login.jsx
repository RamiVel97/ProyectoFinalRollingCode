import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../App.css';

Modal.setAppElement('#root');

const LoginModal = ({ modalIsOpen, closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica de inicio de sesión
    console.log(`Username: ${username}, Password: ${password}`);
    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        className={'unstyle'}
        onRequestClose={closeModal}
        style={{ overlay: {}, content: {} }} // Objeto de estilos vacío
        contentLabel="Modal de inicio de sesión"
      >
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre de usuario:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <label>
            Contraseña:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <input type="submit" value="Iniciar sesión" />
        </form>
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </div>
  );
};

export default LoginModal;