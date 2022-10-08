import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDoctor } from '../redux/doctor/AddDoctorReducer';
import './App.css';

function AddDoctor() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [bill, setBill] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  const doctorsName = document.getElementById('username');
  const doctorsEmail = document.getElementById('doctor-email');
  const doctorsSpeciality = document.getElementById('speciality');
  const doctorsLocation = document.getElementById('location');
  const doctorsBill = document.getElementById('docbill');
  const doctorsImage = document.getElementById('image');
  const submitForm = (e) => {
    e.preventDefault();
    const newDoctor = {
      user_id: 1,
      name,
      speciality,
      bill,
      location,
      email,
      avatar,
    };
    dispatch(addDoctor(newDoctor));
    doctorsName.value = '';
    doctorsEmail.value = '';
    doctorsSpeciality.value = '';
    doctorsLocation.value = '';
    doctorsBill.value = '';
    doctorsImage.value = '';
  };

  return (
    <div className="form-container">
      <div className="form-control">
        <form onSubmit={submitForm}>
          <input
            id="image"
            className="img-input"
            type="text"
            placeholder="Enter Image Url"
            name="Image"
            onChange={(e) => {
              setAvatar(e.target.value);
            }}
          />
          <label htmlFor="name">
            Name:
            <input
              className="username_field"
              id="username"
              required
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="speciality">
            Speciality:
            <input
              className="username_field"
              id="speciality"
              required
              placeholder="Speciality"
              value={speciality}
              name="speciality"
              onChange={(e) => setSpeciality(e.target.value)}
            />
          </label>
          <label htmlFor="bill">
            Bill:
            <input
              className="username_field"
              type="number"
              id="docbill"
              required
              placeholder="Cost/h"
              value={bill}
              name="bill"
              onChange={(e) => setBill(e.target.value)}
            />
          </label>
          <label htmlFor="location">
            Location:
            <input
              className="username_field"
              id="location"
              required
              placeholder="Location"
              value={location}
              name="location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              className="username_field"
              type="email"
              id="doctor-email"
              required
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <input className="create-doctor-button" type="submit" value="Create Doctor" />
        </form>
      </div>
    </div>
  );
}

export default AddDoctor;
