/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { addReservationAsync } from '../redux/reserve/ReservationFormReducer';
import SideBar from './SideBar';

export default function Reserve() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);
  const onSubmit = (reservation) => (dispatch(addReservationAsync(reservation)) ? Navigate('/reservations') : null);
  const { register, handleSubmit } = useForm();

  return (
    <div className="container-fluid flex">
      <SideBar />
      <div className="container-fluid w-full flex flex-col items-center mt-52">
        <h1 className="text-4xl font-bold text-lime-600 mb-6">Add Reservation</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off" className="card w-8/12 p-8 rounded-lg bg-mySpend-blueDoctorLight shadow-md">
          <div className="card-body w-full flex gap-1">
            <div className="flex flex-col w-4/12">
              <label htmlFor="name" className="block text-gray-400 text-md text-center mb-2">
                Date
              </label>
              <input type="date" name="date" {...register('date', { required: true })} />
            </div>
            <div className="flex flex-col w-4/12">
              <label htmlFor="name" className="block text-gray-400 text-md text-center mb-2">
                Add Location
              </label>
              <input type="text" name="city" placeholder="Add City" {...register('city', { required: true })} />
            </div>
            <div className="flex flex-col w-4/12">
              <label htmlFor="name" className="block text-gray-400 text-md text-center mb-2">
                Add Doctor
              </label>
              <select name="doctor" placeholder="Choose a doctor" {...register('doctor_id')}>
                {
                    reservations.doctors?.map((doctor) => (
                      <option key={doctor.id} value={doctor.id}>
                        {doctor.name}
                      </option>
                    ))
                }
              </select>
            </div>
          </div>
          <button type="submit" className="bg-lime-600 text-white text-xl font-semi-bold px-4 py-2 rounded-sm mt-6">Add Reservation</button>
        </form>
      </div>
    </div>
  );
}
