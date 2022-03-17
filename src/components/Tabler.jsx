import React from "react";
import {
  Flex,
  Text,
  HStack,
  Box,
  Button,
  Select,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
} from "@chakra-ui/react";
import {
  TriangleDownIcon,
  TriangleUpIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import {
  useTable,
  useSortBy,
  usePagination,
  useFilters,
  useGlobalFilter,
} from "react-table";
import { matchSorter } from "match-sorter";
import Search from "./Search";

export const Tabler = ({ columns, data, text }) => {
  function fuzzyTextFilterFn(rows, id, filterValue) {
    return matchSorter(rows, filterValue, {
      keys: [(row) => row.values[id]],
    });
  }

  // Let the table remove the filter if the string is empty
  fuzzyTextFilterFn.autoRemove = (val) => !val;

  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state: { pageIndex, pageSize },
    state,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    { columns, data, filterTypes, initialState: { pageIndex: 0, pageSize: 5 } },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <Box width="100%">
      <Box mt="1rem">
        <Box
          rounded="md"
          boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
          backdropFilter="blur( 19px )"
          webkitbackdropfilter="blur( 19px)"
          ml={{
            xl: "5rem",
          }}
          p="0.9rem"
          borderRadius="0.5rem"
          fontSize="0.7rem"
          maxWidth={{
            md: "850px",
            lg: "1150px",
            xl: "1360px",
          }}
          m="0 auto"
          border="1px solid #e5e9f2"
        >
          <HStack
            justifyContent="space-between"
            alignitem="center"
            pt="1rem"
            pb="1rem"
          >
            <Text fontWeight="bold" fontSize="1rem">
              {text}
            </Text>
            <HStack>
              <Search
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </HStack>
          </HStack>

          <HStack justifyContent="space-between" p="0.8rem">
            <HStack justifyContent="space-between">
              <Select
                bg="transparent"
                size="sm"
                color="gray.700"
                fontSize="1rem"
                borderRadius="0.5rem"
                transition="all 0.2s"
                border="2px solid #000"
                borderWidth="1px"
                _hover={{ outline: 0 }}
                _expanded={{ bg: "pink.100", outline: 0 }}
                _focus={{ outline: 0 }}
                _active={{ outline: 0 }}
                fontWeight="400"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[5, 10, 20, 30, 40].map((newPageSize) => (
                  <option key={newPageSize} value={newPageSize}>
                    Show {newPageSize}
                  </option>
                ))}
              </Select>
            </HStack>
          </HStack>
          <Box
            overflowX="scroll"
            sx={{
              "&::-webkit-scrollbar": {
                height: "9px",
                width: "3px",
                borderRadius: "15px",
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: `#8094ae`,
                borderRadius: "15px",
                width: "3px",
              },
            }}
          >
            <Table {...getTableProps()}>
              <Thead>
                {headerGroups.map((headerGroup) => (
                  <Tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <Th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        isNumeric={column.isNumeric}
                        isTruncated
                      >
                        {column.render("Header")}
                        <chakra.span pl="4">
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <TriangleDownIcon aria-label="sorted descending" />
                            ) : (
                              <TriangleUpIcon aria-label="sorted ascending" />
                            )
                          ) : (
                            ""
                          )}
                        </chakra.span>
                      </Th>
                    ))}
                  </Tr>
                ))}
              </Thead>
              <Tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <Tr {...row.getRowProps()}>
                      {row.cells.map((cell) => (
                        <Td
                          {...cell.getCellProps()}
                          isNumeric={cell.column.isNumeric}
                          isTruncated
                        >
                          {cell.render("Cell")}
                        </Td>
                      ))}
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </Box>
          <Flex justify="space-between" align="center" p={2}>
            <HStack spacing="24px">
              <Text>
                Showing {pageIndex + 1} of {pageOptions.length}
              </Text>
            </HStack>
            <HStack spacing="10px">
              <Box>
                <IconButton
                  _hover={{ border: "none", outline: "none" }}
                  _active={{ border: "none", outline: "none" }}
                  _focus={{
                    border: "none",
                    outline: "none",
                  }}
                  aria-label="icon"
                  colorScheme="green"
                  bg="pink.50"
                  borderRadius="0.75rem"
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                  size="md"
                  icon={<ArrowLeftIcon color="pink.500" boxSize={2.5} />}
                />
              </Box>

              <Box>
                <IconButton
                  _hover={{ border: "none", outline: "none" }}
                  _active={{ border: "none", outline: "none" }}
                  _focus={{
                    border: "none",
                    outline: "none",
                  }}
                  aria-label="icon"
                  colorScheme="green"
                  bg="pink.50"
                  borderRadius="0.75rem"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                  size="md"
                  icon={<ChevronLeftIcon color="pink.500" boxSize={7} />}
                />
              </Box>

              <Button
                _hover={{ border: "none", outline: "none" }}
                _active={{ border: "none", outline: "none" }}
                _focus={{
                  border: "none",
                  outline: "none",
                }}
                colorScheme="pink"
                size="sm"
                fontSize="1.2rem"
              >
                {pageIndex + 1}
              </Button>

              <Box>
                <IconButton
                  _hover={{ border: "none", outline: "none" }}
                  _active={{ border: "none", outline: "none" }}
                  _focus={{
                    border: "none",
                    outline: "none",
                  }}
                  aria-label="icon"
                  colorScheme="green"
                  bg="pink.50"
                  borderRadius="0.75rem"
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  size="md"
                  icon={<ChevronRightIcon color="pink.500" boxSize={7} />}
                />
              </Box>
              <Box>
                <IconButton
                  _hover={{ border: "none", outline: "none" }}
                  _active={{ border: "none", outline: "none" }}
                  _focus={{
                    border: "none",
                    outline: "none",
                  }}
                  aria-label="icon"
                  colorScheme="green"
                  bg="pink.50"
                  borderRadius="0.75rem"
                  disabled={!canNextPage}
                  size="md"
                  onClick={() => gotoPage(pageCount - 1)}
                  icon={<ArrowRightIcon color="pink.500" boxSize={2.5} />}
                />
              </Box>
            </HStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
