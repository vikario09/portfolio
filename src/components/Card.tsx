"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function Card(props) {
    return (
        <CardContainer className="inter-var">
            <CardBody className="rounded-3xl ring-1 bg-white shadow-xl ring-primary/5 group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] w-full h-full p-6 border">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-primary dark:text-white"
                >
                    {props.title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-primary text-sm max-w-sm mt-2 dark:text-neutral-300"
                >

                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4 ">
                    <a href={props.link} target="_blank">
                        <img
                            src={props.photo}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </a>
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="cursor-pointer px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:font-semibold"
                    >
                        <a href={props.link} target="_blank">Demo →</a>
                    </CardItem>
                    <a href={props.github}>
                        <CardItem
                            translateZ={20}
                            as="button"
                            className="cursor-pointer px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-xs font-bold hover:text-primary text-white duration-200 dark:hover:bg-neutral-700 hover:bg-primary/10 dark:hover:text-white"
                        >
                            <a href={props.github} target="_blank" className="">
                                GitHub
                            </a>
                        </CardItem>
                    </a>
                </div>
            </CardBody>
        </CardContainer >
    );
}
