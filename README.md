There are a number of node version managers for Windows. Here we use nvm-windows, which is highly respected among node developers.
Install the latest version using your installer of choice from the nvm-windows/releases page. After nvm-windows has installed, open a command prompt (or PowerShell) and enter the following command to download the most recent LTS version of nodejs and npm:  
`nvm install lts`  
At time of writing the LTS version of nodejs is 22.22.2. You can set this as the current version to use with the command below:  
`nvm use 22.22.2`

Using npm  
Next to Node itself, npm is the most important tool for working with Node applications. npm is used to fetch any packages (JavaScript libraries) that an application needs for development, testing, and/or production, and may also be used to run tests and tools used in the development process.


1. First create a directory for your new application and navigate into it:  
`mkdir myapp`   
`cd myapp`  

2. Use the npm init command to create a package.json file for your application. This command prompts you for a number of things, including the name and version of your application and the name of the initial entry point file (by default this is index.js). For now, just accept the defaults:  
`npm init`

3. Now install Express in the express_0 directory and save it in the dependencies list of your package.json file:  
`npm install express`

4. You can start the server by calling node with the script in your command prompt: `node app.js`  
Example app listening on port 3000!