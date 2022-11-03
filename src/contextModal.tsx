import { search } from "./lib/search";
import { createRoot } from "react-dom/client";
import { Box, Button, Heading } from "grommet";

chrome.runtime.onMessage.addListener(async function (request, sender) {
  if (request.selectedText) {
    const body = document.querySelector("body");
    const modal = document.createElement("div");
    modal.id = "contextModal";

    if (body) {
      body.prepend(modal);
    }

    const container = document.getElementById("contextModal");
    const modalRoot = createRoot(container!);
    const searchResults = await search(request.selectedText);

    const closeModal = () => (container ? container.remove() : null);

    modalRoot.render(
      <>
        {/* TODO: figure out Grommet Layer component instead */}
        <Box
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            zIndex: "999",
            background: "rgba(0, 0, 0, .15)",
          }}
          onClick={closeModal}
        />
        <Box
          style={{
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            inset: "50% auto auto 50%",
            width: "32rem",
            height: "25rem",
            top: "50%",
            left: "50%",
            marginTop: "-12.5rem",
            marginLeft: "-12.5rem",
            zIndex: "1000",
            background: "white",
            borderRadius: "16px",
            boxShadow: "0 6px 24px 0 rgb(151 164 170 / 60%)",
            padding: "32px",
          }}
        >
          <Heading>{request.selectedText}</Heading>
          <Button type="button" onClick={closeModal}>
            X
          </Button>
          <Box>
            {searchResults
              ? searchResults.Definition
              : `No Cutover definitions for ${request.selectedText} found`}
          </Box>
          <Button secondary type="button" onClick={closeModal}>
            Close
          </Button>
          {searchResults && (
            // TODO Make icon button with "copy" icon, and show checkmark after click
            <Button
              primary
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(searchResults.Definition);
              }}
            >
              Copy Definition
            </Button>
          )}
        </Box>
      </>
    );
  }
});
