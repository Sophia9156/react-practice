import React, { createContext, useContext, useState } from 'react';

const accordionContext = createContext(null);
const UseAccordion = () => useContext(accordionContext);

export const Accordion = ({children}) => {
  const [isOpen, setIsOpen] = useState();
  const value = {isOpen, setIsOpen};
  return (
    <accordionContext.Provider value={value}>
      {children}
    </accordionContext.Provider>
  )
}

export const AccordionHeader = ({content}) => {
  const { isOpen, setIsOpen } = UseAccordion();
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>{content.title}</button>
    </div>
  )
}

export const AccordionBody = ({content}) => {
  const { isOpen } = UseAccordion();
  return (
    <div>{isOpen && <div>{content.text}</div>}</div>
  )
}

export default Accordion;