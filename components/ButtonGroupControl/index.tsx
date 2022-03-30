import { Button, ButtonGroup } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";

type Props<T> = {
	possibleValues: number[];
	disabled?: boolean;
	value: T;
	setValue: Dispatch<SetStateAction<number>>;
};

const ButtonGroupControl: React.FC<Props<any>> = ({
	possibleValues,
	disabled=false,
	value,
	setValue,
}) => {
	const ButtonAddSub: React.FC<{ n: number }> = ({ n }) => (
		<Button onClick={() => setValue(value+n)} variant="contained" color={n < 0 ? "error" : "primary"}>
			{n}
		</Button>
	);
	return (
		<ButtonGroup disabled={disabled}>
			{possibleValues.map(elem=>{
				if(elem===0){
					return 	<Button variant="contained" disabled>{value}</Button>
				} else {
					return <ButtonAddSub n={elem} />
				}

			})}
		</ButtonGroup>
	);
};

export default ButtonGroupControl;
