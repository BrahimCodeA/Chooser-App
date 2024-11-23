import "./SearchComponent.scss";

type SearchComponentProps = {
  onCloseSearch: () => void;
};

export default function SearchComponent({
  onCloseSearch,
}: SearchComponentProps) {
  return (
    <div className="search-container show">
      <input type="text" placeholder="Rechercher" />
      <button onClick={onCloseSearch}>Fermer</button>
      <h2>Les plus populaires actuellement</h2>
    </div>
  );
}
