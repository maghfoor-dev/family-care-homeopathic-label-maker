import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./components/ui/navigation-menu";
import { Button } from "./components/ui/button";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <NavigationMenu className="justify-between p-4 max-w-7xl">
        <p>FAMILY CARE</p>
        <NavigationMenuLink
          className={`${navigationMenuTriggerStyle()} underline cursor-pointer bg-transparent`}
        >
          Medicine List
        </NavigationMenuLink>
        <Button className="bg-[#FFE882] text-black hover:bg-[#FFE882] hover:opacity-80">
          Print Queue
        </Button>
      </NavigationMenu>

      <h1>Welcome to Tauri!</h1>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
