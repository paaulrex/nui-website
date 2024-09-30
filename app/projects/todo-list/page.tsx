"use client"

import { title } from "@/components/primitives"
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { onValue, push, ref, remove, set  } from "firebase/database";
import db from "./firebaseConfig.js";
import Link from "next/link";

import Image from "next/image";
import animePic from "@/components/images/list-anime.png"
import tvPic from "@/components/images/list-tv.png"
import moviePic from "@/components/images/list-movies.png"
import vGamesPics from "@/components/images/list-vg.png"
import { useEffect, useState } from "react";
import React from "react";

export default function TodoListPage() {
  const [animeName, setAnimeName] = useState("")
  const [animeList, setAnimeList] = useState({})

  const [tvName, setTvName] = useState("")
  const [tvShowList, setTvShowList] = useState({})
  
  const [movieName, setMovieName] = useState("")
  const [movieList, setMovieList] = useState({})

  const [vgName, setVgName] = useState("")
  const [vgList, setVgList] = useState({})

  const addToList = async () => {
    try {
      if (animeName) {
        const animeRef = ref(db, "anime")
        const newAnimeData = push(animeRef)
        await set(newAnimeData, {
          anime_name: animeName
        })
      }

      if (tvName) {
        const tvRef = ref(db, "tv-shows")
        const newTvData = push(tvRef)
        await set(newTvData, {
          tvshow_name: tvName
        })
      }

      if (movieName) {
        const movieRef = ref(db, "movies")
        const newMovieData = push(movieRef)
        await set(newMovieData, {
          movie_name: movieName
        })
      }

      if (vgName) {
        const vgRef = ref(db, "video-games")
        const newVgData = push(vgRef)
        await set(newVgData, {
          videogame_name: vgName
        })
      }
      

    } catch (error) {
      console.error("Firebase Error", error)
    }
  }
  
  // Get Anime List
  useEffect(() => {
    const getAnimeList = async () => {
      const animeRef = ref(db, "anime")
      onValue(animeRef, (snapshot) => {
        if (!snapshot.exists()) return
        let animeList = snapshot.val()
        setAnimeList(animeList)
      })
    }
    getAnimeList()
  }, [])

  // Get TV Show List
  useEffect(() => {
    const getTvShowList = async () => {
      const tvShowRef = ref(db, "tv-show")
      onValue(tvShowRef, (snapshot) => {
        if (!snapshot.exists()) return
        let tvShowList = snapshot.val()
        setTvShowList(tvShowList)
      })
    }
    getTvShowList()
  }, [])

  // Get Movies List
  useEffect(() => {
    const getMovieList = async () => {
      const movieRef = ref(db, "movies")
      onValue(movieRef, (snapshot) => {
        if (!snapshot.exists()) return
        let movieList = snapshot.val()
        setMovieList(movieList)
      })
    }
    getMovieList()
  }, [])

  // Get Video Games List
  useEffect(() => {
    const getVgList = async () => {
      const vgRef = ref(db, "video-games")
      onValue(vgRef, (snapshot) => {
        if (!snapshot.exists()) return
        let vgList = snapshot.val()
        setVgList(vgList)
      })
    }
    getVgList()
  }, [])

  // const deleteItem = async () => {
  //   try {
  //     if (animeName) {

  //     }
  //   }
  // }

  const list =[
    {
        title: "Anime",
        img: animePic,
    },
    {
        title: "TV Shows",
        img: tvPic
    },
    {
        title: "Movies",
        img: moviePic,
    },
    {
        title: "Video Games",
        img: vGamesPics,
    },
  ]

  return (
  <div className="roboto  ">
    <div className="jbmono">
      <p className="italic text-sm">Not your average</p>
      <h1 className={title()}>To-do List</h1>
    </div>

    <div className="gap-5 grid grid-cols-2 sm:grid-cols-2 p-5">
      {list.map((item, index) => (
        <div key={index}>
          <Card isPressable>
            <CardBody className="overflow-visible">
              <Image
                width={100}
                height={100}
                alt={item.title}
                className="w-full rounded-full"
                src={item.img}
                />
            </CardBody>
            <CardFooter className="text-small justify-center">
              <p className="text-default-500">{item.title}</p>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>

    {/* Template for list */}
    <div>
      <Card className="gap-1">
        <CardHeader className="justify-center">
          <Link href="./todo-list">
            <Button
              color="default"
              variant="ghost"
              radius="lg"
              size="sm">
              Back to List
            </Button>
          </Link>
        </CardHeader>
        <CardBody className="gap-5 justify-center items-center">
          <Image 
            width={100}
            height={100}
            alt={list[0].title}
            src={list[0].img}
            className="rounded-full"
          />
          <Input
            isClearable
            type="text"
            label="Anime"
            placeholder="Solo Leveling"
            className="w-full"
            onChange={(e) => setAnimeName(e.target.value)}
          />
        </CardBody>
        <CardFooter className="justify-center">
          <Button 
            
            className="w-full"
            onPress={() => addToList()}
          >
            Add to List</Button>
        </CardFooter>
      </Card>
      
      <div className="w-[400px] flex flex-wrap justify-center gap-2 p-5">
        {Object.keys(animeList).map((item) => (
            <Button 
              variant="faded"
              className="flex-grow">
              { // @ts-ignore
              animeList[item]?.anime_name}
            </Button>
        ))}
      </div>

    </div>
  </div>
  );
}