export default function TabButton({children, onSelect, isSelected}) {
    // in order to get the text between the components
    // we use special prop name "children"
    // it's called component composition
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
}