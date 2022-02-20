// src/views/profile.js

import React from 'react';
import { postData } from '../asyncFunctions'
const Home = () => {
  return (
    <div>
        HOME!
        <CrudFunctions />
    </div>
  );
};


const CrudFunctions = () => {
  return (
    <div>
      <button>Create new Event</button>
      <form id='create-form'>
        <div>
          <label htmlFor="event_title">Event Title</label>
          <input type="text" id="event_title" required maxLength="15" />
        </div>
        <div >
          <label htmlFor="event_desc" >Event Description</label>
          <input type="text" id="event_desc" required maxLength="50" />
        </div>
        <div>
          <label htmlFor="event_type"></label> {/* TYPE ENUMRATION */}
          <select name="selectList" id="event_type">
            <option value="Fitness">Fitness</option>
            <option value="Brunch">Brunch</option>
            <option value="Coffee">Coffee</option>
            <option value="Movie">Movie</option>
            <option value="Concert">Concert</option>
          </select>
        </div>
        <div>
          <label htmlFor="event_date">Event Time</label> {/* DATE TIME*/}
          <input type="datetime-local" id="event_date" /> 
        </div>
        <div>
          <label htmlFor="event_location">Event Location</label> {/* DATE TIME*/}
          <input type="text" id="event_location" /> 
        </div>
        <div>
          <input type="file" label="Image" id="pic_upload" accept=".jpeg, .png, .jpg"/>
        </div>
        <div>
          <button type="button">Cancel</button>
          <button type="submit" onClick={(e) => handleFormSubmit(e)}>Create</button>
        </div>
      </form>
    </div>
  );
};

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// const getBase64 = e => {
//   const file = e.files[0];
//   const reader = new FileReader();

//   reader.readAsDataURL(file);
//   reader.onload = function () {
//     return reader.result;
//   };
  
//   reader.onerror = function (err) {
//     console.log("Error:", err);
//   }
// };

// const img = new Image();
// img.src = reader.result;
// img.style.width = '500px';
// document.body.appendChild(img);

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};


// const handleFileUpload = async (e) => {
//   const file = e.target.files[0];
//   const base64 = getBase64(file);
//   setPostImage({ ...postImage, myFile: base64 });
// };


const handleFormSubmit = (e) => {
  const title = document.querySelector("#event_title").value;
  const description = document.querySelector("#event_desc").value;
  const type = document.querySelector("#event_type").value;
  //const location = document.querySelector("#event_location").value;
  const date = document.querySelector("#event_date").value;
  const organizer = getCookie('email');

  convertToBase64(document.querySelector("#pic_upload").files[0])
  .then(value => {
    const data = ({title: title, organizer: organizer, description: description, type: type, pictures: [value], date: date});
    alert(`POSTED! ${JSON.stringify(data)}`)
    postData("http://localhost:3000/api/events/create", data);
  });

  e.preventDefault();
};

export default Home;