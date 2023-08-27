import { MongoClient } from "mongodb"

export async function connectDatabase(){

    const mongoClient = new MongoClient('mongodb+srv://alibaltaci13:g4MtCxMHwIgohwcA@cluster0.vzhdfac.mongodb.net/react_multi_page_website?retryWrites=true&w=majority')

    const data = await mongoClient.db().collection('services').find({}).toArray()
   
    // const client = await MongoClient.connect('mongodb+srv://alibaltaci13:g4MtCxMHwIgohwcA@cluster0.vzhdfac.mongodb.net/react_multi_page_website?retryWrites=true&w=majority',
    //     {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true
    //     }
    // )

    return data;
    
}