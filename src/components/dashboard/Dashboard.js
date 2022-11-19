import React, {useState} from 'react'
import Display from '../design/Display'
import Settings from '../design/Settings'
import {storage,storageRef} from '../../config/firebaseConfig'
import {getStorage,ref,uploadBytesResumable,getDownloadURL} from "firebase/storage"

function Dashboard() {
    const [state,setState] = useState({
        tshirtColor : 'black',
        upperText: 'This is upper text',
        lowerText: 'This is lower text',
        memeImg : '',
        url:'',
        textSize : 44,
        textColor:'white',
    })    

    const handleTshirtColor = (e) => {
        console.log(e.target.id)
        setState((prevState) => ({
            ...prevState,
            tshirtColor:e.target.id
        }))
    }

    const handleUpperText = (e) => {
        setState((prevState) => ({
            ...prevState,
            upperText: e.target.value
        })) 
    }

    const handleLowerText = (e) => {
        setState((prevState) => ({
            ...prevState,
            lowerText: e.target.value
        }))
    }

    const handleTextSize = (e) => {
        setState((prevState) => ({
            ...prevState,
            textSize:e.target.value
        }))
    }

    const handleTextColor = (e) => {
        setState((prevState) => ({
            ...prevState,
            textColor:e.target.value
        }))
    }
    const formatText = () => {
        const size = state.textSize
        return parseInt(size)
    }

    const handleImageUpload = (e) => {
        if(e.target.files[0]){
            const image = (e.target.files[0]);
            // const storage = getStorage();
            const storageRef = ref(storage,`images/${image.name}`)
            const uploadTask = uploadBytesResumable(storageRef,e.target.files[0])
            // const uploadTask = storageRef(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',
            (snapshot) =>{
                console.log(snapshot)
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            },
            (error) => {
                console.log(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>{
                    setState((prevState) => ({
                        ...prevState,
                        url:downloadURL
                    }))
                })
            }
            )
        }
    }
  return (
    <div className="container py-5">
        <div className='row'>
            <div className='col-lg-8'>
                <Display 
                    display={state}
                    textFormat={formatText()}
                     />
            </div>
            <div className='col-lg-4'>
                <Settings 
                    color={handleTshirtColor}
                    upperText={handleUpperText}
                    lowerText={handleLowerText}
                    uploadImage={handleImageUpload}
                    textSize={handleTextSize}
                    textColor={handleTextColor}
                />
            </div>
        </div>
    </div>
  )
}

export default Dashboard