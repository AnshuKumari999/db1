test> use humanresource
switched to db humanresource
humanresource> db.employ.insertMany([{
...
...   "firstName": "John",
...   "lastName": "Doe",
...   "salary": "25000",
...   "department": "HR",
...   "lastCompany": "X",
...   "lastSalary": "10000",
...   "overallExp": "2",
...   "contactInfo": "1234567890",
...   "yearGrad": "2016",
...   "gradStream": "CSE"
... },{
...   "firstName": "Rohan",
...   "lastName": "Jame",
...   "salary": "30000",
...   "department": "Technical",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "1",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...   "firstName": "Jame",
...   "lastName": "Doe",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "20000",
...   "overallExp": "1",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "ECE"
... },{
...
...   "firstName": "Sao",
...   "lastName": "Avika",
...   "salary": "30000",
...   "department": "Sales",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...   "firstName": "Jame",
...   "lastName": "roh",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "EEE"
... },{
...
...   "firstName": "Rohan",
...   "lastName": "Jame",
...   "salary": "30000",
...   "department": "Technical",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "1",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...
...   "firstName": "Jame",
...   "lastName": "Doe",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "20000",
...   "overallExp": "1",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "ECE"
... },{
...
...   "firstName": "Sao",
...   "lastName": "Avika",
...   "salary": "30000",
...   "department": "Sales",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...
...   "firstName": "Jame",
...   "lastName": "Doe",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "EEE"
... },{
...
...   "firstName": "Rohan",
...   "lastName": "Jame",
...   "salary": "30000",
...   "department": "Technical",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "1",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...
...   "firstName": "Jame",
...   "lastName": "Doe",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "20000",
...   "overallExp": "1",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "ECE"
... },{
...
...   "firstName": "Sao",
...   "lastName": "Avika",
...   "salary": "30000",
...   "department": "Sales",
...   "lastCompany": "Y",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "1234567860",
...   "yearGrad": "2015",
...   "gradStream": "CSE"
... },{
...
...   "firstName": "Jame",
...   "lastName": "Doe",
...   "salary": "35000",
...   "department": "Accounts",
...   "lastCompany": "Z",
...   "lastSalary": "15000",
...   "overallExp": "2",
...   "contactInfo": "123567890",
...   "yearGrad": "2019",
...   "gradStream": "EEE"
... }])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("6347f2b1332d0f6411320180"),
    '1': ObjectId("6347f2b1332d0f6411320181"),
    '2': ObjectId("6347f2b1332d0f6411320182"),
    '3': ObjectId("6347f2b1332d0f6411320183"),
    '4': ObjectId("6347f2b1332d0f6411320184"),
    '5': ObjectId("6347f2b1332d0f6411320185"),
    '6': ObjectId("6347f2b1332d0f6411320186"),
    '7': ObjectId("6347f2b1332d0f6411320187"),
    '8': ObjectId("6347f2b1332d0f6411320188"),
    '9': ObjectId("6347f2b1332d0f6411320189"),
    '10': ObjectId("6347f2b1332d0f641132018a"),
    '11': ObjectId("6347f2b1332d0f641132018b"),
    '12': ObjectId("6347f2b1332d0f641132018c")
  }
}
humanresource> db.employ.find()
[
  {
    _id: ObjectId("6347f2b1332d0f6411320180"),
    firstName: 'John',
    lastName: 'Doe',
    salary: '25000',
    department: 'HR',
    lastCompany: 'X',
    lastSalary: '10000',
    overallExp: '2',
    contactInfo: '1234567890',
    yearGrad: '2016',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6347f2b1332d0f6411320181"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: '30000',
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '1',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6347f2b1332d0f6411320182"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6347f2b1332d0f6411320183"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6347f2b1332d0f6411320184"),
    firstName: 'Jame',
    lastName: 'roh',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("6347f2b1332d0f6411320185"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: '30000',
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '1',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6347f2b1332d0f6411320186"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6347f2b1332d0f6411320187"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6347f2b1332d0f6411320188"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  },
  {
    _id: ObjectId("6347f2b1332d0f6411320189"),
    firstName: 'Rohan',
    lastName: 'Jame',
    salary: '30000',
    department: 'Technical',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '1',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6347f2b1332d0f641132018a"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '20000',
    overallExp: '1',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'ECE'
  },
  {
    _id: ObjectId("6347f2b1332d0f641132018b"),
    firstName: 'Sao',
    lastName: 'Avika',
    salary: '30000',
    department: 'Sales',
    lastCompany: 'Y',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '1234567860',
    yearGrad: '2015',
    gradStream: 'CSE'
  },
  {
    _id: ObjectId("6347f2b1332d0f641132018c"),
    firstName: 'Jame',
    lastName: 'Doe',
    salary: '35000',
    department: 'Accounts',
    lastCompany: 'Z',
    lastSalary: '15000',
    overallExp: '2',
    contactInfo: '123567890',
    yearGrad: '2019',
    gradStream: 'EEE'
  }
]