export default function TabButton({children}) {
    // in order to get the text between the components
    // we use special prop name "children"
    // it's called component composition
    return (
        <li>
            <button>{children}</button>
        </li>
    );
}