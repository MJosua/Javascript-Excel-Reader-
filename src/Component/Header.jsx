import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import axios from 'axios';
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {







    return (

        <div className="fixed-top bg-danger  py-1 ps-1  text-start ">




            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 text-light fs-4 ">
                        IT Ticketing System
                    </div>

                    <div className="col-6 d-flex justify-content-end ">
                        <Menu>
                            <MenuButton >
                                <GiHamburgerMenu className='text-light fs-4 ' />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Profile</MenuItem>
                                <MenuItem>Log out</MenuItem>
                            </MenuList>
                        </Menu>
                    </div>

                </div>


            </div>



        </div>
    )
}
export default Header