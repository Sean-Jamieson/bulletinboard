import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page } from "./containers/Page";
import { CenterPost } from "./containers/CenterPost";
import { CreatePost } from "./containers/CreatePost";
import { Service } from "./containers/Service";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Page>
              <CenterPost />
            </Page>
          }
        />
        <Route
          path="/events/:region/:slug"
          element={
            <Page>
              <CenterPost />
            </Page>
          }
        />
        <Route
          path="/services/:region/:slug"
          element={
            <Page>
              <Service />
            </Page>
          }
        />
        <Route
          path="/new/:region"
          element={
            <Page>
              <CreatePost />
            </Page>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
