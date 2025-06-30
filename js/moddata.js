async function loadMod( json = "./data/mods.json" ){
  const object = {};
  object.json = await (await fetch( json )).json()
  object.generate = function( addon, index ){
    return ` <div class="mod-card" onclick="window.location.href='viewer.html?id=${index}'">
        <img src="${addon.icon || 'imgs/default-mod.png'}"
             class="mod-card__image"
             onerror="this.src='imgs/icon-terraria.png'"
             alt="${addon.name}">
        <div class="mod-card__content">
          <h3 class="mod-card__title">${addon.name}</h3>
          <p class="mod-card__author">作者: ${addon.writer || '未知作者'}</p>
          <p class="mod-card__description">${addon.description || '暂无描述'}</p>
        </div>
        <div class="mod-card__footer">
          <span class="mod-card__engine">${addon.engine}</span>
        </div>
      </div>`
  }
  object.search = function( kw = "" ){
    var result = []
    for( let addon of this.json ){
      if( (addon.name || "").includes( kw ) || (addon.description || "").includes( kw ) ){
        result.push( {...addon, html(){return object.generate(this, object.json.indexOf( addon ))}} )
      }
    }
    return result
  }
  return object
}