# Introduction
This repository represents a tool for validating maDMP against RDA mdDMP schema. It depends on [AJV](https://ajv.js.org/). This tool developed using the most basics of HTML and JavaScript.

# Used tools
- [AJV](https://ajv.js.org/) which is used for json files validating.
- [AJV Errors](https://www.npmjs.com/package/ajv-errors) which is used to handle resulting error messsages.
- [Browserify](http://browserify.org/) which is used to require('modules') in the browser by bundling up all dependencies 

# Getting statrted
- For Chrome users, add this extension to your browser [Allow-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en-US) (It's for the URL checking feature)
- Run index.html
- Pasete your maDMP and click validate button to see the result

- For testing the tool, you can use this full maDMP json file:
[Full maDMP](https://github.com/hertai86/validating-machine-actionable-DMP/blob/master/testingExamples/fullmaDMP.json)  

## Schema used to validate
[Full schema](https://github.com/hertai86/validating-machine-actionable-DMP/blob/master/schema.json)  

# Contributors
- [Ahmad Alhirthani](https://orcid.org/0000-0003-0241-0268) <a href="https://orcid.org/0000-0003-0241-0268" target="orcid.widget" rel="noopener noreferrer" style="vertical-align:top;"><img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" style="width:1em;margin-right:.5em;" alt="ORCID iD icon">orcid.org/0000-0002-1223-9620</a>
- [Hasan Alkhatib](https://orcid.org/0000-0003-0241-0268) <a href="https://orcid.org/0000-0003-0241-0268" target="orcid.widget" rel="noopener noreferrer" style="vertical-align:top;"><img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" style="width:1em;margin-right:.5em;" alt="ORCID iD icon">orcid.org/0000-0002-1223-9620</a>


# LICENCE
[MIT](https://github.com/hertai86/Validating-machine-actionable-DMP/blob/master/LICENSE)  
