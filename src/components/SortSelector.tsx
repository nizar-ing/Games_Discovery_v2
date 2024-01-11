import React from "react";
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

const SortSelector: React.FC<{selectedOrder: string, onSelectOrder: (order: string) => void}> = ({selectedOrder, onSelectOrder}) => {
    const sortOrders = [
        {value: '', label :'Relevance'},
        {value: '-added', label :'Date added'},
        {value: 'name', label :'Name'},
        {value: '-released', label :'Release date'},
        {value: '-metacritic', label :'Popularity'},
        {value: '-rating', label :'Average rating'}
    ];

    const currentSortOrder = sortOrders.find((order) => order.value === selectedOrder)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                Order by: { currentSortOrder?.label || 'Relevance' }
            </MenuButton>
            <MenuList>
                {
                    sortOrders.map((order) => <MenuItem key={order.value} value={order.value} onClick={() => onSelectOrder(order.value)}>
                        {order.label}
                    </MenuItem>)
                }
            </MenuList>
        </Menu>
    );
};

export default SortSelector;