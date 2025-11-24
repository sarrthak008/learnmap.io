function convertToText(json) {
  let output = `Title: ${json.title}\n\n`;

  json.levels.forEach(level => {
    output += `Level: ${level.level}\n`;
    level.modules.forEach(mod => {
      output += `  Module: ${mod.module}\n`;
      mod.topics.forEach(topic => {
        output += `    - ${topic}\n`;
      });
    });
    output += "\n";
  });

  output += "Resources:\n";
  json.resources.forEach(r => {
    output += `  • ${r.name} (${r.url})\n`;
  });

  return output;
}
