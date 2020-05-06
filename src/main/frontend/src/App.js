import React, {useState, useEffect, useCallback} from 'react';
import {useDropzone} from 'react-dropzone'
import './App.css';
import axios from 'axios';

const UserProfile = () => {
  const [userProfiles, setUserProfiles] = useState([]);
  const fetchUserProfile = () => {
    axios.get("http://localhost:8080/api/v1/user-profile").then(res => {
      console.log(res);
      setUserProfiles(res.data);
    });
  }

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return userProfiles.map((userProfile, index) => {
    return (
        <div key={index}>
            <br/>
            <br/>
            {userProfile.profileId ? <img src={`http://localhost:8080/api/v1/user-profile/${userProfile.profileId}/image/download`}/>: null}
            <br/>
            <h1>{userProfile.username}</h1>
            <p>{userProfile.profileId}</p>
            <br/>
            <DropZone {...userProfile}/>
        </div>
    )
  });
}

function DropZone({profileId}) {
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    console.log(file);
    const fromData = new FormData();
    fromData.append("file", file);
    axios.post(`http://localhost:8080/api/v1/user-profile/${profileId}/image/upload`, fromData, {
        headers: {
            "Content-type": "multipart/from-data"
        }
    }).then(() => {
        console.log("file uploaded successfully");
    }).catch(err => {
        console.log(err);
    })
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag 'n' drop profile image here, or click to select image</p>
        }
      </div>
  )
}

function App() {
  return (
    <div className="App">
      <UserProfile />
    </div>
  );
}

export default App;
