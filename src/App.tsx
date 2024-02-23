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
  const [addedCodes, setAddedCodes] = useState<string[]>([]);
  const [foundCodes, setFoundCodes] = useState<string[]>([
    "code-1",
    "code-2",
    "code-3",
    "code-4",
    "code-5",
    "code-6",
    "code-7",
    "code-1",
    "code-2",
    "code-3",
    "code-4",
    "code-5",
    "code-6",
    "code-7",
    "code-1",
    "code-2",
    "code-3",
    "code-4",
    "code-5",
    "code-6",
    "code-7",
  ]);

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  function createCodesArr(input: string) {
    // splitting codes by lines
    const inputCodes: string[] = input.split("\n");

    // removing any spaces from the codes
    const removedSpacesCodes: string[] = inputCodes.map((code) =>
      code.replace(/\s/g, "")
    );

    // removing any empty strings
    const finalCodes = removedSpacesCodes.filter((code) => code.length > 0);

    //settings codes to states
    setAddedCodes(finalCodes);
  }

  function handleFindCodes() {
    const foundCodesArr: string[] = [];

    for (const code of addedCodes) {
      console.log(code);
      if (SKU_IDS.includes(code)) {
        foundCodesArr.push(code);
      }
    }

    console.log(foundCodes, "ARE THE FOUND CODES");

    setFoundCodes(foundCodesArr);
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
              <CardTitle>SKU Codes ({addedCodes.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                className="h-[400px] bg-gray-300"
                placeholder="Add your SKU codes here..."
                onChange={(event) => createCodesArr(event.target.value)}
              ></Textarea>
            </CardContent>
          </Card>
          <Button variant={"secondary"} onClick={handleFindCodes}>
            Search Codes
          </Button>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <Card className="min-card-width min-card-height">
            <CardHeader>
              <CardTitle>Found Codes ({foundCodes.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-300 h-[400px] py-2 px-3 rounded-md flex flex-col gap-1 overflow-scroll overflow-x-hidden">
                {foundCodes.map((foundCode) => {
                  return (
                    <Card className="bg-[#F2F5DE] p-2 text-sm">
                      <div>{foundCode}</div>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
          <Button variant={"secondary"}>Add to Queue</Button>
        </div>
      </section>
      <div>{JSON.stringify(addedCodes, null, 0)}</div>
    </div>
  );
}

export default App;
