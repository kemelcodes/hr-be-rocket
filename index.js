const fs = require('fs');
const path = require('path');

const writeJSON = async (file_path, contents) => {
  try {

		/* checks if path is valid */
    if (!file_path || typeof file_path !== 'string') {
      throw new Error('Invalid file_path');
    }
		
		/* checks if file contents is valid */
    if (!contents || typeof contents !== 'object') {
      throw new Error('Invalid Data');
    }

    
    const dirname = path.dirname(file_path);
    await createDirectoryIfNotExists(dirname);

		const json_string = JSON.stringify(contents, null, 2);
    fs.writeFileSync(file_path, json_string);
  } catch (error) {
    throw new Error('Invalid Data');
  }
};

const createDirectoryIfNotExists = async (path) => {
 try {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });   
    } 
 } catch(error) {
    throw new Error(`Error creating directory: ${error}`);
 }
};


module.exports = {
    // Do not modify the names of the exports
    writeJSON: writeJSON,
    createDirectoryIfNotExists: createDirectoryIfNotExists
};
