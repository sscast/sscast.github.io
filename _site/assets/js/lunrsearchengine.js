
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about/",
    "title": "About",
    "body": "Me I’m fascinated about language related technologies and I have spent a lot of time self studying machine learning techniques to solve language problems. I converse fluently in English, Mandarin and Cantonese, and write programs mainly in Python nowadays. You can read my story about language to know more about my language learning journey.    Academic degrees in Computer Science and Economics and past experiences have helped me acquire tremendous data analytics techniques and methodologies, and provided me with a solid foundation to dive deeper in research and applications in today’s big data challenges. Analysing financial, economical, and industry data and come up with a solid understanding and view is one of the basic technical skills needed to fulfill my duties in the past, and it sometimes requires financial modeling skill, which is usually done in Excel spreadsheet.     I spent 2+ years working on training ML models for one of the leading chatbots and it opened a new career path for me by chance. I started to know NLU, NLP, chatbot, how machine learning algorithms help solve some of the problems, and how data quality affects the performance of a model, and I’m glad I acquired all these knowledge from hands on experiences. Computer Science background and professional working experiences helped me quickly excel from my last position and got me promoted to assume a leading role in ML model training.     Prior to be bitten by the NLP and AI bug, I have established a fruitful career in banking and finance and have had years of professional experiences in Singapore and Hong Kong. Those jobs required well-rounded skills and provided me with great exposure and learning opportunity to the professional world, and it has definitely helped me in various ways during my adventure in the tech industry, although it seems irrelevant.  CertificateI have completed many Coursera courses to keep up with current technology and I’m sure this list will grow.  Data Engineering on Google Cloud Platform Advanced Machine Learning with TensorFlow on Google Cloud Platform Structuring Machine Learning Projects TensorFlow in Practice SpecializationTechnical SkillsGit, Java, Python, JavaScript, CSS, HTML, Django, Jekyll, Docker, NLP, Machine Learning, GCP, Dialogflow, SQL PortfolioA binary classifier on sentiment analysis "
    }, {
    "id": 2,
    "url": "http://localhost:4000/",
    "title": "Blog",
    "body": "  "
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "",
    "body": ""
    }, {
    "id": 4,
    "url": "http://localhost:4000/My-Story-with-Language/",
    "title": "My Story With Language",
    "body": "2019/12/05 - My life has had a close relationship with many languages, and I have benefited from knowing multiple languages. learn english and computer languagesI was born speaking only Mandarin, and I started to learn English in secondary school, at age of 11, at my time when it was a mandatory class in school. I picked up Cantonese when I worked in Hong Kong (in my mid 20s) after my degrees. I studied computer science in college, where I learnt different kinds of programming languages. Object Oriented Programming started to gain its popularity when I was in college, so I can embark on OOP and OOD philosophies and made my journey now easier. impove english and mandarinI did translation and tutoring (Chinese) part time jobs when I was in college and between my degrees to make some pocket money. It turns out to become a process for me to improve my multilingual skills. After college, when I started to look for jobs, one of the main reasons I got my first job was because I speak mandarin, because a big clientele was from mainland China. After I moved to Hong Kong, the connection with mainland China became stronger, in other words, high profile clients and big deals, so being multilingual was more important to me. Completely separate English and Chinese was a big challenge I had to solve when I had to face clients, because they don’t speak English at all. I can’t use English words when I speak mandarin. Sounds familiar? learn cantonese and improve over yearsI was a fan of Cantonese, so I took the advantage of being physically in Hong Kong and learnt how to speak Cantonese. By the time I left Hong Kong, I was very comfortable conversing in Cantonese, but I had some difficutlties of writing/typing it. To me, it’s hard to find the right word corresponding to Cantonese when it comes to text. However, when I worked at one of the big names in Silicon Valley, having to look at huge of amount of Cantonese sentences every day, suddenly, I realized I can type and write Cantonese without a problem. Again, one of the reasons I got this job was because I speak Mandarin and I know computer language, and one of the reasons I got promoted afterwards was because I know Cantonese, so I was paid to pick up some technologies because of my language skills. Why not? short summaryThroughout these years, I didn’t take classes to learn these languages (other than mandatory classes in school). The only language I took classes to learn was French but I gave up after the beginner’s level. The fact that I didn’t use it after class gave me a lot of pain to attend class too. So, my experiences proved the powerfulness of life long learning and on the job learning. driven forceWhat I have achieved is probably quite amazing to some people, but when I went through my life, the driven force was not big ambitions or egos, but simple wishes that I wanted to know more about it or I wanted my life to become easier so I can communicate with others better. Meanwhile, I kept an open mind when it comes to new opportunities and not to set boundaries to myself as to what I can do. Being able to work with smart people and interact with high profile clients provided me great opportunities to learn, and I’ve seen a lot others who have done better and mastered more languages. I decided to share my story here in the hope that it might become inspiration to someone. what’s next?Looking back, I personally have benefited from the language skills and the more I know about a language, the more I realize that there is an amazing culture behind it. With globalization and technology advancement, we cannot stop the fact some less popular language will get even less popular. How we use technology to “preserve” it is something I’m very fascinated about. For example, one day in the future, you want to to know how to say something in one ancient language or dialect, rather than digging into some history and linguistic books(and probably given up before you find an answer), if you can simply ask “somebody”, then you can get your answer immediately. This sounds really great and make me excited! With fascination like that, I started to answer questions on Stack Exchange about Chinese language related questions. And I have also tried to know more about technologies that I can use to help me achieve this. I’m glad to make baby steps everyday. Again, I don’t want to set boundaries to what I can do in the future with what I’m doing right now, and I’m open to new opportunities that I can contribute and learn. "
    }, {
    "id": 5,
    "url": "http://localhost:4000/UCI-Sentiment-labeled-data/",
    "title": "A binary classifier on sentiment analysis",
    "body": "2019/11/08 - Purpose This exercise looks at some sentiment data, so as to experiment binary classification on text data and evaluate some ML models. The dataset This dataset contains 3000 reviews with scores Score is either 1 (for positive) or 0 (for negative) The sentences come from three different websites/fields:     imdb. com   amazon. com   yelp. com    For each website, there exists 1000 reviews, 500 positive and 500 negative. Those were selected randomly from larger datasets of reviews. The reviews were selected to have a clearly positive or negative connotaton, with a goal that no neutral sentences to be selected. You may download the data at this link. Considerations The dataset has been selected with umambiguous label so it’s perfect to do model training; however, the data size is not big so data might not be generalized enough and thus, may not be a good dataset for deep learning models. However, it still worth to use it as an experiment to test our understandings about different models The dataset is relatively clean: no need to deal with outliers, missing or misleading data, and analysis can be focused on model selection and classificationData Preprocessing Inspect dataA quick glance of every dataset made me realize that there is something wrong with loading the data for imdb dataset:  The shape for imdb data doesn’t seem to be right, as we expect 1000 rows but there are only 748 rows.  Reload dataI spent some time to reload imdb data without using pandas read_csv. After fixing the loading, adding a couple more columns including word count and data source, we can plot the data and have some idea  Visualize  The data suggested to me   imdb reviews are generally having more words than Amazon and Yelp reviews  Word count distribution of positive and negative reviews are both following normal distribution, sckewed towards less words, which makes sense, as not many people like to write very long reviews  both Amazon and imdb have relatively similar range of word counts for positive and negative reviews, however, Yelp tends to have noticeable longer negative reviews than positive ones. I will be curious to see the total number of positive vs negative reviews, and see if there are more negative reviews on Yelp than positive ones.  Process data:  I cleaned up the data by removing punctuations and stopwords and some extended stopwords such as ‘s’, ‘ve’, ‘m’, ‘wasn’, ‘didn’, ‘t’ etc. , those incomplete words resulted from removing of apostrophe and not containing any meaning.  I have also removed words like ‘product’, ‘movie’, ‘service’ that are high frequency words for both positive and negative reviews, which are neutral in natureClustering:  Let’s look at the word cloud plot to have a few of the top frequent words. The words shown in the white box are word cloud from Positive reviews and red box are from the negative reviews:  From a glance of the wordcloud, we can see some intereting findings, which will help our next steps for modeling. For example:    “quality”, “sound” tend to be associated with positive reviews, and “phone”, “makes”, “bluetooth” tend to be associated with negative reviews. We can further manipulate the wordCloud based on the meaningfulness of the words, but currently it looks fine to me.  Classification: Logistic Regression:  The following are metrics I got after running logistic regression on the dataset, with a train/test split of 80/20:12345678        precision  recall f1-score  support      0    0. 80   0. 84   0. 82    299      1    0. 83   0. 79   0. 81    301  accuracy              0. 81    600  macro avg    0. 81   0. 81   0. 81    600weighted avg    0. 81   0. 81   0. 81    600 The accuracy (81%) is not too bad, given that this is a small dataset, and I only did very simple data cleanning. Interesting to see that the precision is higher on positive reviews, and recall is higher on negative reviews. Given the size of the dataset, this might be simply based on randomness of the distributio of the train and test data. I have tested the same model on a much larger dataset, with 50,000 training record, and I can easily achieve 90% accuracy, and higher precision and higher recall. Naive Bayes: 12345678        precision  recall f1-score  support      0    0. 83   0. 79   0. 81    309      1    0. 79   0. 83   0. 81    291  accuracy              0. 81    600  macro avg    0. 81   0. 81   0. 81    600weighted avg    0. 81   0. 81   0. 81    600Simple MLP: This is a simple MLP model implemented with Keras and the code piece is borrowed from Keras API documentation. The result is similar to using Logistic Regression or Naive Bayes. Training accuracy and loss curve looks as follows: models comparison: ROC curve looks quite similar with the three models and we can also see the accuracy levels are similar too. imdb dataset seems fit better with the MLP model compared with the other two datasets.  Conclusion and next steps: The simple exercise shows how simple sentiment models work and work as a quick test of a dataset. What can be done further is to do a multiclassification classifier, with positive, negative and neutral reviews, as in real life, people do have neatral opinions. One thing to note is that the dataset for this model is hand crafted, by removing review score=3, and set review scores=1 and 2 as negative, and 4 and 5 as positive. This way has effectively deliminate some ambiguity, and thus making the model more accurate. However, the dataset I use with 50,000 record have only positive and negative labels too, but didn’t mention that it is prepared and selected based on the same methodology, also achieved pretty good accurarcy. So building a classifier should be very feasible and can be used in many real business use cases. With larger dataset, we can definitely choose a model to achieve better metrics. This is a good exercise to once again show that the problem for deep learning is not to achieve high accuracy, but to generalize. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});