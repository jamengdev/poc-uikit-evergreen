import "./App.css";
import { Button, Heading, Pane, Text } from "evergreen-ui";
import Plus from "./Icons/Plus";

function App() {
  return (
    <Pane padding={16}>
      <Heading is="h1">POC UI KIT EVERGREEN</Heading>
      <HighEmphasisButtons />
      <MidEmphasisButtons />
      <LowEmphasisButtons />
    </Pane>
  );
}

function HighEmphasisButtons() {
  return (
    <>
      <Text>High Emphasis with Icon</Text>
      <Pane>
        <Button
          appearance="highEmphasis"
          iconBefore={<Plus color="#FFF" width={16} height={16} />}
          size="small"
          margin={4}
        >
          Small
        </Button>
        <Button
          appearance="highEmphasis"
          iconBefore={<Plus color="#FFF" width={20} height={20} />}
          size="medium"
          margin={4}
        >
          Medium
        </Button>
        <Button
          appearance="highEmphasis"
          iconBefore={<Plus color="#FFF" width={24} height={24} />}
          size="large"
          margin={4}
        >
          Large
        </Button>
        <Button
          appearance="highEmphasis"
          iconBefore={<Plus color="#FFF" width={24} height={24} />}
          size="large"
          margin={4}
          disabled={true}
        >
          Disabled
        </Button>
      </Pane>
    </>
  );
}

function MidEmphasisButtons() {
  return (
    <>
      <Text>Mid Emphasis with Icon</Text>
      <Pane columnGap={4}>
        <Button
          appearance="midEmphasis"
          iconBefore={<Plus color="#1C96A3" width={16} height={16} />}
          size="small"
          margin={4}
        >
          Medium
        </Button>
        <Button
          appearance="midEmphasis"
          iconBefore={<Plus color="#1C96A3" width={20} height={20} />}
          size="medium"
          margin={4}
        >
          Medium
        </Button>
        <Button
          appearance="midEmphasis"
          iconBefore={<Plus color="#1C96A3" width={24} height={24} />}
          size="large"
          margin={4}
        >
          Large
        </Button>
        <Button
          appearance="midEmphasis"
          iconBefore={<Plus color="#1C96A3" width={24} height={24} />}
          size="large"
          margin={4}
          disabled={true}
        >
          Large
        </Button>
      </Pane>
    </>
  );
}

function LowEmphasisButtons() {
  return (
    <>
      <Text>Low Emphasis with Icon</Text>
      <Pane>
        <Button
          appearance="lowEmphasis"
          iconBefore={<Plus color="#1C96A3" width={16} height={16} />}
          size="small"
          margin={4}
        >
          Small
        </Button>
        <Button
          appearance="lowEmphasis"
          iconBefore={<Plus color="#1C96A3" width={20} height={20} />}
          size="medium"
          margin={4}
        >
          Medium
        </Button>
        <Button
          appearance="lowEmphasis"
          iconBefore={<Plus color="#1C96A3" width={24} height={24} />}
          size="large"
          margin={4}
        >
          Large
        </Button>
        <Button
          appearance="lowEmphasis"
          iconBefore={<Plus color="#1C96A3" width={24} height={24} />}
          size="large"
          margin={4}
          disabled={true}
        >
          Large
        </Button>
      </Pane>
    </>
  );
}

export default App;
