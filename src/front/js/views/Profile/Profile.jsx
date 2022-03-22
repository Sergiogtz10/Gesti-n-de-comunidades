import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDataUsers, putDataUsers } from "../../Service/dataprofile.js";
import "./Profile.css";


const initialStateErr = {
  first_name: "",
  last_name: "",
  flat_number: "",
  email: "",
  phone_number: "",
};

const Profile = () => {
  const [dataUser, setDataUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });
  const [dataUserCopy, setdataUserCopy] = useState({});
  const [edit, setedit] = useState(false);
  const [err, setErr] = useState({ initialStateErr });

  const getData = async () => {
    try {
      const response = await getDataUsers();
      const data = await response.json();
      console.log(data);
      let newUser = {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone_number: data.phone_number,
      };

      setDataUser(newUser);
      setdataUserCopy(newUser);
      console.log(newUser);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataUser({ ...dataUser, [name]: value });
  };
  console.log(dataUser);

  const handleClick = (e) => {
    e.preventDefault();
    let newerr = { ...initialStateErr };
    if (dataUser.first_name.length == 0) {
      newerr = { ...newerr, first_name: "Introduzca su nombre" };
    }
    if (dataUser.last_name.length == 0) {
      newerr = { ...newerr, last_name: "Introduzca sus apellidos" };
    }
    if (dataUser.email.length == 0) {
      newerr = { ...newerr, email: "Introduzca su email" };
    }
    if (dataUser.phone_number.length !== 9) {
      newerr = { ...newerr, phone_number: "Introduzca su móvil" };
    }
    setErr(newerr);
    putData();
  };
  const putData = async () => {
    try {
      const response = await putDataUsers(dataUser);
      const updatedData = await response.json();
      setedit(false)
      console.log(updatedData)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h3 id="title" className="container mt-5" style={{ width: "500px" }}>
        {dataUser.first_name + " " + dataUser.last_name}
      </h3>
      <div id="card" className="container card p-4" style={{ width: "500px" }}>
        <h4 id="titlecardprofile" className="text-center">
          Datos personales
        </h4>
        <hr className="my-3"></hr>
        <div>
          <form
            className="text-center"
            onSubmit={handleClick}
            onChange={handleChange}
          >
            <div className="mb-3">
              <input
                type="text"
                defaultValue={dataUser.first_name}
                id="inputprofile"
                disabled={!edit}
                name="first_name"
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="text"
                defaultValue={dataUser.last_name}
                id="inputprofile"
                disabled={!edit}
                name="last_name"
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="text"
                defaultValue={dataUser.email}
                id="inputprofile"
                disabled={!edit}
                name="email"
              ></input>
            </div>
            <div id="updateboton" className="mb-3">
              <input
                type="text"
                defaultValue={dataUser.phone_number}
                id="inputprofile"
                disabled={!edit}
                name="phone_number"
              ></input>
            </div>
            {edit == true ? <button type="submit" className="btn btn-primary" id="boton">Guardar</button>: null}
          </form>
          <div className="p-1 text-center">
          {edit == false ? <button type="submit" className="btn btn-primary" id="boton" onClick={() => setedit(true)}>Actualizar</button> : null}
          </div>
        </div>
      </div>
      <div className="p-4">
        <div
          id="card"
          className="container text-center card p-4"
          style={{ width: "500px" }}
        >
          <h4 id="titlecardprofile" className=" text-center mb-4">
            Comunidades
          </h4>
          <hr className="my-3"></hr>
          <div className="d-flex flex-column col-md-5 gap-3 p-3 container">
            <Link to="/form/community">
              <button type="submit" className="btn btn-primary " id="boton">
                Añadir comunidad
              </button>
            </Link>
            <Link to="/form/owner/:id">
            <button type="submit" className="btn btn-primary" id="boton">
              Añadir propietario
            </button>
            </Link>
            <button type="submit" className="btn btn-primary" id="boton">
              Seleccionar comunidad
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
