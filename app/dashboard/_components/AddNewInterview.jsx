"use client"

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function AddNewInterview() {
  const [openDailog, setOpenDailog] = useState(false);
  return (
    <div>
      <div className="p-10 border rounded-lg bg-secounday hover:scale-105 hover:shadow-md cursor-pointer transition-all" onClick={()=>setOpenDailog(true)}>
        <h2 className=" text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDailog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
              <div className="flex gap-5 justify-end">
                <Button variant="ghost" onClick={()=>setOpenDailog(false)} className="text-black">Cancle</Button>
                <Button className="text-white">Start Interview</Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
