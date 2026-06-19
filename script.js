document.addEventListener('DOMContentLoaded', () => {
 const form = document.getElementById('enquiryForm');

 if(form){
   form.addEventListener('submit', function(e){
     e.preventDefault();

     const name = document.getElementById('name').value.trim();
     const email = document.getElementById('email').value.trim();
     const message = document.getElementById('message').value.trim();

     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if(name.length < 2){
       alert('Name must contain at least 2 characters.');
       return;
     }

     if(!emailPattern.test(email)){
       alert('Please enter a valid email address.');
       return;
     }

     if(message.length < 10){
       alert('Message must contain at least 10 characters.');
       return;
     }

     alert('Thank you! Your enquiry has been submitted successfully.');
     form.reset();
   });
 }
});