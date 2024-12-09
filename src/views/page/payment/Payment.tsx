import PostAuthHeader from '@/components/postAuthHeader/PostAuthHeader'
import React from 'react'
import { useNavigate } from 'react-router-dom';


const Payment = () => {
    const navigate = useNavigate();

    setTimeout(() => {
            navigate("/credits")
    }, 2000);
  return (
    <div>
            <PostAuthHeader heading='Payment Gateway '/>
    </div>
  )
}

export default Payment