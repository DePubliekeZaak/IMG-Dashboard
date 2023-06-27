import GraphObject from '@local/d3_types'

export const html = () => {

    return `
    <!doctype html>

    <html lang="en" style="width:1024px;height:1024px">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    
      <title>Staging versie IMG graphs</title>
      <meta name="description" content="">
      <meta name="author" content="Joera Mulders">
    
      <link rel="stylesheet" href="https://img.publikaan.nl/staging-visualisations/styles/main.css">

      <style>

        .img-graph-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .img-graph-container-4 {
          width: 100%;
        }
        @media (min-width: 760px) {
          .img-graph-container-4 {
            width: calc(50% - 1.3333333333rem);
          }
        }
        @media (min-width: 1400px) {
          .img-graph-container-4 {
            width: calc(33% - 1.5rem);
          }
        }

      </style>
    </head><body id="development" style="width:100%;height:100%"><main data-img-graph-preset="dashboard" style="background:#eee;"></main></body></html>`;
}

export const createGraphGroupElement = (graphObject : GraphObject, window: Window, htmlContainer: HTMLElement) => {

  let element = window.document.createElement('article');
  element.id = graphObject.slug

  if (graphObject.elementClasslist) {

      for (let className of graphObject.elementClasslist) {
          element.classList.add(className);
      }
  }

  htmlContainer.appendChild(element);

  return element;
}