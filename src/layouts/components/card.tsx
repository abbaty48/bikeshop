import { HTMLAttributes, PropsWithChildren } from 'react'

function CardHeader({ children, ...props }: PropsWithChildren & HTMLAttributes<HTMLElement>) { return <header {...props}>{children} </header> }
function CardBody({ children, ...props }: PropsWithChildren & HTMLAttributes<HTMLElement>) { return <figure {...props}>{children}</figure> }
function CardFooter({ children, ...props }: PropsWithChildren & HTMLAttributes<HTMLElement>) { return <div {...props}>{children} </div> }
function CardFeature(props: React.ImgHTMLAttributes<HTMLImageElement>) { return <img {...props} /> }

export default function Card({ children, ...props }: PropsWithChildren & HTMLAttributes<HTMLElement>) {
    return (
        <article {...props} role='document'>{children}</article>
    )
}

Card.CardHeader = CardHeader;
Card.CardBody = CardBody;
Card.CardFooter = CardFooter;
Card.CardFeature = CardFeature;
