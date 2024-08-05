'use client';

import "regenerator-runtime/runtime";
import Image from "next/image";
import TextArea from "@/components/inputs/TextArea"
import { ChangeEvent, useState } from "react";
import SpeechRecognitionComponent from "@/components/speechRecognition/SpeechRecognitionComponent"
import { IconVolume } from "@tabler/icons-react";
import FileUpload from "@/components/inputs/FileUpload"
import {rtfToText} from "@/utils/rtfToText"

export default function Home() {

  const [sourceText, setSourceText] = useState<string>("")

  const handlePlayback = (text:string) => {

    const utterance = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(utterance)
  }

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        const rtfContent = reader.result as string
        const text = rtfToText(rtfContent)
        setSourceText(text)
      }
      reader.readAsText(file)
    }
  }

  return (
    <div>
      <div className="h-[50rem] w-full bg-black  bg-dot-white/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative overflow-hidden h-screen">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 py-10 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl font-bold text-neutral-200">LeRoi<span className="text-[#fdab70]">Translates</span></h1>
              <p className="mt-3 text-neutral-400"> LeRoiTranslate: Bridging Voices, connecting Worlds</p>
              <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
                <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                  <div className="relative z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20">
                    <TextArea
                    id="source-language" value={sourceText} onChange={(e:ChangeEvent<HTMLTextAreaElement>) => (setSourceText(e.target.value))} placeholder={"Source Language"} />
                    <div className="flex flex-row justify-between w-full">
                      <span className="cursor-pointer flex space-x-2 flex-row">
                        <SpeechRecognitionComponent setSourceText={setSourceText} />
                        <IconVolume size={22} className='text-gray-400' onClick={() => handlePlayback(sourceText)} />
                        {/* {File upload component} */}
                        <FileUpload handleFileUpload={handleFileUpload} />
                      </span>
                      <span className="text-sm pr-4">
                        {sourceText.length} / 2000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
