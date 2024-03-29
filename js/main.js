//Event listener: On button click
document.querySelector('button').addEventListener('click', getFetch);

//Fetch using Meaningcloud's API
function getFetch(){
  const text = document.querySelector('textarea').value;
  const formdata = new FormData();
  formdata.append("key", "ecddab0afc3b68a6dd7a50e31cfa9434");
  formdata.append("txt", `${text}`);
  formdata.append("lang", "en");  // 2-letter code, like en es fr ...

  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  // show results element
  document.querySelector(".hidden").classList.remove("hidden");

  const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    // .then(response => ({
    //   status: response.status, 
    //   body: response.json()
    // }))
    // .then(({ status, body }) => {
    //   console.log(status, body,);
    //   console.log(body.Object);
    // })
    // .catch(error => console.log('error', error));
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);
      console.log(data.score_tag);
      console.log(data.subjectivity);
      console.log(data.irony);
      console.log(data.confidence);
      console.log(data.agreement);
      let scoreTag = document.querySelector('#polarity');
      scoreTag.innerText = "Polarity:";
      switch(data.score_tag) {
        case "P+":
          scoreTag.innerText += " Strong Positive";
          break;
        case "P":
          scoreTag.innerText += " Positive";
          break;
        case "NEU":
          scoreTag.innerText += " Neutral";
          break;
        case "N":
          scoreTag.innerText += " Negative";
          break;
        case "N+":
          scoreTag.innerText += " Strong Negative";
          break;
        default:
          scoreTag.innerText += " Without Polarity";
          break;
      }
      document.querySelector('#subjectivity').innerText = `Subjectivity: ${data.subjectivity.toLowerCase()}`;
      document.querySelector('#irony').innerText = `Irony: ${data.irony.toLowerCase()}`;
      document.querySelector('#confidence').innerText = `Confidence (0 to 100): ${data.confidence}`;
      document.querySelector('#agreement').innerText = `Agreement: ${data.agreement.toLowerCase()}`;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}