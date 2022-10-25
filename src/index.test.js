import React from "react";
import { render } from "@testing-library/react";

import { Container, Text, Responsive, isPortrait, isLandscape, Dropdown, Header, List, Option, Button } from "./index";

describe("Container Component", () => {
    test("renders the Container component", () => {
        render(<Container />);
    });
});

describe("Text Component", () => {
    test("renders the Text component", () => {
        render(<Text />);
    });
});

describe("Dropdown Component", () => {
    test("renders the Dropdown component", () => {
        const [isExpanded, setIsExpanded] = useState(false)
        const onToggle = ( value ) => {
            setIsExpanded(value)
        }

        const [selection, setSelection] = useState(null)
        const onSelect = ( value ) => {
            setSelection(value)
        }
        render(
            <Dropdown onToggle = { (v) => onToggle(v) } onSelect = { (v) => onSelect(v) } behavior = 'click' trigger = 'button' styles = {{ width: '200px', height: '100px' }}>
                <Header direction = 'row' alignment = 'start center' fill = 'parent'>
                    <Button styles = {{ left: 0 }} position = 'absolute' fill = 'height'/>
                </Header>
                <List direction = 'column' alignment = 'start center' fill = 'width'>
                    <Option value = 'Apple' container initial/>
                    <Option value = 'Banana' container/>
                    <Option value = 'Mango' container/>
                </List>
            </Dropdown>
        );
    });
});

describe("Responsive Component", () => {
    test("renders the Responsive component", () => {
        render(
            <>
                <Responsive landscape>
                    <Container>

                    </Container>
                </Responsive>
                <Responsive portrait>
                    <Container>

                    </Container>
                </Responsive>
            </>
        );
    });
});