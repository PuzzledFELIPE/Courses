function maskEmail(email) {
  const domain = email.slice(email.indexOf('@'));
  const name = email.slice(0, email.indexOf('@'));
  const maskedName = name[0] + '*'.repeat(name.length - 2) + name[name.length - 1];
  return maskedName + domain;
}

console.log(maskEmail('fesou70@gmail.com'));
