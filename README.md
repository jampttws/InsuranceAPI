# InsuranceAPI

an api which uses to compare the cost of insurance and find insurance that cover each symptoms of user.

``` 
https://insuranceapii.herokuapp.com 
```


 for getting all health insurance.
```
 GET /health   
 ```

for getting all disease.
```
GET /disease 
```

for getting all company.
```
GET /company 
```

for getting health insurance with expected insurance company.
```
POST /company/search

with Json request { 'company' : 'xx' }
```

for getting health insurance with expected age coverage and premium rate.
```
POST /health/cost

with Json request { 'age' : xx, 'rate' : yy }
```

for getting health insurance with expected age coverage and premium rate order from minimum premium rate.
```
POST /health/cost/min

with Json request { 'age' : xx, 'rate' : yy }
```

for getting health insurance with expected age coverage and premium rate order from minimum cover expense.
```
POST /health/cost/min/coverexpense

with Json request { 'age' : xx, 'rate' : yy }
```

for getting health insurance with expected age coverage, premium rate and coverage symptoms.
```
POST /health/disease

with Json request { 'age' : xx, 'rate' : yy, 'disease' : 'zzz' }
```

for getting health insurance with expected age coverage, premium rate and coverage symptoms order from minimum premium rate.
```
POST /health/disease/min

with Json request { 'age' : xx, 'rate' : yy, 'disease' : 'zzz' }
```

for getting health insurance with expected age coverage, premium rate and coverage symptoms order from minimum cover expense.
```
POST /health/disease/min/coverexpense

with Json request { 'age' : xx, 'rate' : yy, 'disease' : 'zzz' }
```
------
 ## user site

for getting all user.
```
GET /user
```

for add user details.
```
POST /user/add
with Json request { 'id' : xxx, 'name' : 'yyy', 'birthdate' : 'yyyy-mm-dd', 'program' : 'zzz', 'company' : 'kkk'}
```

for getting each user's insurance with match id.
```
POST /user/details
with Json request { 'id' : xxx }
```

for getting insurance company's logo.
```
GET /user/logo
```