const jsdom = require('jsdom')
const { JSDOM } = jsdom
const path = require('path')

const render = async (filename) => {
const filePath = path.join(process.cwd(), filename);
const dom = await JSDOM.fromFile(filePath, {
    runScripts: 'dangerously',
    resources: 'usable'
})

return new Promise ((resolve, reject)=> {

    dom.window.document.addEventListener('DOMContentLoaded', ()=> {
        resolve(dom);
    });
})



}

module.exports = render;