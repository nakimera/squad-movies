import React, {useState} from "react";
import styled from 'styled-components';

import Checkbox from "../checkbox";

export default function AccordionFilter (props) {
    const [isOpen, setIsOpen] = useState(false);
    const {category, options} = props;

    return(
        <Wrapper>
            <Title onClick={() => setIsOpen(!isOpen)}>
                <Sign>{isOpen ? '-' : '+'}</Sign>Select {category}
            </Title>
            {
                isOpen && <FilterOptions>
                {options.map((option, index) => {
                    return <Checkbox key={index} label={option.name} />
                })}
            </FilterOptions>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
`

const Title = styled.h4`
    font-weight: 500;
    cursor: pointer;
    z-index: 1;
    margin: 10px 0;
`

const Sign = styled.span`
    margin-right: 8px;
`

const FilterOptions = styled.div``
