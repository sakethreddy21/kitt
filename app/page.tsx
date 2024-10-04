
'use client'

import LoginPage from '@/components/login/page'
import { useSession } from 'next-auth/react'
import { signIn, signOut } from 'next-auth/react'


import { useRouter } from 'next/navigation'


export default  function Home() {
  const {data:session, status} = useSession()
  
  if(session){
  return (
    <div><button onClick={() => signOut()}>Sign Out</button></div>
  )
  }
  else {
  return (
    <div>
     <LoginPage/>
    </div>
  )}
}