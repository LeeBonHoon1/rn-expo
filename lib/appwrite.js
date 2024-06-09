import { Account, Client, ID } from "react-native-appwrite";
const client = new Client();

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.rn.aora",
  projectId: "666580d9000febc56a7e",
  databaseId: "66658286002f6445b4fe",
  userCollectionId: "666582a60019ce3d54fa",
  videoCollectionId: "666582e00011a88e83c5",
  storageId: "6665846d00212e6d5d8e",
};

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
