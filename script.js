const form = document.getElementById('dataForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  console.log('Data to be sent:', data); // הוסף הודעת קונסול כדי לבדוק את הנתונים שנשלחים
  fetch('https://script.google.com/macros/s/AKfycbzPf4EMK89k_3wRoBwMZo6BEQYrysgat2Zi9fE_kl4HgwZBVTp2g6NhvrTcg23peq4c9g/exec', { // כאן תכניס את ה-URL של הסקריפט שיצרת
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(data)
    })
    .then(response => {
      console.log('Response:', response); // הוסף הודעת קונסול כדי לבדוק את התגובה
      alert('הנתונים נשלחו בהצלחה!');
      form.reset();
    })
    .catch(error => {
      console.error('Error:', error); // הוסף הודעת קונסול כדי לבדוק את השגיאה
      alert('שגיאה בשליחת הנתונים');
    });
});