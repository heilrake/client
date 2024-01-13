import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import App from "./App.tsx";
import "./index.css";
import client from "./apollo/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
//json-graphql-server db.ts
