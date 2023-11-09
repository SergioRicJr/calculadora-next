'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@/components/Button'
import { useState } from 'react';

export default function Calculadora() {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e: any) {
    var input = e.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }

  function operatorHandler(e: any) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "/") {
      setNum(oldnum / num);
    } else if (operator === "X") {
      setNum(oldnum * num);
    } else if (operator === "-") {
      setNum(oldnum - num);
    } else if (operator === "+") {
      setNum(oldnum + num);
    }
  }

  return (
    <div className='w-96 h-[550px] flex-col justify-center'>
      <h1 className='text-center text-white h-[100px] text-5xl'>Calculadora</h1>
      <div className='h-[450px]'>
        <div className='overflow-hidden w-full h-[100px] bg-blue-900 flex items-center justify-end p-4 text-6xl text-white rounded-t-md'>
          {num}
        </div>
        <div className='w-full text-gray-600 h-[350px] grid grid-cols-4 grid-rows-5 text-3xl'>
          <Button onClick={clear} colSpan="col-span-3" simbol='AC' bgColor='bg-white-btn'></Button>
          <Button onClick={operatorHandler}  colSpan="col-span-1" simbol='/' bgColor='bg-orange-btn'></Button>
          <Button onClick={inputNum} colSpan="col-span-1" simbol={7} bgColor='bg-white-btn'></Button>
          <Button onClick={inputNum} colSpan="col-span-1" simbol={8} bgColor='bg-white-btn'></Button>
          <Button onClick={inputNum} colSpan="col-span-1" simbol={9} bgColor='bg-white-btn'></Button>
          <Button onClick={operatorHandler} colSpan="col-span-1" simbol='X' bgColor='bg-orange-btn'></Button>
          <Button onClick={inputNum} colSpan="col-span-1" simbol={4} bgColor='bg-white-btn'></Button>
          <Button onClick={inputNum} colSpan="col-span-1" simbol={5} bgColor='bg-white-btn'></Button>
          <Button onClick={inputNum} colSpan="col-span-1" simbol={6} bgColor='bg-white-btn'></Button>
          <Button onClick={operatorHandler} colSpan="col-span-1" simbol='-' bgColor='bg-orange-btn'></Button>
          <Button onClick={inputNum} colSpan="col-span-1" simbol={1} bgColor='bg-white-btn'></Button>
          <Button onClick={inputNum} colSpan="col-span-1" simbol={2} bgColor='bg-white-btn'></Button>
          <Button onClick={inputNum} colSpan="col-span-1" simbol={3} bgColor='bg-white-btn'></Button>
          <Button onClick={operatorHandler} colSpan="col-span-1" simbol='+' bgColor='bg-orange-btn'></Button>
          <Button onClick={inputNum} colSpan="col-span-2" simbol={0} bgColor='bg-white-btn' rest='rounded-bl-md'></Button>
          <Button onClick={inputNum} colSpan="col-span-1" simbol='.' bgColor='bg-white-btn'></Button>
          <Button onClick={calculate} colSpan="col-span-1" simbol='=' bgColor='bg-orange-btn' rest='rounded-br-md'></Button>
        </div>
      </div>
    </div>
  )
}
