const fs = require('fs');
const path = require('path');
const https = require('https');

const API_URL = 'https://crestone-help.seidoranalytics.com/api/connections.json';
const JSON_PATH = path.join(__dirname, '../src/components/CrestoneConnections/connections.json');
const WIDGET_PATH = path.join(__dirname, '../static/js/crestone-connections-widget.js');
const MARQUEE_WIDGET_PATH = path.join(__dirname, '../static/js/crestone-connections-marquee-widget.js');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to fetch: Status code ${res.statusCode}`));
        return;
      }
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error('Failed to parse response as JSON'));
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function run() {
  console.log(`Fetching latest connections from ${API_URL}...`);
  try {
    const data = await fetchJson(API_URL);
    console.log('Successfully fetched connections data.');

    // 1. Update src/components/CrestoneConnections/connections.json
    console.log(`Writing to ${JSON_PATH}...`);
    fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2) + '\n', 'utf8');
    console.log('connections.json updated successfully.');

    // 2. Update static/js/crestone-connections-widget.js
    console.log(`Updating ${WIDGET_PATH}...`);
    if (fs.existsSync(WIDGET_PATH)) {
      const widgetContent = fs.readFileSync(WIDGET_PATH, 'utf8');
      const startMarker = 'const FALLBACK_DATA = {';
      const endMarker = 'class CrestoneConnectionsWidget extends HTMLElement';

      const startIndex = widgetContent.indexOf(startMarker);
      const endIndex = widgetContent.indexOf(endMarker);

      if (startIndex === -1 || endIndex === -1) {
        console.warn(`Warning: Markers not found in ${WIDGET_PATH}`);
      } else {
        const beforePart = widgetContent.substring(0, startIndex);
        const afterPart = widgetContent.substring(endIndex);

        const jsonString = JSON.stringify(data, null, 2);
        const formattedJson = jsonString
          .split('\n')
          .map((line, idx) => idx === 0 ? line : '  ' + line)
          .join('\n');

        const newFallbackBlock = `const FALLBACK_DATA = ${formattedJson};\n\n  `;
        const newWidgetContent = beforePart + newFallbackBlock + afterPart;

        fs.writeFileSync(WIDGET_PATH, newWidgetContent, 'utf8');
        console.log('crestone-connections-widget.js updated successfully.');
      }
    } else {
      console.warn(`Warning: Widget file not found at ${WIDGET_PATH}`);
    }

    // 3. Update static/js/crestone-connections-marquee-widget.js
    console.log(`Updating ${MARQUEE_WIDGET_PATH}...`);
    if (fs.existsSync(MARQUEE_WIDGET_PATH)) {
      const marqueeContent = fs.readFileSync(MARQUEE_WIDGET_PATH, 'utf8');
      const startMarker = 'const FALLBACK_DATA = {';
      const endMarker = 'class CrestoneConnectionsMarqueeWidget extends HTMLElement';

      const startIndex = marqueeContent.indexOf(startMarker);
      const endIndex = marqueeContent.indexOf(endMarker);

      if (startIndex === -1 || endIndex === -1) {
        console.warn(`Warning: Markers not found in ${MARQUEE_WIDGET_PATH}`);
      } else {
        const beforePart = marqueeContent.substring(0, startIndex);
        const afterPart = marqueeContent.substring(endIndex);

        const jsonString = JSON.stringify(data, null, 2);
        const formattedJson = jsonString
          .split('\n')
          .map((line, idx) => idx === 0 ? line : '  ' + line)
          .join('\n');

        const newFallbackBlock = `const FALLBACK_DATA = ${formattedJson};\n\n  `;
        const newMarqueeContent = beforePart + newFallbackBlock + afterPart;

        fs.writeFileSync(MARQUEE_WIDGET_PATH, newMarqueeContent, 'utf8');
        console.log('crestone-connections-marquee-widget.js updated successfully.');
      }
    } else {
      console.warn(`Warning: Marquee widget file not found at ${MARQUEE_WIDGET_PATH}`);
    }

    console.log('All local backups are up to date!');
  } catch (error) {
    console.error('Error updating connections:', error);
    process.exit(1);
  }
}

run();
