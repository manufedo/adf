Blockly.JavaScript['nuevo_alb_m'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'nuevoAlbum();';
  return code;
};

Blockly.JavaScript['contar_figurita'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'contarFigurita();';
  return code;
};

Blockly.JavaScript['faltan_figuritas'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'faltanFiguritas()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE ];
};

Blockly.JavaScript['comprar_figurita'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'comprarFigurita();';
  return code;
};

Blockly.JavaScript['mientras'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_FUNCTION_CALL);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'DO');
  // TODO: Assemble JavaScript into code variable.
  var code = 'while '+ value_name + '{' + statements_name + '}';
  return code;
};

Blockly.JavaScript['pegar_figurita'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'pegarFigurita();';
  return code;
};

nuevoAlbum = function(){
  album = [false,false,false,false];
  cantFiguritas = 0;
  window.alert(window.alert(album.toString()));
  //window.alert(cantFiguritas.toString());
}

contarFigurita = function(){
  cantFiguritas++;
  //window.alert(cantFiguritas.toString());
}

faltanFiguritas = function(){
  for (const figurita of album){
    if (!figurita){
      //window.alert('faltan figus')
      return true;
    }
  }
  //window.alert('apa la papa')
  return false;
}

comprarFigurita = function(){
  nuevaFigurita = Math.floor(Math.random() * 4);
  //window.alert('la nueva figu es ' + nuevaFigurita.toString());
}

pegarFigurita = function(){
  album[nuevaFigurita] = true;
  window.alert(album.toString());
  window.alert('van '+ cantFiguritas.toString() + ' figus en total')
}