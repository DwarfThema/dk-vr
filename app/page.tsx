"use client";

import React, { useState } from "react";
import Collections from "./components/collections";
import Categories from "./components/categories";
import SliderBanner from "./components/sliderBanner";

export default function Home() {
  const slidesProps = [
    {
      title: "Slide 1",
      description: "Description 1",
      videoUrl: "123",
      imgUrl: "bannerImgA.png",
    },
    {
      title: "Slide 2",
      description: "Description 2",
      videoUrl: "123",
      imgUrl: "bannerImgB.png",
    },
    {
      title: "Slide 3",
      description: "Description 2",
      videoUrl: "123",
      imgUrl: "bannerImgC.png",
    },
    {
      title: "Slide 4",
      description: "Description 2",
      videoUrl: "123",
      imgUrl: "bannerImgA.png",
    },
    {
      title: "Slide 5",
      description: "Description 2",
      videoUrl: "123",
      imgUrl: "bannerImgB.png",
    },
    {
      title: "Slide 6",
      description: "Description 2",
      videoUrl: "123",
      imgUrl: "bannerImgC.png",
    },
    {
      title: "Slide 7",
      description: "Description 2",
      videoUrl: "123",
      imgUrl: "bannerImgA.png",
    },
  ];

  const popularProps = [
    {
      author: "123",
      imageUrl: "/exImg.png",
      bookMarkCound: 123,
    },
    {
      author: "123",
      imageUrl: "/exImg.png",
      bookMarkCound: 123,
    },
    {
      author: "123",
      imageUrl: "/exImg.png",
      bookMarkCound: 123,
    },
    {
      author: "123",
      imageUrl: "/exImg.png",
      bookMarkCound: 123,
    },
    {
      author: "123",
      imageUrl: "/exImg.png",
      bookMarkCound: 123,
    },
    {
      author: "123",
      imageUrl: "/exImg.png",
      bookMarkCound: 123,
    },
    {
      author: "123",
      imageUrl: "/exImg.png",
      bookMarkCound: 123,
    },
    {
      author: "123",
      imageUrl: "/exImg.png",
      bookMarkCound: 123,
    },
  ];
  const ExploreItems = [
    { name: "123", imageUrl: "/exImg.png" },
    { name: "123", imageUrl: "/exImg.png" },
    { name: "123", imageUrl: "/exImg.png" },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <header className="h-[64px] fixed w-full flex justify-between items-center px-7 z-20 bg-white">
        <div className="flex">
          <button className="flex justify-center items-center">
            <div className="bg-stone-800 w-[32px] h-[32px] rounded-full text-white items-center justify-center p-1">
              A
            </div>
            <div className="ml-2">Logo</div>
          </button>
          <div className="flex ml-6 text-stone-500">
            <button className="text-black">Home</button>
            <button className="mx-5">Collcetion</button>
            <button>Create</button>
          </div>
        </div>
        <button className="flex justify-center items-center">
          <div className="mr-2">My Library</div>
          <div className="bg-stone-500 w-[32px] h-[32px] rounded-full text-white p-1">
            A
          </div>
        </button>
      </header>
      <SliderBanner sliderItem={slidesProps} />

      <Collections title="Popular Collection" items={popularProps} />
      <Collections title="Recommend Collection" items={popularProps} />
      <Categories title="Explore" items={ExploreItems} />
      <footer className="bg-stone-50 w-full h-[170px] mt-20 flex flex-col py-3">
        <div className="px-7 flex justify-between">
          <div className="flex flex-col">
            <span className="text-[14px] font-semibold">company</span>
            <span className="text-[12px]">Description</span>
          </div>
          <div className="flex">
            <div className="flex flex-col mr-10">
              <span className="text-[14px] font-semibold">Home</span>
              <div className="text-[12px] flex flex-col">
                <span>Home</span>
                <span>Home</span>
                <span>Home</span>
              </div>
            </div>

            <div className="flex flex-col mr-10">
              <span className="text-[14px] font-semibold">Collection</span>
              <div className="text-[12px] flex flex-col">
                <span>Home</span>
                <span>Home</span>
                <span>Home</span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-[14px] font-semibold">Create</span>
              <div className="text-[12px] flex flex-col">
                <span>Home</span>
                <span>Home</span>
                <span>Home</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-7 flex  justify-between mt-8 text-[12px]">
          <span>©2024 Network Inc</span>
          <div>
            <span className="mr-8">Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
