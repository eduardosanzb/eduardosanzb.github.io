import * as React from "react";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";

class App extends React.Component {
  public render() {
    return (
      <Fabric>
        <DefaultButton>I am a button.</DefaultButton>
      </Fabric>
    );
  }
}

export default App;
