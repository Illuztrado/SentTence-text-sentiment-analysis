# SentTence: A Sentiment Analysis Application
SentTence: An application that performs sentiment analysis on text by calling on an external API. SentTence will categorize text as either positive, neutral, or negative.

## Technologies utilized
**Built with**: HTML, CSS, JavaScript, [MeaningCloud](https://github.com/MeaningCloud/)'s Sentiment Analysis API

### Client
SentTence is written in HTML, CSS, and JavaScript.

### Server
SentTence takes in user requests in text format from the client and utilizes [MeaningCloud](https://github.com/MeaningCloud/)'s Sentiment Analysis API to perform sentiment analysis on the text input. The API returns the response objects as enumerated in MeaningCloud's API Documentation: https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/response
<!-- <table>
  <thead>
    <th>Name</th>
    <th>Description</th>
  </thead>
  <tbody>
    <th>score_tag</th>
     <td>Polarity of the element it refers to: global polarity,polarity_term, sentimented_concept, sentimented_entity, segment or sentence. Possible values:
P+: strong positive
P: positive
NEU: neutral
N: negative
N+: strong negative
NONE: without polarity</td>
    
    <th></th>
    <td></td>
    
        <th></th>
    <td></td>
    
        <th></th>
    <td></td>
    
        <th></th>
    <td></td>
    
        <th></th>
    <td></td>
    
    Marks the agreement between the sentiments detected in the text, the sentence or the segment it refers to. It has two possible values:
AGREEMENT: the different elements have the same polarity.
DISAGREEMENT: there is disagreement between the different elements' polarity.
  </tbody>
</table> -->
