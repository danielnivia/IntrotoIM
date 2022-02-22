### Documentation for Data Visualization

CSV File from:
[Emirates Palace Guest Nationality Statistics 2019](https://addata.gov.ae/dataset/emirates-palace-guest-nationality-statistics/resource/f18b077f-1b5f-409a-93c8-e32ddc8fd083#{view-graph:{graphOptions:{hooks:{processOffset:{},bindEvents:{}}}},graphOptions:{hooks:{processOffset:{},bindEvents:{}}}})

I edited some parts of the file concerning the regions in order to do the visualization correctly.

### Tutorial for Data Visualization


I was encountering issues with `loadStrings()` function, therefore I made some research and found a tutorial by Frederik De Bleser. In [his tutorial](https://www.youtube.com/watch?v=hokTcLVtZs8) he goes over a CSV file that has food serving and calories and shows how he makes sizes of circles accordingly. Instead of using the `loadStrings()` he uses the function `loadTable()` which seemed to work for me. Inspired by this tutorial I wanted to create a data visualization of the Nationalities that visited the Emirates Palace in 2019 through a bar graph. Following similarly his steps I was able to draw the bar graph and going correctly through each element of the CSV file. Here is the result of my code:


