// .components/Search/index.js

import algoliasearch from "algoliasearch/lite";
import { useState } from "react";
import { orderBy } from "lodash";
import {
  InstantSearch,
  Hits,
  Highlight,
  HitsPerPage,
  Snippet,
  SearchBox,
  Pagination,
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
      <button />
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
      <div className="backdrop -z-10">
        <div className="searchmodal">
          <InstantSearch
            className="z-100"
            searchClient={searchClient}
            indexName={indexName}
          >
            <SearchBox placeholder="Search for house" />
            <Hits hitComponent={Hit} />
            <HitsPerPage
            className="hidden"
            defaultRefinement={12}
              items={[
                { label: "4 hits per page", value: 4, default: true },  
              ]}
            />
              <Pagination className="mt-4" defaultRefinement={2} />
            <CurrentRefinements
              transformItems={(items) => orderBy(items, "attribute", "asc")}
            />
            <PopularQueries queries={["downtown", "redline"]} />
          </InstantSearch>
        </div>
      </div>
    </>
  );
}
