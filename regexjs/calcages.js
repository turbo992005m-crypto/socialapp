export function getAge(birthdateStr) {
  const birthDate = new Date(birthdateStr);

  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const hasNotHadBirthdayYet =
    today.getMonth() < birthDate.getMonth() || 
    (
      today.getMonth() === birthDate.getMonth() && 
      today.getDate() < birthDate.getDate()        
    );
  if (hasNotHadBirthdayYet) {
    age--;
  }
  return age;
}
