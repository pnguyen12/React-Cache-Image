# React-Cache-Image

Cache your images 💵

[![NPM](https://nodei.co/npm/react-cache-image.png)](https://nodei.co/npm/react-cache-image/)

## Installation

```sh
npm install react-cache-image
```

## Motivation

You don't need to prefetch your images if they aren't viewable when the page loads. This library takes advantage of the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) and loads your images based on the target element with an ancestor element. 

## Usage

```javascript
import React from 'react'
import { ReactCacheImage } from 'react-cache-image';

const options = {
  root: '#rootNode',
  rootMargin: '0px',
  threshold: 1.0
}

const YourComponent = () => (
  <>
    <ReactCacheImage 
      src={yourImg} 
      className="my-element" 
      width="300" 
      height="300" 
      alt="cool image" 
      options={options} 
     />
  </>
)

```

## Properties
| Property | Is Required? | Description | Default value |
|----------|--------------|-------------|---------------|
| alt  | false     | Alt attribute | none |  
| className | **true**| className used to observe | none |
| height    | false |The height of image | 100 |
| width    | false |The width of image | 100 |
| src   | **true** |The src of image | none |
| options   | false |Object used to specify rootNode, rootMargin, and threshold | null, 0px 1.0 |
| testable | false | Test when the image is loaded. You will see a console.info when the image is scrolled into view | false |
