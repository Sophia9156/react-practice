import Accordion, { AccordionHeader, AccordionBody } from "../components/Accordion";
import Accordion2 from "../components/Accordion2";

export default function AccordionPractice() {
  const content = [
    {title: 'fruit1', text: 'strawberry'},
    {title: 'fruit2', text: 'banana'},
    {title: 'fruit3', text: 'cherry'}
  ]

  return (
    <>
      {content.map(content => (
        <Accordion>
          <AccordionHeader content={content} />
          <AccordionBody content={content} />
        </Accordion>
      ))}
      {content.map(content => (
        <Accordion2 content={content} />
      ))}
    </>
  )
}