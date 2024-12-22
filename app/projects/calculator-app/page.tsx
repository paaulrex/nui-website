"use client"

import { title, subtitle } from "@/components/primitives";
import { useState } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Form } from "@nextui-org/form"
import { Input } from "@nextui-org/input";
import { Radio, RadioGroup } from "@nextui-org/react";
import { Chip } from "@nextui-org/chip";
import calculate from "./calculator.js";

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
			title: "VA Disability	",
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
		<div className="gap-5 grid grid-cols-1 sm:grid-cols-2 p-5 m-10">
			{calcList.map((item, index) => (
				<Card key={index} isPressable onPress={() => {
					setThing(item.toggleItem);
					// @ts-ignore
					setDefApp();}}>
					<CardBody className="text-center justify-center p-5">
						<p className="text-default-500">{item.title}</p>
					</CardBody>
				</Card>
			))}
		</div>
	)

	const [unitU, setUnitU] = useState(true);
	const [unitMet, setUnitMet] = useState(false);
	const [bodySel, setBodySel] = useState("US");

	// US Calc
	const [uValFt, setUValFt] = useState();
	const [uValIn, setUValIn] = useState();
	const [uValWt, setUValWt] = useState();
	const [uBmiSet, setUBMiSet] = useState(false);
	const [uBmi, setUBmi] = useState();

	// Metric Calc
	const [metCm, setMetCm] = useState();
	const [metWt, setMetWt] = useState();
	const [metBmi, setMetBmi] = useState();
	const [metBmiSet, setMetBmiSet] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
	}

	const bodyUS = (
		<Form
			onSubmit={onSubmit}
		>
			<p className="text-sm flex justify-start">Height</p>
			<div className="flex flex-row w-full gap-3">
				<Input
					endContent={
						<div className="pointer-events-none flex items-center">
							<span className="text-sm">ft</span>
						</div>
					}
					type="number"
					placeholder="5"
					// @ts-ignore
					onChange={(e) => setUValFt(e.target.valueAsNumber)}
				/>
				<Input
					endContent={
						<div className="pointer-events-none flex items-center">
							<span className="text-sm">in</span>
						</div>
					}
					min={0}
					max={11}
					type="number"
					placeholder="5"
					// @ts-ignore
					onChange={(e) => setUValIn(e.target.valueAsNumber)}
				/>
			</div>
			<Input
				endContent={
					<div className="pointer-events-none flex items-center">
						<span className="text-sm">lbs</span>
					</div>
				}
				type="number"
				placeholder="150"
				label="Weight"
				labelPlacement="outside"
				// @ts-ignore
				onChange={(e) => setUValWt(e.target.valueAsNumber)}
			/>
			<div className="flex justify-center gap-3 items-center py-2 m-auto">
				<Button className="px-10"
					color="primary"
					type="submit"
					// @ts-ignore
					onPress={() => {setUBmi(calculate.genBmiU(uValFt, uValIn, uValWt));
						if (uBmi === undefined) {
							setUBMiSet(false)
						} else if (uBmi > 0) {
							setUBMiSet(true)}}}
				>Calculate</Button>
				<Button
					color="danger"
					variant="faded"
					type="reset"
					// @ts-ignore
					onPress={() => {setUBmi(); setUValFt(); setUValIn(); setUValWt(); setUBMiSet(false)}}
				>Clear</Button>
			</div>
			{uBmiSet &&
			<div className="flex flex-col items-center w-full gap-2">
				<p>Your BMI is:</p>
				<Chip className="jbmono text-2xl">{uBmi}</Chip>
			</div>}
		</Form>
	)

	const bodyMet = (
		<Form
			onSubmit={onSubmit}
		>
			<div className="flex flex-row w-full gap-3">
				<Input
					endContent={
						<div className="pointer-events-none flex items-center">
							<span className="text-sm">cm</span>
						</div>
					}
					type="number"
					placeholder="175"
					label="Height"
					labelPlacement="outside"
					// @ts-ignore
					onChange={(e) => setMetCm(e.target.valueAsNumber)}
				/>
			</div>
			<Input
				endContent={
					<div className="pointer-events-none flex items-center">
						<span className="text-sm">kg</span>
					</div>
				}
				type="number"
				placeholder="68" 
				label="Weight"
				labelPlacement="outside"
				// @ts-ignore
				onChange={(e) => setMetWt(e.target.valueAsNumber)}
			/>
			<div className="flex justify-center gap-3 items-center py-2 m-auto">
				<Button className="px-10"
					color="primary"
					type="submit"
					// @ts-ignore
					onPress={() => {setMetBmi(calculate.genBmiMet(metCm, metWt));
						if (metBmi === undefined) {
							setMetBmiSet(false)
						} else if (metBmi > 0) {
							setMetBmiSet(true)
					}}}
				>Calculate</Button>
				<Button
					color="danger"
					variant="faded"
					type="reset"
					// @ts-ignore
					onPress={() => {setMetBmi(); setUValFt(); setUValIn(); setUValWt(); setMetBmiSet(false)}}
				>Clear</Button>
			</div>
			{metBmiSet &&
			<div className="flex flex-col items-center w-full gap-2">
				<p>Your BMI is:</p>
				<Chip className="jbmono text-2xl">{metBmi}</Chip>
			</div>}
		</Form>
	)

	const bodyCalc = (
		<div className="m-10">
			<Card className="gap-1 py-5">
				<CardHeader className="justify-center flex flex-col gap-2">
					<p className="text-4xl jbmono">
						Body <span className="text-cyan-400">Mass</span> Index
					</p>
					<Button
						className="w-fit"
						color="default"
						variant="ghost"
						radius="lg"
						size="md"
						onPress={() => {setDefApp(true); 
							setBodyApp(false); 
							setBodySel("US"); 
							setUnitU(true);
							setUnitMet(false)}}
					>
						Calculator Home
					</Button>
				</CardHeader>
				<CardBody className="gap-1">
					<RadioGroup label="Units"
						className="flex flex-row items-center justify-start p-3"
						value={bodySel} onValueChange={setBodySel}
					>
						<div className="flex flex-row gap-3">
							<Radio size="sm" 
								value="US" 
								onChange={() => {
									setUnitU(true); 
									setUnitMet(false);
									setMetCm(undefined);
									setMetWt(undefined);
									setMetBmi(undefined)
									setMetBmiSet(false);
									}}>US</Radio>
							<Radio size="sm" 
								value="Metric"
								onChange={() => {
									setUnitMet(true); 
									setUnitU(false);
									setUValFt(undefined);
									setUValIn(undefined);
									setUValWt(undefined);
									setUBmi(undefined)
									setUBMiSet(false);
									}}>Metric</Radio>
						</div>
					</RadioGroup>
					{unitU && <div>{bodyUS}</div>}
					{unitMet && <div>{bodyMet}</div>}
				</CardBody>
			</Card>
		</div>
	)

	const gradeCalc = (
		<div className="m-10">
			<div className="m-5">
				<p className={subtitle()}>
					Grade <span className="text-cyan-400">Point</span> Average
				</p>
			</div>
			<Card className="gap-1">
				<Button
					color="default"
					variant="ghost"
					radius="lg"
					size="sm"
					onPress={() => {setDefApp(true); setGradeApp(false)}}>
						Calculator Home
				</Button>
			</Card>
		</div>	
	)

	const tipsCalc = (
		<div className="m-10">
			<div className="m-5">
				<p className={subtitle()}>
					Your <span className="text-cyan-400">Server's</span> Tip
				</p>
			</div>
			<Card className="gap-1">
				<Button
					color="default"
					variant="ghost"
					radius="lg"
					size="sm"
					onPress={() => {setDefApp(true); setTipsApp(false)}}>
						Calculator Home
				</Button>
			</Card>
		</div>
	)

	const weightCalc = (
		<div className="m-10">
			<div className="m-5">
				<p className={subtitle()}>
					Pounds-<span className="text-cyan-400">to</span>-Kilogram
				</p>
			</div>
			<Card className="gap-1">
				<Button
					color="default"
					variant="ghost"
					radius="lg"
					size="sm"
					onPress={() => {setDefApp(true); setWeightApp(false)}}>
						Calculator Home
				</Button>
			</Card>
		</div>
	)

	const tempCalc = (
		<div className="m-10">
			<div className="m-5">
				<p className={subtitle()}>
					Farenheit-<span className="text-cyan-400">to</span>-Celsius
				</p>
			</div>
			<Card className="gap-1">
				<Button
					color="default"
					variant="ghost"
					radius="lg"
					size="sm"
					onPress={() => {setDefApp(true); setTempApp(false)}}>
						Calculator Home
				</Button>
			</Card>
		</div>
	)

	const feetCalc = (
		<div className="m-10">
			<div className="m-5">
				<p className={subtitle()}>
					Feet-<span className="text-cyan-400">to</span>-Inches
				</p>
			</div>
			<Card className="gap-1">
				<Button
					color="default"
					variant="ghost"
					radius="lg"
					size="sm"
					onPress={() => {setDefApp(true); setFeetApp(false)}}>
						Calculator Home
				</Button>
			</Card>
		</div>
	)

	const vetCalc = (
		<div className="m-10">
			<div className="m-5">
				<p className={subtitle()}>
					VA <span className="text-cyan-400">Disability</span> Calculator
				</p>
			</div>
			<Card className="gap-1">
				<Button
					color="default"
					variant="ghost"
					radius="lg"
					size="sm"
					onPress={() => {setDefApp(true); setVetApp(false)}}>
						Calculator Home
				</Button>
			</Card>
		</div>
	)
	
	return (
		<div className="roboto">
			<div>
				<span className={`${title()} jbmono`}>All-in-One </span>
				<span className={`${title({ color: "cyan" })} jbmono`}>Calculator</span>
			</div>

			{/* Default App */}
			{defApp && <div>{defaultApp}</div>}

			{/* Calculators */}
			{bodyApp && <div>{bodyCalc}</div>}
			{gradeApp && <div>{gradeCalc}</div>}
			{tipsApp && <div>{tipsCalc}</div>}
			{weightApp && <div>{weightCalc}</div>}
			{tempApp && <div>{tempCalc}</div>}
			{feetApp && <div>{feetCalc}</div>}
			{vetApp && <div>{vetCalc}</div>}
		</div>
	)
}