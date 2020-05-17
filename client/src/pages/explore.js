import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCertificate, faSearch,
} from '@fortawesome/free-solid-svg-icons';
import Page from '../Components/Layout/Page';
import { postMethod } from '../utils/Integration';
import {
  List, ListContent, FrontIcon, ListTitle, ListAction, URL,
} from '../Components/Basic/List';
import { DimText, NotFound } from '../Components/Basic/Text';
import { SecondaryBtn } from '../Components/Basic/Button/Button';
import {
  InputGroup, Input, Label, InputButton, Item,
} from '../Components/Basic/Form';
import {
  SearchForm, Showing, SortGroup, SortItem, SearchListItem,
} from '../Components/Extended/Search';

function Explore({ payloadData, pages, searchData }) {
  const [payload, setPayload] = useState(payloadData);
  const [page, setPage] = useState(pages);
  const [search, setSearch] = useState(searchData);
  const [searchInput, setSearchInput] = useState('');
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (payload.length === 0 || page.total <= 1) {
      setLoader(false);
    } else {
      setLoader(true);
    }
  }, [page]);

  const loadData = async () => {
    if (page.current < page.total) {
      const newPayload = await postMethod('explore', { page: page.current + 1 });
      setPayload([...payload, ...newPayload.payload]);
      setPage(newPayload.page);
      setSearch(newPayload.search);
      if (newPayload.page.current === newPayload.page.total) {
        setLoader(false);
      }
    } else {
      setLoader(false);
    }
  };
  const reQuery = async (searchQuery = search.queryBy,
    sortBy = search.sortBy, orderBy = search.orderBy) => {
    const queryPayload = await postMethod('explore', {
      page: 1, search: searchQuery, sortBy, orderBy,
    });
    setPayload(queryPayload.payload);
    setPage(queryPayload.page);
    setSearch(queryPayload.search);
  };
  const keyPressKeyPush = (e) => {
    if (e.keyCode === 13) {
      reQuery(searchInput);
    }
  };
  const handleSortBy = async (sortBy, orderBy) => {
    await reQuery(search.query, sortBy, orderBy);
  };

  return (
    <Page>
      <SearchForm>
        <Item>
          <InputGroup>
            <Input
              type="text"
              name="keywords"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => keyPressKeyPush(e)}
              required
            />
            <Label>Search</Label>
            <InputButton tertiary type="button" onClick={() => reQuery(searchInput)}><FontAwesomeIcon icon={faSearch} /></InputButton>
          </InputGroup>
        </Item>
        <Showing>
          Showing 0 –
          {' '}
          {(page.current === page.total) ? page.items : page.current * page.limit}
          {' '}
          of
          {' '}
          {page.items}
          {' '}
          results
          {' '}
          {search.queryBy !== '' && (
          <>
            for &quot;
            <span>
              {search.queryBy}
            </span>
            &quot;
          </>
          )}
        </Showing>
        <SortGroup>
          <span>Sort By</span>
          <SortItem onClick={() => handleSortBy('createdAt', 'DESC')} active={search.sortBy === 'createdAt' && search.orderBy === 'DESC'}>Recent</SortItem>
          <SortItem onClick={() => handleSortBy('viewCount', 'DESC')} active={search.sortBy === 'viewCount' && search.orderBy === 'DESC'}>Viewed</SortItem>
          <SortItem onClick={() => handleSortBy('hitCount', 'DESC')} active={search.sortBy === 'hitCount' && search.orderBy === 'DESC'}>Used</SortItem>
        </SortGroup>
      </SearchForm>
      {payload.length !== 0 && (
      <List>
        {payload.map((p) => (
          <Link key={p.id} href={`/view/${p.id}`}>
            <SearchListItem key={p.id}>
              <FrontIcon active={p.owner.displayName === 'getJSON'}>
                <FontAwesomeIcon icon={faCertificate} />
              </FrontIcon>
              <ListContent>
                <ListTitle>{p.title}</ListTitle>
                <DimText>{p.description}</DimText>
                <URL>
                  {process.env.PAYLOAD_URL}
                  {p.url}
                </URL>
              </ListContent>
              <ListAction>
                <DimText>
                  Hit:
                  {' '}
                  {p.hitCount}
                </DimText>
                <DimText>
                  View:
                  {' '}
                  {p.viewCount}
                </DimText>
              </ListAction>
            </SearchListItem>
          </Link>
        ))}
      </List>
      )}
      {loader && <SecondaryBtn margin="0px 0px 28px 0px" onClick={() => loadData()}> Load More </SecondaryBtn>}
      {payload.length === 0 && <NotFound />}
    </Page>
  );
}

Explore.getInitialProps = async (ctx) => {
  const payloadData = await postMethod('explore');
  if (!payloadData.success) {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
    return null;
  }
  return {
    payloadData: payloadData.payload,
    pages: payloadData.page,
    searchData: payloadData.search,
  };
};

export default Explore;
