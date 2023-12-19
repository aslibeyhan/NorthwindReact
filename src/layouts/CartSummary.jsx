import React from 'react'
import { NavLink } from 'react-router-dom'
import {Dropdown, DropdownDivider, DropdownItem } from 'semantic-ui-react'


export default function CartSummary() {
  return (
    <div>
        <Dropdown item text='Sepetiniz'>
                            <Dropdown.Menu>
                                <Dropdown.Item>Acer Laptop</Dropdown.Item>
                                <Dropdown.Item>Assus Laptop</Dropdown.Item>
                                <Dropdown.Item>Huawei Laptop</Dropdown.Item>
                                <DropdownDivider/>
                                <DropdownItem as={NavLink} to="/cart">Sepete Git</DropdownItem>
                            </Dropdown.Menu>
                        </Dropdown>
        
    </div>
  )
}
