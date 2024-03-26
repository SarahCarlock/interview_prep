class HashMap {
    constructor(size = 0) {
      this.hashmap = new Array(size)
        .fill(null);
    }
  
    hash(key) {
      let hashCode = 0;
      for (let i = 0; i < key.length; i++) {
        hashCode += hashCode + key.charCodeAt(i);
      }
      return hashCode % this.hashmap.length;
    }
  
    assign(key, value) {
      const arrayIndex = this.hash(key);
      this.hashmap[arrayIndex] = value;
    }
    
    retrieve(key) {
      const arrayIndex = this.hash(key);
      return this.hashmap[arrayIndex];
    }
  }
  
  module.exports = HashMap;

  // Save a new HashMap instance with a size of 3, in a constant myHashMap and use the new .hash() to log the result of hashing the key 'id'. Hash and log 'id' again. Are the logged values the same or are they different?
  const myHashMap = new HashMap(3);
  console.log(myHashMap.hash('id'));
  console.log(myHashMap.hash('id'));

  const employees = new HashMap(3);
  // At the bottom of the HashMap.js file store a new instance of HashMap with a size of 3 in a constant named employees. Assign employees the key-value pair '34-567' and 'Mara', then log the hash map.
  employees.assign('34-567', 'Mara');
  console.log(employees.hashmap);

  const glossary = new HashMap(3);
    glossary.assign('semordnilap', 'Words that form different words when reversed');
    // At the bottom of the HashMap.js file declare a new constant glossary that stores a hashmap with a size of 3. Add a new key of: 'semordnilap' With a value of: 'Words that form different words when reversed' 
    //Log the result of retrieving 'semordnilap' from your glossary.
    console.log(glossary.retrieve('semordnilap'));

    