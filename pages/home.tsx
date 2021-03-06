import {
	Button,
	ButtonGroup,
	CardHeader as h1,
	Container,
	Divider,
	Stack,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import { useState } from "react";
import ButtonGroupControl from "../components/ButtonGroupControl";
import Header from "../components/Header";
import { useLocalStorage } from "../hooks";
import { runGcode } from "../utils/klipperApiClient";

const Home: NextPage = () => {
	const [homed, setHomed] = useState<boolean>(false);
	const [position, setPosition] = useState<number>(0);
	const [maxZ, setMaxZ] = useLocalStorage<number>("maxZ", 0);

	const chPosBy = (n: number) => {
		position + n >= 0 && setPosition(position + n);
	};

	return (
		<div>
			<Header title="Home" />
			<Container maxWidth="sm">
				<Box component="div" paddingY={5}>
					<Stack
						spacing={2}
						divider={<Divider orientation="vertical" flexItem />}
						alignItems="center"
					>
						<Button
							onClick={() => {
								runGcode("G28 Z");
								setHomed(true);
								setPosition(0);
							}}
							variant="outlined"
						>
							Home Carriage
						</Button>
						<Stack spacing={1}>
							<Typography variant="h6" component="h2">
								Set Max Position
							</Typography>
							<Typography variant="subtitle1" component="p">
								Current Position: {position}mm
							</Typography>
							<ButtonGroupControl
								possibleValues={[-100, -10, -1, 0, 1, 10, 100]}
								disabled={!homed}
								setValue={setPosition}
								value={position}
							/>
							<Button
								onClick={() => {
									setMaxZ(position);
								}}
								disabled={!homed}
								variant="outlined"
							>
								Set max position
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Container>
		</div>
	);
};

export default Home;
