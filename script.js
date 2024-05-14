function calculateAge() {
  const dobInput1 = document.getElementById("dob").value;
  const dobInput2 = document.getElementById("now").value;
  const dob = new Date(dobInput1);
  const dobDDMMYYYY = dob.toLocaleDateString("en-GB");
  const now = new Date(dobInput2);
  const nowDDMMYYYY = now.toLocaleDateString("en-GB");

  const diff = now.getTime() - dob.getTime();
  const ageDate = new Date(diff);

  const years = Math.abs(ageDate.getUTCFullYear() - 1970);
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1;

  const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));

  const ageInYears = `${years} years ${months} months ${days} days`;
  const ageInMonths = `${years * 12 + months} months ${days} days`;
  const ageInWeeks = `${weeks} weeks ${days} days`;
  const ageInDays = `${diff / (1000 * 60 * 60 * 24)} days`;

  const dateInterval = ` ${dobDDMMYYYY} and ${nowDDMMYYYY}`;
  document.getElementById("showDateInterval").innerHTML = dateInterval;

  // Display the calculated age in the HTML elements
  document.getElementById("years").textContent = ageInYears;
  document.getElementById("months").textContent = ageInMonths;
  document.getElementById("weeks").textContent = ageInWeeks;
  document.getElementById("days").textContent = ageInDays;
}
