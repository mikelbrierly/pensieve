// import mockResponse from "../mockResponse";
const HtmlTableToJson = require("html-table-to-json");

export interface Acronym {
  Name: string;
  Definition: string;
  Example?: string;
}

export const search = async (term: string) => {
  // const prodDomain = "https://cutover.atlassian.net";
  const prodDomain = "http://localhost:8010/proxy";
  const devProxy = "http://localhost:8010/proxy";

  const testToken: string = process.env.ATLASSIAN_TOKEN;

  const domain = process.env.NODE_ENV === "development" ? devProxy : prodDomain;
  const cutoverWiki: string = `${domain}/wiki/rest/api/content/1559887921?expand=body.storage`;

  async function fetchAcronyms(endpoint: string, token: string) {
    const getRawDefinitions = async () => {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return response.json();
    };

    const rawDefinitions = await getRawDefinitions();

    const parsedAcronyms = [].concat(
      ...HtmlTableToJson.parse(rawDefinitions.body.storage.value).results
    );

    const acronym: Acronym = parsedAcronyms.filter((item: Acronym) => {
      return item.Name.toLowerCase() === term.toLowerCase();
    })[0];
    return acronym;
  }
  return await fetchAcronyms(cutoverWiki, testToken);
};
