import { useParams } from "react-router-dom";
import { Event } from "./Event";
import { Page } from "./Page";

export default function EventContainer() {
  const { slug } = useParams();
  return <Page>{slug ? <Event id={slug} /> : <p>yo</p>}</Page>;
}
