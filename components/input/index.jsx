"use client";
import {inputContainer, inputelement} from './input.module.css';
import { MagnifyingGlass } from '@phosphor-icons/react';
export default function Input ({placeholder, type}){
  return(
    <div className={inputContainer}>
    <input className={inputelement} type="text" placeholder={placeholder} />
    <MagnifyingGlass  size={24} />
    </div>
  )
}