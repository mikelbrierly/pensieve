import React, { useState } from "react";
import { search, Acronym } from "./lib/search";
import { Box, Button as GrommetButton } from "grommet";
import "./App.css";
import { theme } from "./theme";

function App() {
  const [data, setData] = useState<Acronym | null>(null);

  const userSearch = async (event: React.ChangeEvent<HTMLInputElement>) =>
    setData(await search(event.target.value.toLowerCase()));

  return (
    <Box
      direction="column"
      align="center"
      background="light-2"
      round="16px"
      border={{
        color: theme.global.colors["primary-1"],
        size: "1px",
      }}
      pad={theme.global.edgeSize.small}
      margin={theme.global.edgeSize.small}
    >
      <Box direction="row" align="center">
        <form>
          <label>
            Search
            <input type="search" name="search" onChange={userSearch} />
          </label>
        </form>
      </Box>
      {/* TODO: debounce this a little and only show "no results" after search is made */}
      <Box align="flex-start">
        {data !== undefined && data !== null && (
          <>
            <article>{data.Definition}</article>
            <p>{data.Example}</p>
            <GrommetButton
              type="button"
              color="primary"
              label="Copy Text"
              value="copy"
            />
          </>
        )}
        {!data && (
          <>
            <h3>No results found 🤷‍♂️</h3>
          </>
        )}
      </Box>
    </Box>
  );
}

export default App;
