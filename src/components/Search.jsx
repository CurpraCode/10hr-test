import React from "react";
import { useAsyncDebounce } from "react-table";
import { Input, HStack, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function Search({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
	const count = preGlobalFilteredRows.length;
	const [value, setValue] = React.useState(globalFilter);
	const onChange = useAsyncDebounce((value) => {
		setGlobalFilter(value || undefined);
	}, 200);

	return (
		<HStack mr="1rem">
			<InputGroup>
				<Input
					value={value || ""}
					onChange={(e) => {
						setValue(e.target.value);
						onChange(e.target.value);
					}}
					placeholder={`Search ${count} records...`}
					size="md"
					borderRadius="0.5rem"
					bg="rgba(243,244,244,100)"
					color="#757886"
					border="none"
					fontSize="0.8rem"
					_focus={{
						outline: 0,
					}}
					_placeholder={{
						color: "#757886"
					}}
				/>
				<InputRightElement
					pointerEvents="none"
					children={<SearchIcon color="gray.800" />}
				/>
			</InputGroup>
		</HStack>
	);
}

export default Search;
