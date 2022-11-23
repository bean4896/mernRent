// .components/Search/index.js

import algoliasearch from "algoliasearch/lite";
import { orderBy } from "lodash";


import {
  InstantSearch,
  Hits,
  Highlight,
  Snippet,
  SearchBox,
  CurrentRefinements,
  useSearchBox,
} from "react-instantsearch-hooks-web";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);


const indexName = "mern";

function Hit({ hit }) {
  return (
    <div>
    <button/>
      <h2>
        <Highlight attribute="title" hit={hit} />
      </h2>
      <Snippet hit={hit} attribute="area" />
    </div>
  );
}

function PopularQueries({ queries, ...props }) {
  const { refine } = useSearchBox(props);

  return (
    <div>
      {queries.map((query) => (
        <button className="btn ml-4" key={query} onClick={() => refine(query)}>
          Look for "{query}"
        </button>
      ))}
    </div>
  );
}


export default function Search(props) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.4.5/themes/satellite-min.css"
        integrity="sha256-TehzF/2QvNKhGQrrNpoOb2Ck4iGZ1J/DI4pkd2oUsBc="
        crossorigin="anonymous"
      />
      <div className="backdrop -z-10" onClick={props.onConfirm}>
        <div className="lex-row align-middle justify-center"> 
          <InstantSearch
          className='z-100'
            searchClient={searchClient}
            indexName={indexName}
            initialUiState={{
              [indexName]: {
                query: 'Test query',
                page: 3,
              },
            }}
          >
            <SearchBox
              placeholder="Search for house"
              translations={{
                submitButtonTitle: "Envoyer",
              }}
            />
            <Hits hitComponent={Hit} />
            <CurrentRefinements
              transformItems={(items) => orderBy(items, "attribute", "asc")}
            />
            <PopularQueries queries={['downtown', 'redline']} />
          </InstantSearch>
        </div>
      </div>
    </>
  );
}
