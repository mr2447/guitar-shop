// METHOD #3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import React, { useState, useEffect  } from 'react'
import images from '../../api-mock.json';
import Axios from 'axios'
import { getImages, searchImages } from '../../api';

const CloudImage = () => {
    const [imageList, setImageList] = useState([]);
    const [imageSelected, setImageSelected] = useState("")
  
    

    const uploadImage = () => {
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "r3ez6njg")
        
        Axios.post("https://api.cloudinary.com/v1_1/daz0iuak1/image/upload", formData)
        .then((response) => {
            console.log(response);
        })
    };

    return (
        <main>
            
            <div>
                {imageList.map((image) => (
                    <img src={image.url} alt={image.public_id} />
                ))}
            <div>
                <input type="file" onChange={(event)=> {
                    setImageSelected(event.target.files[0])
                }}></input>
                <button onClick={uploadImage}>Upload Image</button>
        
            </div>
            </div>
        </main>
    )
}

export default CloudImage
// //METHOD 2 USING CLOUDINARY AND AXIOS POST ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// import React, { useState } from 'react'
// import Axios from 'axios'
// import Buffer from 'buffer'



// function CloudImage({images}) {
//     console.log('images', images)
//     getStaticProps()
//     const [imageSelected, setImageSelected] = useState("")
//     const uploadImage = () => {
//         const formData = new FormData()
//         formData.append("file", imageSelected)
//         formData.append("upload_preset", "r3ez6njg")

//         Axios.post("https://api.cloudinary.com/v1_1/daz0iuak1/image/upload", formData)
//         .then((response) => {
//             console.log(response);
//         })
//     };
//     return (
//     <div>
//         <input type="file" onChange={(event)=> {
//             setImageSelected(event.target.files[0])
//         }}></input>
//         <button onClick={uploadImage}>Upload Image</button>
        
//     </div>
//     )
// }

// export async function getStaticProps() {
//     const reader = new FileReader();
//     const apiKey = process.env.CLOUDINARY_API_KEY
//     const apiSecret = process.env.CLOUDINARY_API_SECRET
//     reader.readAsDataURL(apiKey);
//     reader.readAsDataURL(apiSecret)
//     const apiKey64 = reader.result
//     const apiSecret64 = reader.result
//     const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`, {
//         headers: {
//             // Authorization: `Basic ${Buffer(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
//            Authorization: "Basic apiKey64:apiSecret64"
//         }
//     }).then(r => r.json());
    
//     console.log('results: ',results)
//     const { resources } = results;

//     const images = resources.map(resource => {
//         const { width, height } = resource;
//         return {
//             id: resource.asset_id,
//             title: resource.public_id,
//             image: resource.secure_url,
//             width,
//             height
//         }
//     })
//     return {
//         props: {
//             images
//         }
// }
// }

// // DISPLAY IMAGES NOT WORKING~~~~~~~~~~~~~~~~~~~~~~


// export default CloudImage
// UPLOAD IMAGE METHOD 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_IMAGE } from '../../utils/mutations'




// const EncodeBase64 = ({ productId }) => {
// //ADD IMAGE SECTION~~~~~~~
// // const [image, setImage] = useState('')
// // const [addImage, { error }] = useMutation(ADD_IMAGE);

// //BASE64 ENCODING SECTION~~~~~~~
// const [selectedFile, setSelectedFile] = useState([]);
// const [fileBase64String, setFileBase64String] = useState("")
// const [baseImage, setBaseImage] = useState("")


// const onFileChange = (e) => {
//     setSelectedFile(e.target.files);
//     // console.log(e.target.files)
//     // console.log(e.target.files[0]);
//     // console.log(e.target.files[0].name);
//     // console.log(e.target.files[0].size);
//     // console.log(e.target.files[0].type);
// };


// const encodeFileBase64 = (file) => {
//     const reader = new FileReader();
//     if(file) {
//         reader.readAsDataURL(file);
//         reader.onload = () => {
//             const Image64 = reader.result
//             setFileBase64String(Image64)
//             setBaseImage(Image64)
//             //SET SCHEMA IMAGE
//             // setImage(Image64)
//         };
//         reader.onerror = (error) => {
//             console.log('error', error)
//         }
//     }
// };
// encodeFileBase64(selectedFile[0])

// // const handleImageFormSubmit = async (event) => {
// //     event.preventDefault();
    
    
// //     try {
// //         // const { data } = await addImage({
// //         //     variables: {
// //         //         productId, image
// //         //     }
// //         // });

// //         // console.log('image schema data: ', data)
// //         // //clear form value
// //     } catch (e) {
// //         console.error(e)
// //     }
// // }


//   return (
//     <main>
//     <div>
//     {/* onSubmit={handleImageFormSubmit} */}
//         <form >
//         <input type='file' id='input' onChange={onFileChange} />
//         {/* upload image preview:  */}
//         <img src={baseImage} height="200px" />
//         <button type='submit'>Upload!</button>
//         {/* <img src={image} height="200px"></img> */}
//         </form>
//         {/* {error && <div>Add Image failed</div>} */}
//     </div>
//     </main>
// );
// };

// export default EncodeBase64;