Blockly.Blocks['nuevo_alb_m'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Nuevo albúm");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['contar_figurita'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Contar figurita");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['faltan_figuritas'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("¿Faltan figuritas?");
    this.setOutput(true, "Boolean");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['comprar_figurita'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Comprar figurita");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mientras'] = {
  init: function() {
    this.appendValueInput("CONDITION")
        .setCheck("Boolean")
        .appendField("Mientras");
    this.appendStatementInput("DO")
        .setCheck(null)
        .appendField("Hacer");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pegar_figurita'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pegar figurita");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};