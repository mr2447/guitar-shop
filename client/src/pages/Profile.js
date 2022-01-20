import React from 'react';
import { useParams } from 'react-router-dom';

import ProductList from '../components/ProductList';
import { QUERY_USER} from '../utils/queries';
// QUERY_ME 
import Auth from '../utils/auth';
import { Redirect, userParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client'
import ImageUpload from '../components/ImageUpload';
// import ThoughtForm from '../components/ThoughtForm';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userParam }
  });

  const user = data?.me || data?.user || {};

  //redirect to personal profile page if username is the logged-in user's
  if(Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />
  }


  if (loading) {
    return <div>Loading...</div>
  }
  if(!user?.username) {
    return (
      <section className='profile_sec'> 
      
       <div className='upload_img'>
         <img 
         src={`${process.env.PUBLIC_URL}/img/about_img3.jpeg`}
         alt='Cover'/>
       </div>
          
         <ImageUpload/>
         </section>
       
      
    )
  }

  
  
}

export default Profile;
