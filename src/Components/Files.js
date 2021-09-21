import React, {useState, useEffect} from 'react'
import './Files.css'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {storage} from '../index';
import { getStorage, ref, listAll } from "firebase/storage";



export default function Files(props) {
    const [image, setImage] = useState(null);
    const [user, setUser] = useState(null);
    const [progress, setProgress] = useState(0);
    const [filesArr, setFilesArr] = useState(props.filesArr);



    useEffect(()=>{
        //Firebase Auth State Observer
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            const uid = user.uid;
            setUser(uid);
          } else {
            // User is signed out
            setUser(null);
          }
        });

        // loadFiles();
    
      },[])


      useEffect(()=>{
          console.log('filesArr changed!')
          console.log(filesArr);
          
      },[filesArr])

    const handleChange = (e) =>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }

    // I wrote this function when I was trying to load files from firebase storage and show it in this component
    // const loadFiles = () =>{
    //     let tempFilesArr = [];

    //     let storageRef = firebase.storage().ref(`${user}`);
    //     // Now we get the references of these images
    // storageRef.listAll().then( result => {
    //         let res = result.items;
    //         let tempUrl = '';

    //         for(let i=0; i<res.length; i++){
    //             res[i].getDownloadURL()
    //             .then(url=> tempUrl=url)
    //             res[i].getMetadata()
    //             .then(metadata =>{
    //                 console.log(metadata); 
    //                 tempFilesArr = [...tempFilesArr,{name: metadata.name, date: metadata.timeCreated, link: tempUrl}];
    //                 // console.log(tempFilesArr);
    //                 // document.getElementById('dataTable').innerHTML = metadata.name;

    //                 var ul = document.getElementById("list");
    //                 var li = document.createElement("li");
    //                 li.innerHTML=(`${metadata.name}<br/> ${metadata.timeCreated}<br/> 
    //                 <a href="${tempUrl}" target="_blank">Link to the file</a>`);
    //                 ul.appendChild(li);

                   
    //             })
    //         }
       
    //   }
    //   ).catch(function(error) {
    //     console.log(error);
    //   });
    // }

    const handleUpload = () =>{
        if (image==null){
            alert('No file to upload');
        }
        else{
        let tempUrl = '';

        const uploadTask = storage.ref(`${user}/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error =>{
                console.log(error);
            },
            () => {
                storage
                .ref(`${user}`)
                .child(image.name)
                .getDownloadURL()
                .then(url =>{
                    tempUrl = url;
                    console.log(url);
                    
                })
                storage
                .ref(`${user}`).child(image.name).getMetadata()
                .then(metadata =>{
                    //show the data of the new file 
                    var ul = document.getElementById("list");
                    var li = document.createElement("li");
                    li.innerHTML=(`${metadata.name}<br/> ${metadata.timeCreated}<br/> 
                    <a href="${tempUrl}" target="_blank">Link to the file</a>`);
                    ul.appendChild(li);

                   
                })
            }
        )
    }
    };

    return (
        <div className='filesComponent'>
            <h1>Files Uploader</h1>
            <input type='file' onChange={handleChange}/>
            <button onClick={handleUpload}>Upload</button>

            <div id='allFilesDiv'>
                <ul id='list'>
                    
                </ul>
            </div>
            
        </div>
    )
}
