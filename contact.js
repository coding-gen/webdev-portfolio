let form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let form = document.querySelector('form');
  let no_submission = 0
  let output = []

  if (form.username.value.length === 0) {
    output.push(`Username: no submission`);
    no_submission += 1;
  }
  else {
    output.push(`Username: ${form.username.value}`);
  }
  if (form.email.value.length === 0) {
    output.push(`Email: no submission`);
    no_submission += 1;
  }
  else {
    output.push(`Email: ${form.email.value}`);
  }
  if (form.newsletter.value.length === 0) {
    output.push(`Newsletter: no submission`)
    no_submission += 1;
  }
  else {
    output.push(`Newsletter: ${form.newsletter.value}`);
  }
  if (form.date.value.length === 0) {
    output.push(`Date: no submission`);
    no_submission += 1;
  }
  else {
    output.push(`Date: ${form.date.value}`);
  }

  if (no_submission < 4) {
    console.group('======== Form Submission ========');
    for (line of output) {
      console.log(line)
    }
    console.groupEnd();
  } else {
    console.warn("You must enter some data to submit this form.")
  }



}

