import { Outlet } from "react-router";

export default function General() {
    return (
        <div>
        <header>
            <span>General Layout</span>
        </header>
        <div>
            <Outlet />
        </div>
        <footer>
            <p>Footer content</p>
        </footer>
        </div>
    );
}