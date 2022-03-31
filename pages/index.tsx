import type { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";
import { useLocalStorage } from "../hooks";
import Header from "../components/Header";
import SliderModel from "../components/slidermodel";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ButtonGroupControl from "../components/ButtonGroupControl";

const Home: NextPage = () => {
	const [yaw, setYaw] = useState(0);
	const [pitch, setPitch] = useState(0);
	const [z, setZ] = useState(0);

	return (
		<div>
			<Header title="Move" />
			<Container maxWidth="md">
				<Box component="div" paddingY={5}>
					<Stack dir="column" gap={5} alignItems="center">
						{/* convert to radians */}
						<SliderModel yaw={yaw * 0.0174532925} pitch={pitch * 0.0174532925} z={z} />
						<div>
							<Typography variant="h4" component="h2" align="center">
								Yaw
							</Typography>
							<ButtonGroupControl
								possibleValues={[-180, -30, -15, -1, 0, 1, 15, 30, 180]}
								setValue={setYaw}
								value={yaw}
							/>
						</div>
						<div>
							<Typography variant="h4" component="h2" align="center">
								Pitch
							</Typography>
							<ButtonGroupControl
								possibleValues={[-180, -30, -15, -1, 0, 1, 15, 30, 180]}
								setValue={setPitch}
								value={pitch}
							/>
						</div>
            <div>
							<Typography variant="h4" component="h2" align="center">
								Position
							</Typography>
							<ButtonGroupControl
								possibleValues={[-10, -1, -0.1, 0, 0.1, 1, 10]}
								setValue={setZ}
								value={z}
							/>
						</div>
					</Stack>
				</Box>
			</Container>
		</div>
	);
};

export default Home;
