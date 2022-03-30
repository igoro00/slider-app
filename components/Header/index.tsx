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
import HomeIcon from '@mui/icons-material/Home';
import { AccessibilityNew } from "@mui/icons-material";

const Header: React.FC<{title:string}> = ({title}) => {
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
	const router = useRouter()
	function navigate(url:string){
		router.push(url);
		setDrawerOpen(false);
	}
	return (
		<div>
			<Box component="div" sx={{ flexGrow: 1 }}>
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
							{title}
						</Typography>
						<SwipeableDrawer
							anchor="left"
							open={drawerOpen}
							onClose={() => setDrawerOpen(false)}
							onOpen={() => setDrawerOpen(true)}
						>
							<div>
								<List>
									<ListItem button onClick={()=>navigate("/")}>
										<ListItemIcon>
											<AccessibilityNew />
										</ListItemIcon>
										<ListItemText primary={"Move"} />
									</ListItem>
									<ListItem button onClick={()=>navigate("/home")}>
										<ListItemIcon>
											<HomeIcon />
										</ListItemIcon>
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
