'use client'

import { UploadButton } from '~/utils/uploadthing'
import { useRouter } from 'next/navigation'
import { useUploadThing } from "~/utils/uploadthing";
import { toast } from "sonner"
import { useEffect, useState } from 'react';

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);

    console.log("uploaded files", result);
    // TODO: persist result in state maybe?
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};

function UploadSVG(){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
</svg>

  )
}
function LoadingSpinnerSVG() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
    >
      <path
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
      />
      <path
        d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
        className="spinner_ajPY"
      />
    </svg>
  );
}


const CorrectAnswerMarker = () => {
  

  return (
    <svg
    style={{display: 'inline-block'}}
    width="24"
    height="24"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="white"
    strokeWidth="5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <style>
      {`
        @keyframes draw {
          from {
            stroke-dasharray: 50;
            stroke-dashoffset: 50;
          }
          to {
            stroke-dasharray: 50;
            stroke-dashoffset: 0;
          }
        }
        .checkmark {
          animation: draw 0.5s ease-out 0.2s forwards;
        }
      `}
    </style>
    <polyline
      className="checkmark"
      points="10,25 20,35 40,10"
      strokeDasharray="50"
      strokeDashoffset="50"
    />
  </svg>
  );
};


export default function SimpleUploadButton(){
  const {inputProps} = useUploadThingInputProps("imageUploader",{
    onUploadError(){
      toast.dismiss("upload-begin")
      toast('Upload error')
      router.refresh();
    },
    onUploadBegin(){
      toast(<div className="flex items-center gap-2 text-white">
        <LoadingSpinnerSVG /> <span className="text-lg">Uploading...</span>
      </div>, {
        duration: 3000,
        id: "upload-begin"
      })
    },
    onClientUploadComplete(){ 
      toast.dismiss("upload-begin")
      toast(<div className='flex items-center gap-2 text-white'>
          <CorrectAnswerMarker />
        <span className='text-lg'>Upload Complete</span>
      </div>,{
        id: 'upload-complete'
      })
      router.refresh();
    }
  })
  const router = useRouter()
    return(
      <div>
        <label htmlFor='upload-button' className='cursor-pointer'><UploadSVG/></label>
        <input id='upload-button' name='upload-button' type='file' className='sr-only' {...inputProps}/>
      </div>
        // <UploadButton endpoint="imageUploader" onClientUploadComplete={()=>router.refresh()}/>

    )
}

