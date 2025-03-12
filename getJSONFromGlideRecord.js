function getJSONFromGlideRecord (glideRecord) {
    const resultJson = {};
    
   if (glideRecord.isValid() && glideRecord.isValidRecord()) {
        const fields = Object.keys(glideRecord);
        for (let i = 0; i < fields.length; i++) {
            const glideElement = glideRecord.getElement(fields[i]);
            if (glideElement != null && !glideElement.nil()) {
                resultJson[glideElement.getName()] = glideElement.toString();
            }
          }
    }

    return JSON.stringify(resultJson);
}



const glideRecord = new GlideRecord('incident');
getJSONFromGlideRecord(glideRecord);