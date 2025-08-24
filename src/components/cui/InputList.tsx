import React, { useState } from 'react'
import { Label } from "@/components/ui/label"
import { CircleCheck, CircleMinus, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";

const InputList = ({ title, list, setList }: { title: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>> }) => {

  // const [list, setList] = useState<string[]>([]);
  const [listInput, setListInput] = useState<string>('');


  return (
    <>
      <div>
        <Label htmlFor="terms" className="text-gray-800 text-lg pb-1.5">{title}</Label>
        <div className="flex items-center gap-2">
          <Input id="terms" variant="borderblack" placeholder="" value={listInput} onChange={e => setListInput(e.target.value)} />
          <span
            className="border border-gray-400 cursor-pointer p-1"
            onClick={() => {
              if (listInput.trim()) {
                // console.log(listInput);
                setList([...list as string[], listInput.trim()]);
                setListInput('');
              }
            }}
          >
            <Plus />
          </span>
        </div>
      </div>

      {/* Core Skills Output*/}
      {list.length > 0 && <ul className="grid gap-2 p-4 border  mb-4">
        {list?.map((item, idx) => (
          <li key={idx} className="flex items-center justify-between gap-4 py-2">
            <p className="flex items-center gap-2">
              <CircleCheck className="size-5 min-w-5 text-green-500" />
              {item}
            </p>
            <span
              onClick={() => {
                const updatedOffers = list.filter((_, index) => index !== idx);
                setList(updatedOffers);
              }}
              className="cursor-pointer"
            >
              <CircleMinus className="text-stone-500" />
            </span>
          </li>
        ))}
      </ul>}
    </>
  )
}

export default InputList