# MongoDB

```bash
mongosh
```

## Create db `test`

```bash
use test
```

## Create collection `users`

```javascript
db.createCollection("users");
// or
db.users.insertOne({ name: "John Doe", age: 30 });
```

## Insert documents into collection `users`

```javascript
db.users.insertOne({ name: "Jane Doe", age: 25 });
// or
db.users.insertMany([
  { name: "John Doe", age: 30 },
  { name: "Jane Doe", age: 25 },
  { name: "Alice Doe", age: 35 },
  { name: "Bob Doe", age: 40 },
  { name: "Charlie Doe", age: 45 },
  { name: "David Doe", age: 50 }
]);
```

## List collections

```javascript
show collections
```

## List documents from collection `users`

```javascript
db.users.find();
```

## Filter documents in the collection `users`

```javascript
db.users.find({ name: "John Doe" });
db.users.find({ age: { $gt: 25 } });
```

## Update documents in the collection `users`

```javascript
db.users.updateOne({ name: "John Doe" }, { $set: { age: 35 } });
// or
db.users.updateMany({ age: { $lt: 30 } }, { $set: { age: 30 } });
// or
db.users.updateMany({}, {
    $set: {
        status: true
    }
});
```

## Delete documents from the collection `users`

```javascript
db.users.deleteOne({ name: "John Doe" });
// or
db.users.deleteMany({ age: { $lt: 30 } });
db.users.deleteMany({});
```

## Delete collection `users`

```javascript
db.users.drop();
```

## Drop db `test`

```javascript
db.dropDatabase();
```

## Count documents in collection `users`

```javascript
db.users.count();
// or
db.users.count({ age: { $gt: 30 } });
```

## Sort documents in `users`

```javascript
db.users.find().sort({ age: 1 });
db.users.find().sort({ age: -1 });
```

## Limit documents in `users`

```javascript
db.users.find().limit(3);
```

## Skip documents in `users`

```javascript
db.users.find().skip(3);
```