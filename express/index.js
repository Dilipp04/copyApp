const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

let data = {
  1: ``,
  2: ``,
  3: `
> rainfall<-c(799,1174.8,865.1,1334.6,635.4,918.5,685.5,998.6,784.2,985,882.8,1071)
> rainfall.timeseries <- ts(rainfall,start = c(2012,1),frequency = 12)
> print(rainfall.timeseries)
> png(file = "rainfall.png")
> plot(rainfall.timeseries)
> dev.off()
  
  `,
  4: `
  > newiris <- iris
> newiris$Species <- NULL
> kc <- kmeans(newiris, 3)
> table(iris$Species, kc$cluster)
> plot(newiris[c("Sepal.Length", "Sepal.Width")], col = kc$cluster)
> points(kc$centers[, c("Sepal.Length", "Sepal.Width")], col = 1:3, pch = 8, cex = 2)
  `,
  5: `
  > x <- c(151, 174, 138, 186, 128, 136, 179, 163, 152, 131)
> y <- c(63, 81, 56, 91, 47, 57, 76, 72, 62, 48)
> # Apply the lm() function.
> relation <- lm(y~x)
> print(relation)
> print(summary(relation))
> a <- data.frame(x = 170)
> result <- predict(relation,a)
> print(result)
> png(file = "linearregression.png")
> plot(y,x,col = "blue",main = "Height & Weight Regression",+ abline(lm(x~y)),cex =
1.3,pch = 16,xlab = "Weight in Kg",ylab = "Height in + cm")
> dev.off()
  
  `,
  6: `
  > x <- c(151, 174, 138, 186, 128, 136, 179, 163, 152, 131)
> y <- c(63, 81, 56, 91, 47, 57, 76, 72, 62, 48)
> y_binary <- ifelse(y > 60, 1, 0)
> data <- data.frame(x = x, y = y, y_binary = y_binary)
> logistic_model <- glm(y_binary ~ x, data = data, family = binomial)
> summary(logistic_model)
> predicted_prob <- predict(logistic_model, type = "response")
> predicted_class <- ifelse(predicted_prob > 0.5, 1, 0)
> table(Predicted = predicted_class, Actual = y_binary)
> library(ggplot2)
> ggplot(data, aes(x = x, y = y_binary)) +
+ geom_point() +
+ stat_smooth(method = "glm", method.args = list(family = "binomial"), se = FALSE) +
+ labs(title = "Logistic Regression: Binary Outcome by x",
+ x = "x",
+ y = "Binary Outcome")
  `,
  7: `
  !pip install pandas
import pandas as pd
df=pd.read_csv('AdventureWorks Sales.csv')
df
df.head()
df.tail()
df.describe()
print(df.columns)
print(df.shape)
print(df.isnull())
print(df.corr)
df.plot()
df.hist()
df.boxplot()
df.groupby('Channel').count().plot(kind='pie', y='SalesOrderLineKey', autopct='%1.1f%%',
figsize=(6,6))
  `,
  8: `
  import pandas as pd
import matplotlib.pyplot as plt
file_path = "AdventureWorks Sales.csv"
sales = pd.read_csv(file_path)
print(sales.info())
print(sales.head())
plt.figure(figsize=(10,6))
sales_count = sales.groupby('Channel').count()['SalesOrderLineKey']
sales_count.plot(kind='bar', color=['skyblue', 'orange', 'green'])
plt.title('Total Sales Orders by Channel')
plt.xlabel('Channel')
plt.ylabel('Number of Orders')
plt.xticks(rotation=45)
plt.grid(axis='y', linestyle='--', alpha=0.7)
plt.show()
plt.figure(figsize=(8,8))
sales_count.plot(kind='pie', autopct='%1.1f%%', colors=['lightblue', 'lightgreen', 'lightcoral'])
plt.title('Sales Order Distribution by Channel')
plt.ylabel('')
plt.show()
  `,
};

// Route that returns JSON data
app.get("/", (req, res) => {
  res.send(data);
});
app.get("/:pno", (req, res) => {
  res.send(data[req.params.pno]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
