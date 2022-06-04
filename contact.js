let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let form = document.querySelector('form');
  let requestedInfo = 0;
  let contactInfo = 0;
  let output = []

  if (form.username.value.length === 0) {
    output.push(`Name: no submission`);
  }
  else {
    output.push(`Username: ${form.username.value}`);
    contactInfo += 1;
  }
  if (form.email.value.length === 0) {
    output.push(`Email: no submission`);
  }
  else {
    output.push(`Email: ${form.email.value}`);
    contactInfo += 1;
  }

  if (form.newsletter.value.length === 0) {
    output.push(`Newsletter: no submission`)
  }
  else {
    output.push(`Newsletter: ${form.newsletter.value}`);
    requestedInfo += 1;
  }

  let interests = $('input[name=gardenCategories]:checked');
  if (interests.length === 0) {
    output.push(`Interests: no submission`);
  }
  else {
    interestList = `Interests: `
    for (let i = 0; i < interests.length - 1; i++) {
      interestList += interests[i].id + ", "
    }
    interestList += interests[interests.length - 1].id
    output.push(interestList)
    requestedInfo += 1;
  }
  if (form.question.value.length === 0) {
    output.push(`Questions: no submission`);
  }
  else {
    output.push(`Questions: ${form.question.value}`);
    requestedInfo += 1;
  }

  if (requestedInfo > 0 & contactInfo > 0) {
    console.group('======== Form Submission ========');
    for (line of output) {
      console.log(line)
    }
    console.groupEnd();
  } else {
    alert("In order to receive a response, you must provide contact information and your interests.");
  }



}

