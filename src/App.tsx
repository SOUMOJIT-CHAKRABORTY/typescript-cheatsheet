import { ReactElement, ReactNode, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// old way to define Funcational Component -->
const HeadingFc: React.FC<{ title: string }> = ({ title }) => <h1>{title}</h1>;

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
// defining custom type-->
type ContainerType = { children: ReactNode } & typeof defaultContainerProps;

function Container({ heading, children }: ContainerType): ReactElement {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  );
}

Container.defaultProps = defaultContainerProps;

// Functional Props

function TextWithNumber({
  header,
  children,
}: {
  header?: (num: number) => ReactNode; //Optional prop
  children: (num: number) => ReactNode;
}) {
  const [state, setState] = useState<number>(1);
  return (
    <div>
      {header && <h2>{header?.(state)}</h2>}
      {/* This is the optional prop, with conditional rendering */}
      <div>{children(state)}</div>
      <button onClick={() => setState(state + 1)}>ADD</button>
    </div>
  );
}

// **Generics**
// List
function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div>
      <Message title="Hello! World"></Message>
      <ComponentMessage>
        <strong>HI</strong>
      </ComponentMessage>
      <Container>
        <strong>foo</strong>
      </Container>
      <TextWithNumber>
        {(num: number) => <div>Today's number is {num}</div>}
      </TextWithNumber>
      <List
        items={["Boto", "Soumojit", "patul"]}
        render={(item: string) => <div>{item.toUpperCase()}</div>}
      />
    </div>
  );
}

export default App;
