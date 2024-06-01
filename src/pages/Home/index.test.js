import { fireEvent, render, screen, within } from "@testing-library/react";
import { DataProvider } from "../../contexts/DataContext";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !", undefined, { timeout: 1000 });
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    /*
    render(<Home />, { wrapper: DataProvider });
    const eventListContainer = await screen.findByTestId("nos-realisations");
    await screen.findAllByTestId("card-testid");
    */
   // WIP
  })
  it("a list a people is displayed", async () => {
    render(<Home />);
    await screen.findAllByTestId("people-testid");
  })
  it("a footer is displayed", () => {
    // to implement
  })
  it("an event card, with the last event, is displayed", () => {
    // to implement
  })
});
