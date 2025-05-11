async function readPackageFromLocpack( locpack, callback ){
  var zip = await JSZip.loadAsync( locpack )
  var manifest = JSON.parse(await zip.file( "Package.json" ).async( "string" ))
  callback( manifest, zip )
  zip.file( "Package.json", JSON.stringify( manifest, 0, 2 ))
  return "data:application/locpack;base64," + await zip.generateAsync({type: "base64"})
}