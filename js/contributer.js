async function loadConr( json = "./data/contributer.json" ){
  var retv = {}
  retv.json = await (await fetch( json )).json()
  retv.html = ( people ) => {
    return `<article class="card no-border">
      <header>
        <a href="${people.link}">
          <img src="${people.avatar}" width="32px" style="margin-bottom: -10px;border-radius: 50%;">
          <h4>${people.name}</h4>
        </a>
      </header>
    </article>`
  }
  return retv
}