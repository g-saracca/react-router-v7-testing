import { Outlet } from "react-router";
import type { Route } from "../+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nested Page" },
    { name: "description", content: "A Nested example" },
  ];
}

export default function Nested() {
    return (
        <div>
            <header>Nested Header</header>
            <div>
                <Outlet />
            </div>
        </div>
    )
}