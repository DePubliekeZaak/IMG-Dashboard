export const html = () => {

    return `
    <!doctype html>

    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    
      <title>Staging versie IMG graphs</title>
      <meta name="description" content="">
      <meta name="author" content="Joera Mulders">
    
      <link rel="stylesheet" href="./styles/main.css">
    
    </head>
    
    
    <body id="development">
    
      <main>
        <div class="content-page">
          <div class="layout">
            <div class="section">
              <section class="container">
    
                      <div data-img-graph-preset="dashboard"></div>
          
              </section>
            </div>
          </div>
        </div>
      </main>
    
    
      <script src="./scripts/bundle.js"></script>
    </body>
    </html>

    
    `;
}