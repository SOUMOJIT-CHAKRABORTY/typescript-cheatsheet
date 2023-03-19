import { ReactElement, ReactNode, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Conventional Props

function Message({ title }: { title: string }) {
  return <h1>{title}</h1>;
}

// Passing child Props
function ComponentMessage({ children }: { children: ReactNode }): ReactElement {
  return <h1>{children}</h1>;
}

// Default Props

const defaultContainerProps = {
  heading: <strong>My Heading</strong>,
};

function Container({
  heading,
  children,
}: { children: ReactNode } & typeof defaultContainerProps): ReactElement {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  );
}

Container.defaultProps = defaultContainerProps;

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Message title="Hello! World"></Message>
      <ComponentMessage>
        <strong>HI</strong>
      </ComponentMessage>
      <Container>
        <strong>foo</strong>
      </Container>
    </div>
  );
}

export default App;
