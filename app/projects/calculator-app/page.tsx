"use client"

import { title, subtitle } from "@/components/primitives";
import { use, useState } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

export default function CalculatorApp() {
	// useState t/f for opening/closing divs
	
	// list items (buttons)
	const calcList = [
		{
			title: "BMI",
			toggleItem: 1,
		},
		{
			title: "GPA",
			toggleItem: 2,
		},
		{
			title: "Service Tips",
			toggleItem: 3,
		},
		{
			title: "Weight",
			toggleItem: 4,
		},
		{
			title: "F° to C°",
			toggleItem: 5,
		},
		{
			title: "Foot to Inch",
			toggleItem: 6,
		},
		{
			title: "VA Disability Rating",
			toggleItem: 7,
		},
	]

	// Hide/View useState
	const [defApp, setDefApp] = useState(true);
	const [bodyApp, setBodyApp] = useState(false);
	const [gradeApp, setGradeApp] = useState(false);
	const [tipsApp, setTipsApp] = useState(false);
	const [weightApp, setWeightApp] = useState(false);
	const [tempApp, setTempApp] = useState(false);
	const [feetApp, setFeetApp] = useState(false);
	const [vetApp, setVetApp] = useState(false);

	// Hide/View thing set value
	const setThing = (id: number) => {
		setBodyApp(id === 1);
		setGradeApp(id === 2);
		setTipsApp(id === 3);
		setWeightApp(id === 4);
		setTempApp(id === 5);
		setFeetApp(id === 6);
		setVetApp(id === 7);
	}

	const defaultApp = (
		<div className="gap-5 grid grid-cols-3 p-5">
			{calcList.map((item, index) => (
				<Card key={index} isPressable onPress={() => {
					setThing(item.toggleItem);
					// @ts-ignore
					setDefApp();}}>
					<CardBody className="text-center">
						<p className="text-default-500">{item.title}</p>
					</CardBody>
				</Card>
			))}
		</div>
	)


	return (
		<div className="roboto">
			<div>
				<span className={`${title()} jbmono`}>All-in-One </span>
				<span className={`${title({ color: "cyan" })} jbmono`}>Calculator</span>
			</div>

			{defApp && <div>{defaultApp}</div>}

		</div>
    )
}