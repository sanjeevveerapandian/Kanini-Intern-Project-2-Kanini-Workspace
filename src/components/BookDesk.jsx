
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookDesk.css';
import { setDeskLocation, setDeskDate, bookDesk } from './DeskSlice';
const Desk = () => {
  const dispatch = useDispatch();
  const { location, date, bookingSuccess } = useSelector((state) => state.desk); 

  const handleLocationChange = (e) => {
    dispatch(setDeskLocation(e.target.value));
  };

  const handleDateChange = (e) => {
    dispatch(setDeskDate(e.target.value));
  };

  const handleBookDesk = () => {
    dispatch(bookDesk());
  };

  return (
    <div className="container mt-5 ds">
      <h2 className="text-left">Book a Desk</h2>
      <h6 className="text-secondary text-left mb-4">Book a desk for the day to use in the common area of any Kanini location</h6>

      <div className="row">
        <div className="col-md-6">
          {/* Form section */}
          <div className="form-container">
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="deskLocation">Location</label>
                  <input
                    type="text"
                    id="deskLocation"
                    className="form-control small-input"
                    placeholder="Enter location"
                    value={location}
                    onChange={handleLocationChange}
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="deskDate">Date</label>
                  <input
                    type="date"
                    id="deskDate"
                    className="form-control small-input"
                    value={date}
                    onChange={handleDateChange}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <img src="add.png" alt="add"/>
              <h6 className='mt-1'>Add a colleague</h6>
            </div>
            <div className="d-flex justify-content-start">
              <button className="btn btn-primary" onClick={handleBookDesk}>
                Book a Desk
              </button>
            </div>
            {bookingSuccess && (
              <div className="alert alert-success mt-3" role="alert">
                Desk booked successfully!
              </div>
            )}
          </div>
        </div>
        <div className="col-md-6">
          {/* Image section */}
          <div className="image-container img">
            <img src="pixel.png" alt="Desk" className="desk-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desk;
