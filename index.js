const uuidv4 = require("uuid/v4");
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const dynamodb = new AWS.DynamoDB.DocumentClient();

// 1. create an organization
// const orgId = uuidv4();

// var params = {
//   TableName: "happy-projects",
//   Item: {
//     PK: `ORG#${orgId}`,
//     SK: `#METADATA#${orgId}`,
//     name: "ABC Inc",
//     tier: "professional"
//   }
// };

// dynamodb.put(params, function(err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// 2. create an agile project in ABC Inc
// const abcOrgId = "fc889615-7bd7-4948-85c3-e357e41f69be";
// const projectId = uuidv4();

// var params = {
//   TableName: "happy-projects",
//   Item: {
//     PK: `ORG#${abcOrgId}`,
//     SK: `PRO#agile#${abcOrgId}`,
//     name: "Project B",
//     project_id: projectId
//   }
// };

// dynamodb.put(params, function(err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// 3. Edit an organization
// const abcOrgId = "fc889615-7bd7-4948-85c3-e357e41f69be";

// var params = {
//   TableName: "happy-projects",
//   Key: { PK: `ORG#${abcOrgId}`, SK: `#METADATA#${abcOrgId}` },
//   UpdateExpression: "set #org_id = :org_id",
//   ExpressionAttributeNames: { "#org_id": "org_id" },
//   ExpressionAttributeValues: {
//     ":org_id": abcOrgId
//   }
// };

// dynamodb.update(params, function(err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// 4. Find an Organization
// var params = {
//   TableName: "happy-projects",
//   Key: {
//     PK: "ORG#dd2a31f8-adc3-45e3-a77d-d00f6c7a1575",
//     SK: "#METADATA#dd2a31f8-adc3-45e3-a77d-d00f6c7a1575"
//   }
// };

// dynamodb.get(params, function(err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// 5. Find all projects of Happy Inc
// var params = {
//   TableName: "happy-projects",
//   KeyConditionExpression: "#PK = :PK and begins_with(#SK, :SK)",
//   ExpressionAttributeNames: { "#PK": "PK", "#SK": "SK" },
//   ExpressionAttributeValues: {
//     ":PK": "ORG#dd2a31f8-adc3-45e3-a77d-d00f6c7a1575",
//     ":SK": "PRO#"
//   }
// };

// dynamodb.query(params, function(err, data) {
//   if (err) console.log(err);
//   else console.log(data);
// });

// 6. Create Employees
