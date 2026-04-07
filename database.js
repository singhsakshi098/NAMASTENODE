const { MongoClient} = require('mongodb');

const url =
   'mongodb+srv://sakshisingh7384_db_user:****@namastenode.k8zdzzx.mongodb.net/';

   const client = new MongoClient(url);
   const dbName = 'HelloWorld';

   async function main() {
    await client.connect();
    console.log("Database connected successfully")
    const db = client.db(dbName);
    const collection = db.collection("user");

    //create

    const data = {
     "firstname": "akshay",
     "lastname": "kumar",
     "country": "India",
    };

// const insertData = await collection.insertMany([data])
//     console.log("data inserted = ", insertData)

//find all the documents with a filter of ftrstame:akshay

const result = await collection.find({firstname: "akshay"}).toArray();
console.log("result =>" , result);


   //read

//    const findData = await collection.find({}).toArray();
//     console.log("All data :", findData)

     return "done";
   }


   main().then(console.log)
    .catch(console.error)
    .finally(() => client.close());


     //installing mongodb by npm i mongodb then it going to the internet and fetching the library and pushing that library here
     
// go and try to explore documentation of mongodb