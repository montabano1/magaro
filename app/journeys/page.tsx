import { redirect } from "next/navigation";

// Old route — kept alive as a redirect so any existing inbound links
// (cards, email signatures, search results) land on the new
// /destinations page without a 404.
export default function JourneysRedirect() {
  redirect("/destinations");
}
