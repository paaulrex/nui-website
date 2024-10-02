"use client"

import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { child, onValue, push, ref, remove, set  } from "firebase/database";
import { getDocs } from "firebase/firestore";
import db from "./firebaseConfig.js";
import Link from "next/link";

import Image from "next/image";
import animePic from "@/components/images/list-anime.png";
import tvPic from "@/components/images/list-tv.png";
import moviePic from "@/components/images/list-movies.png";
import vGamesPics from "@/components/images/list-vg.png";
import { useEffect, useState } from "react";
import { rm } from "fs";

export default function TodoListPage() {
  // Todo List (Adding/Removing/Etc) code:
  const [animeName, setAnimeName] = useState("");
  const [animeList, setAnimeList] = useState({});

  const [tvName, setTvName] = useState("");
  const [tvShowList, setTvShowList] = useState({});
  
  const [movieName, setMovieName] = useState("");
  const [movieList, setMovieList] = useState({});

  const [vgName, setVgName] = useState("");
  const [vgList, setVgList] = useState({});

  // Add Item into list
  const addAnime = async () => {
    try {
      if (animeName.length > 0) {
      const animeRef = ref(db, "anime")
      const newAnimeData = push(animeRef)
      await set(newAnimeData, {
        anime_name: animeName
      })} else {
        alert("You've entered nothing, try again!")
      }
  } catch (error) {
      console.error("Firebase Error", error)
    }
  };

  const addTv = async () => {
    try {
      if (tvName.length > 0) {
      const tvRef = ref(db, "tv-show")
      const newTvData = push(tvRef)
      await set(newTvData, {
        tvshow_name: tvName
      })} else {
        alert("You've entered nothing, try again!")
      }
    } catch (error) {
      console.error("Firebase Error", error)
    }
  };

  const addMovie = async () => {
    try {
      if (movieName.length > 0) {
      const movieRef = ref(db, "movies")
      const newMovieData = push(movieRef)
      await set(newMovieData, {
        movie_name: movieName
      })} else {
        alert("You've entered nothing, try again!")
      }
    } catch (error) {
      console.error("Firebase Error", error)
    }
  }
  
  const addVg = async () => {
    try {
      if (vgName.length > 0) {
      const vgRef = ref(db, "video-games")
      const newVgData = push(vgRef)
      await set(newVgData, {
        videogame_name: vgName
      })} else {
        alert("You've entered nothing, try again!")
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
  }, []);

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
  }, []);

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
  }, []);

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
  }, []);

  // List items for example connected to Firebase DB
  const list =[
    {
        title: "Anime",
        img: animePic,
        toggleItem: 1,
    },
    {
        title: "TV Shows",
        img: tvPic,
        toggleItem: 2,
    },
    {
        title: "Movies",
        img: moviePic,
        toggleItem: 3,
    },
    {
        title: "Video Games",
        img: vGamesPics,
        toggleItem: 4,
    },
  ];

  // Hide/View things
  const [conZero, setConZero] = useState(true);
  const [conOne, setConOne] = useState(false);
  const [conTwo, setConTwo] = useState(false);
  const [conThree, setConThree] = useState(false);
  const [conFour, setConFour] = useState(false);

  const setCon = (id: number) => {
    setConOne(id === 1);
    setConTwo(id === 2);
    setConThree(id === 3);
    setConFour(id === 4);
  }

  const contentZero = (
    <div className="gap-5 grid grid-cols-2 sm:grid-cols-2 p-5">
      {list.map((item, index) => (
        <Card key={index} isPressable onPress={() => {
          setCon(item.toggleItem);
          // @ts-ignore 
          setConZero();}}>
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
      ))}
    </div>
  )

  const contentOne = (
    <div className="m-10">
      <Card className="gap-1">
        <CardHeader className="justify-center">
          <Button
            color="default"
            variant="ghost"
            radius="lg"
            size="sm"
            onPress={() => {setConZero(true); setConOne(false)}}>
            Back to List
          </Button>
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
            value={animeName}
            onClear={() => setAnimeName("")}
          />
        </CardBody>
        <CardFooter className="justify-center">
          <Button 
            className="w-full"
            onPress={() => addAnime()}
          >
            Add to List</Button>
        </CardFooter>
      </Card>
      <div className="flex w-[400px] flex-wrap justify-center gap-2 p-5">
        {Object.keys(animeList).map((item, index) => (
          <Button 
            // Below is clearing items after doubleclick
            onDoubleClick={() => remove(ref(db, "anime/"+item))}
            key={index}
            variant="faded"
            className="flex-grow">
            { // @ts-ignore
            animeList[item]?.anime_name}
          </Button>
        ))}
      </div>
    </div>
  )

  const contentTwo = (
    <div className="m-10">
      <Card className="gap-1">
        <CardHeader className="justify-center">
          <Button
            color="default"
            variant="ghost"
            radius="lg"
            size="sm"
            onPress={() => {setConZero(true); setConTwo(false)}}>
            Back to List
          </Button>
        </CardHeader>
        <CardBody className="gap-5 justify-center items-center">
          <Image 
            width={100}
            height={100}
            alt={list[1].title}
            src={list[1].img}
            className="rounded-full"
          />
          <Input
            isClearable
            type="text"
            label="TV Shows"
            placeholder="Bones"
            className="w-full"
            onChange={(e) => setTvName(e.target.value)}
            value={tvName}
            onClear={() => setTvName("")}
          />
        </CardBody>
        <CardFooter className="justify-center">
          <Button 
            
            className="w-full"
            onPress={() => addTv()}
          >
            Add to List</Button>
        </CardFooter>
      </Card>
      <div className="flex w-[400px] flex-wrap justify-center gap-2 p-5">
        {Object.keys(tvShowList).map((item) => (
          <Button 
            onDoubleClick={() => remove(ref(db, "tv-show/"+item))}
            key={item}
            variant="faded"
            className="flex-grow">
            { // @ts-ignore
            tvShowList[item]?.tvshow_name}
          </Button>
        ))}
      </div>
    </div>
  )

  const contentThree = (
    <div className="m-10">
      <Card className="gap-1">
        <CardHeader className="justify-center">
          <Button
            color="default"
            variant="ghost"
            radius="lg"
            size="sm"
            onPress={() => {setConZero(true); setConThree(false)}}>
            Back to List
          </Button>
        </CardHeader>
        <CardBody className="gap-5 justify-center items-center">
          <Image 
            width={100}
            height={100}
            alt={list[2].title}
            src={list[2].img}
            className="rounded-full"
          />
          <Input
            isClearable
            type="text"
            label="Anime"
            placeholder="Inception"
            className="w-full"
            onChange={(e) => setMovieName(e.target.value)}
            value={movieName}
            onClear={() => setMovieName("")}
          />
        </CardBody>
        <CardFooter className="justify-center">
          <Button 
            
            className="w-full"
            onPress={() => addMovie()}
          >
            Add to List</Button>
        </CardFooter>
      </Card>
      <div className="flex w-[400px] flex-wrap justify-center gap-2 p-5">
        {Object.keys(movieList).map((item) => (
          <Button 
            onDoubleClick={() => remove(ref(db, "movies/"+item))}
            key={item}
            variant="faded"
            className="flex-grow">
            { // @ts-ignore
            movieList[item]?.movie_name}
          </Button>
        ))}
      </div>
    </div>
  )

  const contentFour = (
    <div className="m-10">
      <Card className="gap-1">
        <CardHeader className="justify-center">
          <Button
            color="default"
            variant="ghost"
            radius="lg"
            size="sm"
            onPress={() => {setConZero(true); setConFour(false)}}>
            Back to List
          </Button>
        </CardHeader>
        <CardBody className="gap-5 justify-center items-center">
          <Image 
            width={100}
            height={100}
            alt={list[3].title}
            src={list[3].img}
            className="rounded-full"
          />
          <Input
            isClearable
            type="text"
            label="TV Shows"
            placeholder="Call of Duty"
            className="w-full"
            onChange={(e) => setVgName(e.target.value)}
            value={vgName}
            onClear={() => setVgName("")}
          />
        </CardBody>
        <CardFooter className="justify-center">
          <Button 
            
            className="w-full"
            onPress={() => addVg()}
          >
            Add to List</Button>
        </CardFooter>
      </Card>
      <div className="flex w-[400px] flex-wrap justify-center gap-2 p-5">
        {Object.keys(vgList).map((item) => (
          <Button 
            onDoubleClick={() => remove(ref(db, "video-games/"+item))}
            key={item}
            variant="faded"
            className="flex-grow"> 
            { // @ts-ignore
            vgList[item]?.videogame_name}
          </Button>
        ))}
      </div>
    </div>
  )

  return (
  <div className="roboto  ">
    <div className="jbmono">
      <p className="italic text-sm">Not your average</p>
      <h1 className={title()}>{`"To-do" List`}</h1>
    </div>
    
    {conZero && <div>{contentZero}</div>}

    {/* Template for list */}
    {conOne && <div>{contentOne}</div>}
    {conTwo && <div>{contentTwo}</div>}
    {conThree && <div>{contentThree}</div>}
    {conFour && <div>{contentFour}</div>}

  </div>
  );
}