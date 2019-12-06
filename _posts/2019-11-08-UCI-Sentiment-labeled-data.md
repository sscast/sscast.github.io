---
layout: post
title:  "A binary classifier on sentiment analysis"
author: Sylvia
avatar: assets/images/avatar.png
date:   2019-11-08 21:14:38 -0500
categories:	showcase
---

# Purpose

- This exercise looks at some sentiment data, so as to experiment binary classification on text data and evaluate some ML models. 

# The dataset

- This dataset contains 3000 reviews with scores
- Score is either 1 (for positive) or 0 (for negative)
- The sentences come from three different websites/fields:
1. imdb.com
2. amazon.com
3. yelp.com
- For each website, there exists 1000 reviews, 500 positive and 500 negative. Those were selected randomly from larger datasets of reviews.
The reviews were selected to have a clearly positive or negative connotaton, with a goal that no neutral sentences to be selected.
You may download the data at this [link](http://archive.ics.uci.edu/ml/datasets/Sentiment+Labelled+Sentences). 

# Considerations

- The dataset has been selected with umambiguous label so it's perfect to do model training; however, the data size is not big so data might not be generalized enough and thus, may not be a good dataset for deep learning models. However, it still worth to use it as an experiment to test our understandings about different models
- The dataset is relatively clean: no need to deal with outliers, missing or misleading data, and analysis can be focused on model selection and classification

# Data Preprocessing

- *Inspect data* 

A quick glance of every dataset made me realize that there is something wrong with loading the data for imdb dataset:

![shape](../../../../assets/images/shape.png)
> The shape for imdb data doesn't seem to be right, as we expect 1000 rows but there are only 748 rows. 

- *Reload data* 

I spent some time to reload imdb data without using pandas read_csv. After fixing the loading, adding a couple more columns including word count and data source, we can plot the data and have some idea

- *Visualize*

![word counts visulaization](../../../../assets/images/wordcount.png)


> # The data suggested to me
- imdb reviews are generally having more words than Amazon and Yelp reviews 
- Word count distribution of positive and negative reviews are both following normal distribution, sckewed towards less words, which makes sense, as not many people like to write very long reviews 
- both Amazon and imdb have relatively similar range of word counts for positive and negative reviews, however, Yelp tends to have noticeable longer negative reviews than positive ones. I will be curious to see the total number of positive vs negative reviews, and see if there are more negative reviews on Yelp than positive ones.



### Process data

* I cleaned up the data by removing punctuations and stopwords and some extended stopwords such as 's', 've', 'm', 'wasn', 'didn', 't' etc. , those incomplete words resulted from removing of apostrophe and not containing any meaning. 
* I have also removed words like 'product', 'movie', 'service' that are high frequency words for both positive and negative reviews, which are neutral in nature

### Clustering 

* Let's look at the word cloud plot to have a few of the top frequent words. The words shown in the white box are word cloud from Positive reviews and red box are from the negative reviews:


 ![WordCloud](../../../../assets/images/positive.png)
 
> From a glance of the wordcloud, we can see some intereting findings, which will help our next steps for modeling. For example:	
> - "quality", "sound" tend to be associated with positive reviews, and "phone", "makes", "bluetooth" tend to be associated with negative reviews. We can further manipulate the wordCloud based on the meaningfulness of the words, but currently it looks fine to me. 


### Classification 

#### Logistic Regression 

* The following are metrics I got after running logistic regression on the dataset, with a train/test split of 80/20: 

```
               precision    recall  f1-score   support

           0       0.80      0.84      0.82       299
           1       0.83      0.79      0.81       301

    accuracy                           0.81       600
   macro avg       0.81      0.81      0.81       600
weighted avg       0.81      0.81      0.81       600
```
> The accuracy (81%) is not too bad, given that this is a small dataset, and I only did very simple data cleanning. Interesting to see that the precision is higher on positive reviews, and recall is higher on negative reviews. Given the size of the dataset, this might be simply based on randomness of the distributio of the train and test data. 

I have tested the same model on a much larger dataset, with 50,000 training record, and I can easily achieve 90% accuracy, and higher precision and higher recall.  

#### Naive Bayes

```
               precision    recall  f1-score   support

           0       0.83      0.79      0.81       309
           1       0.79      0.83      0.81       291

    accuracy                           0.81       600
   macro avg       0.81      0.81      0.81       600
weighted avg       0.81      0.81      0.81       600
```

#### Simple MLP 

This is a simple MLP model implemented with Keras and the code piece is borrowed from Keras API documentation. 

The result is similar to using Logistic Regression or Naive Bayes. 

Training accuracy and loss curve looks as follows: 

![MLP_training](../../../../assets/images/MLP_training.png)
![MLP_loss](../../../../assets/images/MLP_loss.png)


#### models comparison 

ROC curve looks quite similar with the three models and we can also see the accuracy levels are similar too. imdb dataset seems fit better with the MLP model compared with the other two datasets.  

![roc_auc_curve](../../../../assets/images/roc_auc_curve.png)


![accuracy](../../../../assets/images/accuracy.png)


### Conclusion and next steps
The simple exercise shows how simple sentiment models work and work as a quick test of a dataset. What can be done further is to do a multiclassification classifier, with positive, negative and neutral reviews, as in real life, people do have neatral opinions. 

One thing to note is that the dataset for this model is hand crafted, by removing review score=3, and set review scores=1 and 2 as negative, and 4 and 5 as positive. This way has effectively deliminate some ambiguity, and thus making the model more accurate. However, the dataset I use with 50,000 record have only positive and negative labels too, but didn't mention that it is prepared and selected based on the same methodology, also achieved pretty good accurarcy. So building a classifier should be very feasible and can be used in many real business use cases. With larger dataset, we can definitely choose a model to achieve better metrics. This is a good exercise to once again show that the problem for deep learning is not to achieve high accuracy, but to generalize. 


