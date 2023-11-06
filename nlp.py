# Jinesh Chudasama BE-4 2
# Shantanu Darade
# Atarva Nivalkar

import codecs
from deep_translator import GoogleTranslator
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer


with codecs.open('C:/programs/wesite/NLP/hindi.txt', encoding='utf-8') as f:
    sentences = f.readlines()

    
for sentence in sentences:
 translated_text = GoogleTranslator(source='auto', target='en').translate(sentence)
 # print(translated_text)
 analyzer = SentimentIntensityAnalyzer()
 sentiment_dict = analyzer.polarity_scores(translated_text)
	
 print("\nTranslated Sentence=",translated_text, "\nDictionary=",sentiment_dict)
 if sentiment_dict['compound'] >= 0.4 :
   print("It is a Positive Sentence\n")
   
 elif sentiment_dict['compound'] <= - 0.4 :
   print("It is a Negative Sentence\n")  
 else : 
  print("It is a Neutral Sentence\n")
  
# normalization x= x/ root(x^2 + alpha)
# 😊