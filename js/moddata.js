async function loadMod( json = "./data/mods.json" ){
  var object = {}
  object.json = await (await fetch( json )).json()
  object.generate = function( addon, index ){
    return `<article class="card" onclick="window.location.href = './viewer.html?id=${index}'"><header>
      <div class="flex three">
        <img src="${addon.icon}">
        <div style="white-space:nowrap">
          ${addon.name}<br>
          <font size=2><br>
            ${addon.writer}<br>
            适用于: ${addon.engine}
          </font>
        </div>
      </div>
    </header></article>`
  }
  object.search = function( kw = "" ){
    var result = []
    for( let addon of this.json ){
      if( addon.name.includes( kw ) || addon.description.includes( kw ) ){
        result.push( {...addon, html(){return object.generate(this, object.json.indexOf( addon ))}} )
      }
    }
    return result
  }
  return object
}