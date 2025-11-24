import { useState, useRef } from 'react';

export default function Player() {
  const [name, setName] = useState('');
  const inputRef = useRef();

  function handleNameChange(event) {
    setName(inputRef.current.value);
    inputRef.current.value = '';
  }

  return (
    <> 
      <section id="player">
        <h2>{name ? `Welcome ${name}` : 'Welcome unknown entity'}</h2>
        <p>
          <input type="text" ref={inputRef} />
          <button onClick={handleNameChange}>Set Name</button>
        </p>
      </section>
    </>
    );
}
