"use client";
import { useState } from "react";
import SearchBar from './components/searchBar/SearchBar'
import ImagesGrid from './components/imagesGrid/ImagesGrid'
import { Image } from '../types/image'


export default function imgSearch() {
  const [images, setImages] = useState<Image[] | null>(null)

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <h1 className="glitch pt-8">SEARCH IMAGES</h1>
      <header className=" max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex pt-8">
        <SearchBar setImages={setImages} />
      </header>
      <main>
        <ImagesGrid images={images} />
      </main>
    </div>
  )
}

