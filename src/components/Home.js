import React, { useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { useDispatch, useSelector } from 'react-redux';
import DoctorList from './DoctorList';
import { fetchDoctors } from '../redux/doctor/DoctorListReducer';
import { carousels } from './Styles';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);
  const doctor = useSelector((state) => state.doctors.doctor);
  const doctors = Array.from(doctor);
  
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    {
      width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false,
    },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 3 },
    { width: 1750, itemsToShow: 4 },
  ];

  return (
    <>
      <main className="main-home">
        <section className="home">
          <div className="home-top-content">
            <h1>Hello Welcome to your Dashboard</h1>
            <p>List of Doctors!</p>
          </div>
          <Carousel style={carousels} breakPoints={breakPoints}>
            {
              doctors.map((doc) => (
                <DoctorList
                  key={doc.id}
                  name={doc.name}
                  avatar={doc.avatar}
                  location={doc.location}
                  email={doc.email}
                />
              ))
            }
          </Carousel>
        </section>
      </main>
    </>
  );
}

export default Home;
