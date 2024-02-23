import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./components/ui/navigation-menu";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Textarea } from "./components/ui/textarea";

const SKU_IDS = [
  "code-1",
  "code-2",
  "code-3",
  "code-4",
  "code-5",
  "code-6",
  "code-7",
];

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [searchedCodesLen, setSearchedCodesLen] = useState(0);

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  function createCodesArr(input: string) {
    const finalStrArr = input.split("\n");
    console.log(finalStrArr, "IS THE FINAL ARR");
    setSearchedCodesLen(finalStrArr.length);
  }

  return (
    <div className="flex flex-col max-w-7xl mx-auto gap-9">
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

      {/* <h1>Welcome to Tauri!</h1>

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

      <p>{greetMsg}</p> */}

      <section className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="flex flex-col justify-center gap-4">
          <Card className="min-card-width min-card-height">
            <CardHeader>
              <CardTitle>SKU Codes ({searchedCodesLen})</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                className="h-[400px] bg-gray-300"
                placeholder="Add your SKU codes here..."
                onChange={(event) => createCodesArr(event.target.value)}
              ></Textarea>
            </CardContent>
          </Card>
          <Button variant={"secondary"}>Search Codes</Button>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <Card className="min-card-width min-card-height">
            <CardHeader>
              <CardTitle>Found Codes (0)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-300 h-[400px] py-2 px-3 rounded-md"></div>
            </CardContent>
          </Card>
          <Button variant={"secondary"}>Add to Queue</Button>
        </div>
      </section>
    </div>
  );
}

export default App;
