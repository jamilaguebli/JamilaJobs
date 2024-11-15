"use client"

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const ButtonModal = () => {
  const [file, setFile] = useState<File | null>(null); 
  const [message, setMessage] = useState<string>(""); 

  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile); 
  };

 
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

   
    if (!file) {
      setMessage("Please upload a file.");
      return;
    }

    setMessage("File uploaded successfully!");
    
    
  };

  return (
    <div className="relative flex justify-center items-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-400 hover:to-purple-500">
            Apply
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[450px] rounded-lg shadow-xl bg-white p-6 transform transition-all">
          <DialogHeader className="pb-4 border-b">
            <DialogTitle className="text-2xl font-semibold text-gray-800">Apply</DialogTitle>
            <DialogDescription className="mt-2 text-gray-600">
              Make an application to the job
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div className="grid grid-cols-12 gap-4 items-center">
              <Label htmlFor="name" className="text-right col-span-4 text-gray-700">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-8 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
            <div className="grid grid-cols-12 gap-4 items-center">
              <Label htmlFor="email" className="text-right col-span-4 text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                defaultValue="peduarte@example.com"
                className="col-span-8 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

         
            <div className="grid grid-cols-12 gap-4 items-center">
              <Label htmlFor="cv" className="text-right col-span-4 text-gray-700">
                Upload your CV
              </Label>
              <input
                type="file"
                id="cv"
                onChange={handleFileChange} 
                className="col-span-8 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                accept=".pdf,.docx,.txt"
              />
            </div>

            <DialogFooter className="flex justify-end mt-4">
              <Button type="submit" className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-500 focus:outline-none">
                Send
              </Button>
            </DialogFooter>
          </form>

       
          {message && (
            <div className="mt-6 text-center text-green-500 font-medium">
              {message}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ButtonModal;
