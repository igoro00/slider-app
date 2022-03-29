import { Button, ButtonGroup, CardHeader as h1, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useState } from "react";
import Header from "../components/Header";
import { useLocalStorage } from "../hooks";
import { runGcode } from "../utils/klipperApiClient";

const Home: NextPage = () => {
	const [homed, setHomed]=useState<boolean>(false);
	const [position, setPosition] = useState<number>(0);
	const [maxZ, setMaxZ]= useLocalStorage<number>("maxZ", 0)
	return (
		<>
		<Header/>
		<div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:10}}>
			<Button onClick={()=>{
				runGcode("G28 Z");
				setHomed(true);
				setPosition(0);
			}} variant="outlined">Home Carriage</Button>
			<div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:10}}>
				<Typography variant="h6" component="h2">Set Max Position</Typography>
				<Typography variant="subtitle1" component="p">Current Position: {position}mm</Typography>
				<ButtonGroup disabled={!homed}>
					<Button onClick={()=>(position-100>=0)&&setPosition(position-100)} variant="contained" color="error">-100</Button>
					<Button onClick={()=>(position-10>=0)&&setPosition(position-10)} variant="contained" color="error">-10</Button>
					<Button onClick={()=>(position-1>=0)&&setPosition(position-1)} variant="contained" color="error">-1</Button>
					<Button variant="contained" disabled>-</Button>
					<Button onClick={()=>(position+1>=0)&&setPosition(position+1)} variant="contained">+1</Button>
					<Button onClick={()=>(position+10>=0)&&setPosition(position+10)} variant="contained">+10</Button>
					<Button onClick={()=>(position+100>=0)&&setPosition(position+100)} variant="contained">+100</Button>
				</ButtonGroup>
				<Button onClick={()=>{setMaxZ(position)}} disabled={!homed} variant="outlined">Set max position</Button>
			</div>
		</div>
		</>
	)
};

export default Home;
