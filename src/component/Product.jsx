import React, { useState } from "react";

export default function Product() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const kirim = () => {
    alert([name, age, email]);
  };

  return (
    <>
      <form>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Nama" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label for="age">Age</label>
        <input type="text" name="age" id="age" placeholder="Umur" value={age} onChange={(e) => setAge(e.target.value)} />
        <br />
        <label for="email">Email</label>
        <input type="email" name="email" id="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <button type="submit" onSubmit={kirim}>
          KIRIM
        </button>
      </form>
    </>
  );
}
