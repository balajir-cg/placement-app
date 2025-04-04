import { Client, Databases } from 'appwrite'

const client = new Client();
  
client
    .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_PROJECT!);
  
const databases = new Databases(client);

export { client, databases };
    
  