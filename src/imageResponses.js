const fs = require('fs');

const spongegar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'image/png' });
  res.write(spongegar);
  res.end();
};

module.exports.getImage = getImage;
