import { useState, FormEvent, Dispatch } from "react";
import { isQueryValid } from "./validationsRules";
import { searchPexelsApi } from "../../../services/pexels.service";

export interface Image {
  id: number;
  alt: string;
  src: {
    portrait: string;
  };
}
interface SearchBarProps {
  setImages: Dispatch<Image[]>;
}

export default function SearchBar({ setImages }: SearchBarProps) {
  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isQueryValid(query)) {
      const data = await searchPexelsApi(query);
      
      setImages(data.photos);
    } else {
      setError("La query no es valida");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-center w-full">
      <input
        className="font-mono w-full font-bold text-center left-0 top-0 flex  justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        placeholder="Ingresa el nombre de la imagen que deseas visualizar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button
        className="mt-6 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
