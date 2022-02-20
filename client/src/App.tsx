import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page } from "./containers/Page";
import { CreatePost } from "./containers/CreatePost";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import EventContainer from "./containers/EventContainer";
import { useAuth0 } from "@auth0/auth0-react";
import ServiceContainer from "./containers/ServiceContainer";

export function App() {
  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <Routes>
          <Route path="/" element={<EventContainer />} />
          <Route path="/callback/*" element={<EventContainer />} />
          <Route path="/events" element={<EventContainer />} />
          <Route path="/services" element={<ServiceContainer />} />
          <Route path="/events/:slug" element={<EventContainer />} />
          <Route path="/services/:slug" element={<ServiceContainer />} />
          <Route
            path="/new"
            element={
              <Page>
                <CreatePost />
              </Page>
            }
          />
        </Routes>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
}
