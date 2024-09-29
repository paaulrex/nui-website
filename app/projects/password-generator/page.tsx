'use client';
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import "@/styles/pg.css"
import generatePassword from "./pg.js"
import { Slider } from "@nextui-org/slider"
import { Checkbox } from "@nextui-org/checkbox";
import { Divider } from "@nextui-org/divider"
import { useState } from "react";
import { Snippet } from "@nextui-org/snippet";

export default function PasswordGeneratorPage() {
  const [value, setValue] = useState(18);
  const [isNumberChecked, numberSelected] = useState(false);
  const [isSymbolChecked, symbolSelected] = useState(false);
  const [passOne, setPassOne] = useState("")
  const [passTwo, setPassTwo] = useState("")
  return (
    <div className="roboto">
      <div className="title-container flex flex-col p-5 text-left">
        <p className="pixelify m-0 p-0 text-5xl font-bold">Just another</p>
        <p className="pixelify m-0 p-0 text-4xl font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-red-600 bg-clip-text text-transparent">password generator</p>
      </div>
      
      <div className="flex flex-row flex-wrap items-center justify-center">
        <Button
          className="roboto"
          color="primary"
          onPress={() => {const password = generatePassword(value, isNumberChecked, isSymbolChecked)
              setPassOne(password[0])
              setPassTwo(password[1])
          }}>
            Generate Password
        </Button>
      </div>

      <div className="p-5">
          <Slider
            label="Password Length"
            step={1}
            maxValue={24}
            minValue={8}
            defaultValue={18}
            // @ts-ignore
            onChangeEnd={setValue}
            />
      </div>

      <div className="flex flex-row justify-center gap-2.5 items-center m-0 p-0">
        <p>Exclude:</p>
        <Checkbox className="no-numbers"
          isSelected={isNumberChecked}
          onValueChange={numberSelected}
        >Numbers</Checkbox>
        <Checkbox className="no-symbols"
          isSelected={isSymbolChecked}
          onValueChange={symbolSelected}
        >Symbols</Checkbox>
      </div>

      <div>
        <Divider className="my-4" />
      </div>

      <div className="flex flex-row justify-center gap-4 items-center m-0 p-0">
        <Snippet color="default" symbol>{passOne}</Snippet>
        <Snippet color="default" symbol>{passTwo}</Snippet>
      </div>
    </div>
  );
}