"use client"
import { useState } from "react";
import { BiCopy, BiSolidCopy } from "react-icons/bi";

type PromptOutputProps = {
  output: string;
};

export default function PromptOutput({
  output,
}: PromptOutputProps) {
  const [copy,setCopy] = useState(false)

  const copied = async ()=>{
    try {
      await navigator.clipboard.writeText(output);
      setCopy(true);
      setTimeout(()=>{
        setCopy(false)
      },5000)
    } catch (err) {
      setCopy(false);
      console.log(err)
    }
  }
  if (!output) return null;



  return (
    <div className="rounded-lg border bg-muted/40 p-4 flex justify-between">
      <p className="text-sm leading-relaxed">
        {output}
      </p>
    <span onClick={copied}  className="text-2xl ml-2">
      {
      !copy ?(<BiCopy />) :
      (<BiSolidCopy/>)
    }
    </span>
    </div>
  );
}
