import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";

const collection = new Collection<User, Userprops>(
    "http://localhost:3000/users",
    (json: UserProps) => User.buildUser(json)
);

collection.on("change", () => {
    console.log(collection);
});

collection.fetch();
