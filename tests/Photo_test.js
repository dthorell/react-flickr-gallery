import assert from 'assert';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import Photo from '../src/components/Photo.jsx';

const {
  renderIntoDocument,
  findRenderedDOMComponentWithClass
} = ReactTestUtils;

/** @test {Photo} */
describe('Photo', () => {
  const photoData = {
    owner: 'lorem-ipsum',
    title: 'sample-title',
    url: 'http://www.example.com/image.jpg'
  };

  /** @test {Photo#renderImage} */
  it('renders image', () => {
    const photoContainer = renderIntoDocument(
      <Photo
        load={true}
        owner={photoData.owner}
        title={photoData.title}
        url={photoData.url} />
    );

    const image =
      findRenderedDOMComponentWithClass(photoContainer, 'photo-img');

    assert(image);
  });

  /** @test {Photo#renderPlaceholder} */
  it('renders placeholder', () => {
    const photoContainer = renderIntoDocument(
      <Photo
        load={false}
        owner={photoData.owner}
        title={photoData.title}
        url={photoData.url} />
    );

    const placeholder =
      findRenderedDOMComponentWithClass(photoContainer, 'photo-placeholder');

    assert(placeholder);
  });
});