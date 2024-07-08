"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Link from "next/link";
import Accenture from "../images/accenturelogo.svg";

export function ExCard2() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-black/[0.1] dark:border-white/[0.2] bg-gradient-to-r from-black via-gray-700 to-black dark:bg-gradient-to-r dark:from-black dark:via-gray-700 dark:to-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Infra Transformation Associate
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          March 2021 - April 2023
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Bangalore, India
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={Accenture}
            height="500"
            width="500"
            className="h-60 w-full object-cover  rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as="div"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          <ul className="list-disc list-inside">
            <li>
              Managed databases with SQL, PostgreSQL; improved query times 25%.
            </li>
            <li>
              Implemented Firebase authentication, reducing unauthorized access.
            </li>
            <li>
              Coordinated teams to deploy RESTful APIs, enhancing data exchange.
            </li>
            <li>
              Enhanced user experience with modern design, increasing
              satisfaction.
            </li>
          </ul>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
