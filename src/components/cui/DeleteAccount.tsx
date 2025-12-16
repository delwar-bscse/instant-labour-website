"use client"
import React from 'react'
import { Button } from '../ui/button'
import { myFetch } from '@/utils/myFetch';
import { toast } from 'sonner';

const DeleteAccount = () => {
  const [password, setPassword] = React.useState('');

  async function onSubmit() {
    if (password.length < 6) {
      toast.error("Please enter your password properly.");
      return;
    }
    toast.loading("Deleting account...", { id: "loading" });

    const res = await myFetch("/auth/change-password", {
      method: "DELETE",
      body: {
        password: password
      },
    })
    // console.log("Delete account res : ", res)
    if (res.success) {
      toast.success(res.message || "Account deleted successfully!", { id: "loading" });
    } else {
      toast.error(res.message || "Failed to delete account.", { id: "loading" });
    }
  }

  return (
    <div className="w-full max-w-100 mx-auto flex text-center justify-center px-4">
      <div className="bg-white customShadow px-4 md:px-8 py-4 md:py-6 w-full rounded-md">
        <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-gray-600 pb-6">Are you sure you want to delete your account</h2>
        <div className='w-60 mx-auto space-y-4'>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className='w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary' placeholder='Enter your password' />
          <Button onClick={onSubmit} variant="redBtn" type="submit" size="llg" className="w-full text-xl">
            Yes
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DeleteAccount