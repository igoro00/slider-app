import {
	AppBar,
	Box,
	Button,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	SwipeableDrawer,
	Toolbar,
	Typography,
} from "@mui/material";
import type { NextPage } from "next";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useRouter } from "next/router";

const Header: React.FC = () => {
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
	const router = useRouter()
	function navigate(url:string){
		router.push(url);
		setDrawerOpen(false);
	}
	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
							onClick={() => setDrawerOpen(true)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							News
						</Typography>
						<SwipeableDrawer
							anchor="left"
							open={drawerOpen}
							onClose={() => setDrawerOpen(false)}
							onOpen={() => setDrawerOpen(true)}
						>
							<div>
								<List>
									<ListItem button key={"Main"} onClick={()=>navigate("/")}>
										<ListItemText primary={"Main"} />
									</ListItem>
									<ListItem button key={"Home"} onClick={()=>navigate("/home")}>
										<ListItemText primary={"Home"} />
									</ListItem>
								</List>
							</div>
						</SwipeableDrawer>
					</Toolbar>
				</AppBar>
			</Box>
		</div>
	);
};

export default Header;
