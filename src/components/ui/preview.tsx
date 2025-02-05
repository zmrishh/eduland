"use client"

import React from "react"

const Preview: React.FC = () => {
  return (
    <div className="w-full h-80 bg-white">
      <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-primaryRed">
        <div className="flex flex-row space-x-12 sm:pace-x-16 md:space-x-24 text-sm sm:text-lg md:text-xl">
          <ul>
            <a href="#hero">
              <li className="hover:underline cursor-pointer">Home</li>
            </a>
            <a href="#features">
              <li className="hover:underline cursor-pointer">Features</li>
            </a>
            <a href="#about">
              <li className="hover:underline cursor-pointer">About Us</li>
            </a>
            <a href="#pricing">
              <li className="hover:underline cursor-pointer">Pricing</li>
            </a>
          </ul>
          <ul>
            <a 
              href="https://kenesis.in" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <li className="hover:underline cursor-pointer">Kenesis</li>
            </a>
            <a 
              href="https://www.instagram.com/kenesislabs" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <li className="hover:underline cursor-pointer">Instagram</li>
            </a>
            <a 
              href="mailto:contact@kenesis.in"
            >
              <li className="hover:underline cursor-pointer">Contact Us</li>
            </a>
          </ul>
        </div>
        <h2 className="absolute bottom-0 left-0 translate-y-1/3 sm:text-[192px] text-[80px] text-primaryRed font-sans font-bold">
          Learnado
        </h2>
      </div>
    </div>
  )
}

export default Preview
