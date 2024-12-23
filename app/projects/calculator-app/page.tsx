"use client"

import { title, subtitle } from "@/components/primitives";
import { useState } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Form } from "@nextui-org/form"
import { Input } from "@nextui-org/input";
import { Divider, Radio, RadioGroup } from "@nextui-org/react";
import { Chip } from "@nextui-org/chip";
import calculate from "./calculator.js";
import { Ubuntu } from "next/font/google/index.js";

export default function CalculatorApp() {
	// useState t/f for opening/closing diff Calcs
	const [defApp, setDefApp] = useState(true);
	const [bodyApp, setBodyApp] = useState(false);
	const [gradeApp, setGradeApp] = useState(false);
	const [tipsApp, setTipsApp] = useState(false);
	const [massApp, setMassApp] = useState(false);
	const [tempApp, setTempApp] = useState(false);
	const [lengthApp, setLengthApp] = useState(false);
	const [vetApp, setVetApp] = useState(false);
	
	// list items (buttons)
	const calcList = [
		{
			title: "BMI",
			toggleItem: 1,
		},
		// {
		// 	title: "GPA",
		// 	toggleItem: 2,
		// },
		{
			title: "Service Tips",
			toggleItem: 3,
		},
		// {
		// 	title: "Mass",
		// 	toggleItem: 4,
		// },
		// {
		// 	title: "Temperature",
		// 	toggleItem: 5,
		// },
		// {
		// 	title: "Length",
		// 	toggleItem: 6,
		// },
		// {
		// 	title: "VA Disability	",
		// 	toggleItem: 7,
		// },
	]

	// Hide/View thing set value
	const setThing = (id: number) => {
		setBodyApp(id === 1);
		setGradeApp(id === 2);
		setTipsApp(id === 3);
		setMassApp(id === 4);
		setTempApp(id === 5);
		setLengthApp(id === 6);
		setVetApp(id === 7);
	}

	// Default view of app
	const defaultApp = (
		<div className="gap-5 grid grid-cols-1 sm:grid-cols-2 p-5 m-10">
			{calcList.map((item, index) => (
				<Card key={index} isPressable onPress={() => {
					setThing(item.toggleItem);
					// @ts-ignore
					setDefApp(false);}}>
					<CardBody className="text-center justify-center p-5">
						<p className="text-default-500">{item.title}</p>
					</CardBody>
				</Card>
			))}
		</div>
	)

	// BMI Calc
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

	// Tips Calc
	const [billAmt, setBillAmt] = useState();
	const [tipAmt, setTipAmt] = useState();
	const [serverTip, setServerTip] = useState();
	const [showTip, setShowTip] = useState(false)

	function calcHome() {
		// Calc Apps
		setDefApp(true);
		setBodyApp(false);
		setGradeApp(false);
		setTipsApp(false);
		setMassApp(false);
		setTempApp(false);
		setLengthApp(false);
		setVetApp(false);

		// BMI useStates
		setBodySel("US");
		setUnitU(true);
		setUnitMet(false);
		setUValFt(undefined);
		setUValIn(undefined);
		setUValWt(undefined);
		setUBMiSet(false);
		setUBmi(undefined);
		setMetCm(undefined);
		setMetWt(undefined);
		setMetBmi(undefined);
		setMetBmiSet(false);

		// GPA useStates


		// Tips useStates
		setBillAmt(undefined);
		setTipAmt(undefined);
		setServerTip(undefined);
		setShowTip(false);

		// Mass useStates


		// Temp useStates


		// Length useStates


		// VA useStates

	}

	const onSubmit = (e: any) => {
		e.preventDefault();
	}

	// BMI Results func for either unit or metric
	function bmiResult() {
		// @ts-ignore
		if (uBmi < 18.5 || metBmi < 18.5) {
			let result = (
				<div className="flex flex-col items-center w-full gap-2">
					<p>Your BMI is:</p>
					<Chip className="jbmono text-2xl p-5" color="danger">{uBmi || metBmi}</Chip>
				</div>)
			return result
		// @ts-ignore
		} else if (uBmi > 18.4 && uBmi < 25 || metBmi > 18.5 && metBmi < 25) {
			let result = (
				<div className="flex flex-col items-center w-full gap-2">
					<p>Your BMI is:</p>
					<Chip className="jbmono text-2xl p-5" color="success">{uBmi || metBmi}</Chip>
				</div>)
			return result
		// @ts-ignore
		} else if (uBmi > 24.9 && uBmi < 30 || metBmi > 24.9 && metBmi < 30) {
			let result = (
				<div className="flex flex-col items-center w-full gap-2">
					<p>Your BMI is:</p>
					<Chip className="jbmono text-2xl p-5" color="warning">{uBmi || metBmi}</Chip>
				</div>)
			return result
		} else {
			let result = (
				<div className="flex flex-col items-center w-full gap-2">
					<p>Your BMI is:</p>
					<Chip className="jbmono text-2xl p-5" color="secondary">{uBmi || metBmi}</Chip>
				</div>)
			return result
		}
	}

	const bodyUS = (
		<>
			<Divider />
			<Form onSubmit={onSubmit} className="pt-5">
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
					className="pb-5"
				/>
				<Divider/>
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
				{uBmiSet && bmiResult()}
			</Form>
		</>
	)

	const bodyMet = (
		<>
			<Divider />
			<Form onSubmit={onSubmit} className="pt-5">
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
					className="pb-5"
				/>
				<Divider />
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
				{metBmiSet && bmiResult()}
			</Form>
		</>
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
						// @ts-ignore
						onPress={calcHome}
					>
						Calculator Home
					</Button>
				</CardHeader>
				<CardBody className="gap-1">
					<RadioGroup label="Units"
						className="flex flex-row items-center justify-start p-2"
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
					// @ts-ignore
					onPress={calcHome}>
						Calculator Home
				</Button>
			</Card>
		</div>	
	)

	const tipsCalc = (
		<div className="m-10">
			<Card className="gap-1 py-5">
				<CardHeader className="justify-center flex flex-col gap-2">
					<p className="text-4xl jbmono">
						Your <span className="text-cyan-400">Server's</span> Tip
					</p>
					<Button
						className="w-fit mb-5"
						color="default"
						variant="ghost"
						radius="lg"
						size="md"
						// @ts-ignore
						onPress={calcHome}
					>
						Calculator Home
					</Button>
					<Divider />
				</CardHeader>
				<Form onSubmit={onSubmit} className="">
					<CardBody className="gap-5 flex flex-row">
						<Input
							label="Price"
							labelPlacement="outside"
							placeholder="0.00"
							startContent={
								<div className="pointer-events-none flex items-center">
									<span className="text-default-400 text-small">$</span>
								</div>
							}
							type="number"
							// @ts-ignore
							onChange={(e) => setBillAmt(e.target.valueAsNumber)} 
						/>
						<Input
							label="Tip"
							labelPlacement="outside"
							placeholder="15"
							endContent={
								<div className="pointer-events-none flex items-center">
									<span className="text-default-400 text-small">%</span>
								</div>
							}
							type="number" 
							// @ts-ignore
							onChange={(e) => setTipAmt(e.target.valueAsNumber)}
						/>
					</CardBody>
					<CardFooter className="flex flex-col">
						<Divider />
						<div className="flex justify-center gap-3 items-center m-auto pt-5">
							<Button className="px-10"
								color="primary"
								type="submit"
								// @ts-ignore
								onPress={() => {setServerTip(calculate.serviceTip(billAmt, tipAmt)); 
								if (serverTip === undefined) {
									setShowTip(false)
								} else if (serverTip > 0) {
									setShowTip(true)
								}}}
							>Calculate</Button>
							<Button
								color="danger"
								variant="faded"
								type="reset"
								// @ts-ignore
								onPress={() => {setBillAmt(); setTipAmt(); setShowTip(false)}}

							>Clear</Button>
						</div>
						{showTip && 
							<div className="w-full gap-3 pt-5">
								<p>Your Server's Tip is:</p>
								<Chip className="jbmono text-2xl p-5" color="success">${serverTip}</Chip>
							</div>
						}
					</CardFooter>
				</Form>
			</Card>
		</div>
	)

	const massCalc = (
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
					// @ts-ignore
					onPress={calcHome}>
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
					// @ts-ignore
					onPress={calcHome}>
						Calculator Home
				</Button>
			</Card>
		</div>
	)

	const lengthCalc = (
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
					// @ts-ignore
					onPress={calcHome}>
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
					// @ts-ignore
					onPress={calcHome}>
						Calculator Home
				</Button>
			</Card>
		</div>
	)
	
	return (
		<div className="roboto">
			<div>
				<span className={`${title()} jbmono`}>All-in-One </span>
				<span className={`${title({ color: "cyan" })} jbmono`}>Calculator <br /></span>
				<span className={`${title()} jbmono`}>App</span>
			</div>

			{/* Default App */}
			{defApp && <div>{defaultApp}</div>}

			{/* Calculators */}
			{bodyApp && <div>{bodyCalc}</div>}
			{gradeApp && <div>{gradeCalc}</div>}
			{tipsApp && <div>{tipsCalc}</div>}
			{massApp && <div>{massCalc}</div>}
			{tempApp && <div>{tempCalc}</div>}
			{lengthApp && <div>{lengthCalc}</div>}
			{vetApp && <div>{vetCalc}</div>}
		</div>
	)
}