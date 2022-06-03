import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadCategories, loadRegions } from '../modules/actions';

import RegionsContainer from '../container/RegionsContainer';

import CategoriesContainer from '../container/CategoriesContainer';

import RestaurantsContainer from '../container/RestaurantsContainer';

export default function RestaurantsSearch() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <h2>레스토랑 조회 구현하기</h2>
      <hr />
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}