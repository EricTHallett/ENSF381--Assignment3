import flavors from "../data/flavors";
import FlavorItem from "./FlavorItem";

function FlavorCatalog({ onAdd }) {
    return (
        <div className="flavor-grid">
            {flavors.map((flavor) => (
                <FlavorItem
                    key={flavor.id}
                    flavor={flavor}
                    onAdd={onAdd}
                />
            ))}
        </div>
    );
}

export default FlavorCatalog;